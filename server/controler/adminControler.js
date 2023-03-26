import Rooms from "../model/roomModel.js";

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
    const { name, type, address, title, desc, price } = req.body;
    const rooms = await Rooms.create({
      name,
      type,
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

const getRooms = async(req,res,next)=>{
    try {
        const getrooms =  await Rooms.find()
        return res.status(200).json({getrooms})
    } catch (error) {
        next(error)
    }
}

const updateRooms = async (req, res, next) => {
  try {
    const id =  req.params.id
    const updaterooms =  await Rooms.findByIdAndUpdate({_id:id},{$set:req.body},{new:true})
    return res.status(200).json({updaterooms})
  } catch (error) {
    console.log(error);
    next(error);
  }
};


const delectRooms = async(req,res,next)=>{
    try {
        console.log('req');
        const id = req.params.id
        await Rooms.deleteOne({_id:id})
        return res.status(200).json({message:"rooms delected successfully"})
    } catch (error) {
        next(error)
    }
}

export { addRooms, adminLogin,updateRooms,delectRooms,getRooms };
