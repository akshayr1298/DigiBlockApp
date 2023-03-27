import mongoose from "mongoose";

const roomSchema =  mongoose.Schema({
    name:{type:String,required:true},
    type:{type:String,required:true},
    qty:{type:Number,required:true},
    address:{type:String,required:true},
    title:{type:String,required:true},
    img:{type:[String]},
    desc:{type:String,required:true},
    price:{type:Number,required:true},
})

export default mongoose.model("Rooms",roomSchema)