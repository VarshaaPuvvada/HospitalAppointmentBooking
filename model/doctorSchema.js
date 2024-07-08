const mongoose=require("mongoose");
const doctorSchema=new mongoose.Schema({
    "fname":{type:String},
    "lname":{type:String},
    "gender":{type:String},
    "phone":{type:Number},
    "email":{type:String},
    "specialization":{type:String},
    "qualifications":{type:String},
    "shiftTiming":{type:String},
    "languagesSpoken":{type:String},
},{
    collection:"doctors"
})

module.exports=mongoose.model("doctorSchema",doctorSchema);