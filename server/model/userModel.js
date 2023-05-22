import mongoose from "mongoose";

const userSchema =  mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    phone:{type:String,required:true},
    booking:[{
        hotelName:{type:String,required:true},
        type:{type:String,required:true},
        roomCount:{type:Number,required:true},
        price:{type:Number,required:true},
        checkIn:{type:String,required:true},
        checkOut:{type:String,required:true},
        guest:{type:String,required:true},
        bookingDate:{type:String,required:true},
    }],
    apikey:[{type:String,required:true,expireAt:"1m"}]
})

export default mongoose.model("User",userSchema)