const mongoose = require("mongoose");

var userDetails = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    number: {
        type: Number,
    },
    password: {
        type: String,
    }
});

module.exports = mongoose.model("userData", userDetails);
