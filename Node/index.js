const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(cors());

app.use("/user", require('./Routes/user'));
app.use("/track",require('./Routes/track'));
app.get("/",(req,res)=>{
    res.send("Welcome to the Capstone Project");
})
app.listen(3000, (e) => {
    console.log("Connected");

    mongoose.connect("mongodb://localhost/sleepTracker").then( (result) => {
        console.log("Database Connected ");
    }).catch((e)=>{
        console.log("Database connection failed..");
        console.log(e);
    })
})
