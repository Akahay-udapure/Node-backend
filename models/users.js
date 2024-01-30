const mongoose = require("mongoose");

const User = new mongoose.Schema({
    name: { type: String },
    email: { type: String, unique:true},
    password: { type: String },
    mobileNo: { type: Number},
    age: { type: Number },
});

module.exports = mongoose.model("User", User);
