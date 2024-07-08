const express = require("express");
const mongoose = require("mongoose");
const doctorRoute = require("./controller/doctorRoute");
const patientRoute=require("./controller/patientRoute");
const appointmentRoute=require("./controller/appointmentRoute");
const bodyParser=require("body-parser");
const cors=require("cors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://varshaapuvvadasrinath:SnZJZomPD0BcIBpo@cluster0.wh80tbs.mongodb.net/hospital");
var db = mongoose.connection;
db.on("open", () => console.log("Connected"));
db.on("error", () => console.log("Not Connected"));

app.use("/doctorRoute", doctorRoute);
app.use("/patientRoute",patientRoute);
app.use("/appointmentRoute",appointmentRoute);


app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
