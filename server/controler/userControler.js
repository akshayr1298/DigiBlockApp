import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Rooms from "../model/roomModel.js";
import geoip from "geoip-lite";
import { phone } from "phone";
import crypto from "crypto";
import APIKey from "../model/apimodel.js";
import Candidate from "../model/candidatemodel.js";

const signUp = async (req, res, next) => {
  try {
    const ip = "207.97.227.239";
    const geo = geoip.lookup(ip);
    console.log("ip", ip);
    console.log("geo=>", geo);
    const { name, email, password, phone } = req.body;
    const emailExist = await User.findOne({ email });
    emailExist
      ? res
          .status(403)
          .json({ message: "Email already exist try another email" })
      : console.log("emailExist", emailExist);
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashPassword,
      phone,
    });
    user
      ? res.status(200).json({ message: "user created successfully" })
      : console.log("oops something went to wrong");
  } catch (error) {
    console.log("signup error", error);
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    const token = jwt.sign({ email }, process.env.jwt_secret, {
      expiresIn: "20m",
    });
    res.cookie("access_token", token, { maxAge: 600000, httpOnly: true });
    res
      .status(200)
      .json({ message: "Successfully logged in", access_token: token });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const searchRooms = async (req, res, next) => {
  try {
    const city = req.body.address;
    console.log(city);
    const searchrooms = await Rooms.find({ address: city });
    return res.status(200).json({ searchrooms });
  } catch (error) {
    next(error);
  }
};

const subcribtion = async (req, res, next) => {
  try {
    // const {id} = req.params
    console.log('sub',req.body);
    const apikey = crypto.randomBytes(32).toString("hex");
    console.log('apikey',apikey);
    const token = jwt.sign({ apikey }, process.env.jwt_secret, {
      expiresIn: "20m",
    });
    // await User.findByIdAndUpdate({id:id}, {$push: {apikey:token}})
    return res
      .status(200)
      .json({ message: "api key generated", api_key: token });
  } catch (error) {
    console.log(error.message);
  }
};

const createCanidate = async(req,res,next)=>{
  try {
    const {PAN,SSN,candidatePhone,candidateEmail,candidateName,trustScore} = req.body
    await Candidate.create({PAN,SSN,candidatePhone,candidateEmail,candidateName,trustScore})
    res.status(200).json({message:"candidate created"})
  } catch (error) {
    console.log(error);
  }
}

const createApi = async(req,res,next)=>{
  try {
    const {key,companyId,expiryDate,usageLimit,usageCount} = req.body
    await APIKey.create({key,companyId,expiryDate,usageLimit,usageCount})
    res.status(200).json({message:"api, created"})
  } catch (error) {
    console.log(error);
  }
}

const getTrustScore = async (req, res, next) => {
  try {
    console.log('reqqq');
    // const { candidates } = req.body;
    const candidates = await Candidate.find()
    console.log('candi',candidates[0]);

    // Validate the API key
    // const token = req.header("Authorization").replace("Bearer ", "");
    // console.log('token',token);
    // let apiKey;
    // try {
    //   apiKey = jwt.verify(token, process.env.JWT_SECRET);
    // } catch {
    //   return res.status(401).json({ error: "Invalid API key" });
    // }

    // Check the API key in the database
    const apiKeyDoc = await APIKey.findOne({ key: "sample_api_key" });
    if (!apiKeyDoc) {
      return res.status(401).json({ error: "Invalid API key" });
    }

    // Check the expiry date
    if (apiKeyDoc.expiryDate <= new Date()) {
      return res.status(401).json({ error: "API key expired" });
    }

    // Check the usage limit
    if (apiKeyDoc.usageCount >= apiKeyDoc.usageLimit) {
      return res.status(403).json({ error: "Usage limit reached" });
    }

    // Update the usage count
    apiKeyDoc.usageCount += 1;
    await apiKeyDoc.save();

    // Fetch the trust scores
    const results = [];
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      const candidateDoc = await Candidate.findOne({
        PAN: candidate.PAN,
        SSN: candidate.SSN,
        candidatePhone: candidate.candidatePhone,
        candidateEmail: candidate.candidateEmail,
        candidateName: candidate.candidateName,
      });
      if (!candidateDoc) {
        results.push({
          ...candidate,
          error: "Candidate not found",
        });
      } else {
        results.push({
          ...candidate,
          trustScore: candidateDoc.trustScore,
        });
      }
    }

    res.json({ candidates: results });
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};



export { signUp, signIn, searchRooms,subcribtion,getTrustScore,createCanidate,createApi };
