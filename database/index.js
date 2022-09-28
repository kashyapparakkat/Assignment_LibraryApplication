const mongoose = require('mongoose')
const assert = require('assert')


const connecttDB = async () => {
    try {
        //mongoose.connect("mongodb://localhost:27017/bookDB");
        mongoose.connect('mongodb+srv://user:User%40123456@cluster0.cm452yw.mongodb.net/bookDB?retryWrites=true&w=majority');
        console.log("Mongo DB connected ...")

    }catch(err) {
        console.log(err);
        process.exit(1);

    }
}

module.exports = connecttDB;