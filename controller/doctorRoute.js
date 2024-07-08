const express = require("express");
const doctorSchema = require("../model/doctorSchema");
const mongoose = require("mongoose");

const doctorRoute = express.Router();

doctorRoute.get("/", (req, res) => {
    doctorSchema.find((err, data) => {
        if (err) return err;
        else res.json(data);
    });
});

module.exports = doctorRoute;

