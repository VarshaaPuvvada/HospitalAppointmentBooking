const mongoose=require("mongoose");
const patientSchema=new mongoose.Schema({
    "fname":{type:String},
    "lname":{type:String},
    "gender":{type:String},
    "dob":{type:Date},
    "age":{type:Number},
    "phone":{type:Number},
    "email":{type:String},
    "blood":{type:String},
    "allergy":{type:String},
    "password":{type:String},
},{
    collection:"patients"
})

module.exports=mongoose.model("patientSchema",patientSchema);

