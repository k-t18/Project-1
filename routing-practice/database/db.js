const mongoose = require('mongoose');
require("dotenv").config({path:"./config.env"});

const connectDB = async ()=>
{
    await mongoose.connect("mongodb+srv://Jude:5UvbM7dLjP5YqS3a@cluster0.1mm2w.mongodb.net/test?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    });
    console.log("MongoDB connected");
}

module.exports = connectDB;