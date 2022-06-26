const mongoose = require("mongoose");
const {Schema} = mongoose;


const Sleep = new Schema({
    Uid:String,
    Sid:String,
    Stime: String,
    isS:Boolean,
    Wtime: String,
    Date: String, 
});

module.exports = Sleep;
