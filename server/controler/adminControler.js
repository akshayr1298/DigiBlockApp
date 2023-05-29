import Rooms from "../model/roomModel.js";
import User from "../model/userModel.js";
import moment from "moment";

const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(401).json({ message: "Invalid email" });
    }
    const passwordCheck = await bcrypt.compare(password, admin.password);
    if (!passwordCheck) {
      res.status(401).json({ message: "Invalid password" });
    }
    return res.status(200).json({ message: "login successs" });
  } catch (error) {
    console.log("error", error);
  }
};

const addRooms = async (req, res, next) => {
  try {
    const { name, type, qty, address, title, desc, price } = req.body;
    const rooms = await Rooms.create({
      name,
      type,
      qty,
      address,
      title,
      desc,
      price,
    });
    if (rooms) {
      return res.status(200).json({ message: "rooms created succesfully" });
    }
    console.log("something went to wrong");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getRooms = async (req, res, next) => {
  try {
    const getrooms = await Rooms.find();
    const date1 = new Date("2023-05-23T10:00:00Z");
    const date2 = new Date("2023-05-23T11:30:00Z");
    const differenceInSeconds = Math.floor(
      (date2.getTime() - date1.getTime()) / 1000
    );
    console.log("Difference in seconds:", differenceInSeconds);
    return res.status(200).json({ getrooms });
  } catch (error) {
    next(error);
  }
};

const updateRooms = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updaterooms = await Rooms.findByIdAndUpdate(
      { _id: id },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({ updaterooms });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const delectUser = async (req, res, next) => {
  try {
    console.log("req");
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user delected successfully" });
  } catch (error) {
    next(error);
  }
};
const delectRooms = async (req, res, next) => {
  try {
    console.log("req");
    const id = req.params.id;
    await Rooms.deleteOne({ _id: id });
    return res.status(200).json({ message: "rooms delected successfully" });
  } catch (error) {
    next(error);
  }
};

// const isSubscriptionExpired = (req, res,next) => {

//   const currentDate = moment().startOf("day");
//   const subscriptionStart = moment(startDate).startOf("day");
//   const subscriptionEnd = moment(endDate).startOf("day");

//   return currentDate.isAfter(subscriptionEnd) || currentDate.isSame(subscriptionEnd);
// };

// // Example usage
// const subscriptionStartDate = new Date("2023-05-01") ;
// const subscriptionEndDate = new Date("2023-06-01");
// const expired = isSubscriptionExpired(subscriptionStartDate, subscriptionEndDate);
// console.log(expired); // true or false

export { addRooms, adminLogin, updateRooms, delectRooms, getRooms, delectUser };
