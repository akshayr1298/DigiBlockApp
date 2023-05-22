import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
  PAN: {type:String,required:true},
  SSN: {type:String,required:true},
  candidatePhone: {type:String,required:true},
  candidateEmail: {type:String,required:true},
  candidateName: {type:String,required:true},
  trustScore: {type:Number,required:true},
});

const Candidate = mongoose.model("Candidate", candidateSchema);

export default Candidate;
