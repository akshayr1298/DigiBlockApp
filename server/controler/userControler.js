import User from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Rooms from "../model/roomModel.js";


const signUp = async (req, res, next) => {
  try {
    console.log("req", req.body);
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
    const token = jwt.sign({ email }, process.env.jwt_secret, { expiresIn: "20m" });
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
    const city  = req.body.address;
    console.log(city);
    const searchrooms = await Rooms.find({ address: city });
    return res.status(200).json({ searchrooms });
  } catch (error) {
    next(error);
  }
};

export { signUp, signIn, searchRooms };
