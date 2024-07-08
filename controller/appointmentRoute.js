const express = require("express");
const appointmentSchema=require("../model/appointmentSchema");
const mongoose = require("mongoose");

const appointmentRoute = express.Router();

appointmentRoute.get("/", (req, res) => {
    appointmentSchema.find((err, data) => {
        if (err) return err;
        else res.json(data);
    });
});

appointmentRoute.post("/add-appointment",(req,res)=>{
    appointmentSchema.create(req.body,(err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})

appointmentRoute.route("/update-appointment/:id")
.get((req, res) => {
    appointmentSchema.findById(mongoose.Types.ObjectId(req.params.id),
    (err, data) => {
        if (err) 
            return err;
        else 
            res.json(data);
    });
})
.put((req, res) => {
    appointmentSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    { $set: req.body },
    (err, data) => {
        if (err) 
            return err;
        else 
            res.json(data);
    });
});

appointmentRoute.delete("/delete-appointment/:id", (req, res) => {
    appointmentSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
    (err, data) => {
        if (err) 
            return err;
        else 
            res.json(data);
    });
});


module.exports = appointmentRoute;
