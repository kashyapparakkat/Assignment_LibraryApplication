const mongoose = require("mongoose");

var bookDetails = new mongoose.Schema({
    id: {
        type: String,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: String,
    },
    rate: {
        type: String,
    },
    author: {
        type: String,
    },

});

module.exports = mongoose.model("bookData", bookDetails);
