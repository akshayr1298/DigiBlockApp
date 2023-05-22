import mongoose from "mongoose";

const apiKeySchema = new mongoose.Schema({
  key: {type:String,required:true},
  companyId: {type:String,required:true},
  expiryDate: {type:Date,required:true},
  usageLimit: {type:Number,required:true},
  usageCount: {type:Number,required:true},
});

const APIKey = mongoose.model("APIKey", apiKeySchema);

export default APIKey;
