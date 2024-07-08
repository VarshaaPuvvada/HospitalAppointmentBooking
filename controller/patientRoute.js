const express = require("express");
const patientSchema = require("../model/patientSchema");
const mongoose = require("mongoose");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

const patientRoute = express.Router();

patientRoute.get("/", (req, res) => {
    patientSchema.find((err, data) => {
        if (err) return err;
        else res.json(data);
    });
});


patientRoute.post("/add-patient", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashedPassword;
        const newPatient = await patientSchema.create(req.body);
        res.status(200).json(newPatient);
    } catch (err) {
        res.status(500).send(err);
    }
});

patientRoute.post("/xyz", async (req, res) => {
    const { email, password } = req.body;
    try {
        const patient = await patientSchema.findOne({ email });
        if (!patient) {
            return res.status(400).json({ message: "Patient not found" });
        }

        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: patient._id }, "your_jwt_secret", { expiresIn: '1h' });
        res.status(200).json({ message: "Login successful", token });
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = patientRoute;

