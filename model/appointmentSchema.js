const mongoose=require("mongoose");
const appointmentSchema=new mongoose.Schema({
    email:{type:String},
    date: { type: Date, required: true },
    time: { type: String, required: true },
    spec:{type:String,},
    reason: { type: String }
}, {
    collection: 'appointments'
});

module.exports = mongoose.model('appointmentSchema', appointmentSchema);
