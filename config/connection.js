const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1/Node_Mongo";

const connect = async () => {
    await mongoose
        .connect(uri)
        .then(() => {
            console.log("Connected Successfully");
        })
        .catch((err) => {
            console.log("Connectivity Error ", err);
        });
};

module.exports = {connect}
