require("dotenv").config({path:"./config.env"});
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
        username :{
            type:String,
            required:[true,"Please Provide a User Name"]
        },
        email:{
            type:String,
            required:[true, "Please Provide a Valid Mail ID"],
            unique:true,
            match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email"],
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minlength: 6,
            select: false,
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date,
});

UserSchema.pre("save",async function(next)
{
    if(!this.isModified("password"))
    {
        next();
    }

    const salt = await bcrypt.genSalt(15);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});

UserSchema.methods.matchPasswords = async function(password)
{
    return await bcrypt.compare(password, this.password);
}
// const jwtSecret = b425b038e348db8ea5e335b915db86ec8b7f8029b9ed57c59c3956aeffd592866a;
UserSchema.methods.getSignedToken = function() 
{
    return jwt.sign({id:this._id},'b425b038e348db8ea5e335b915db86ec8b7f8029b9ed57c59c3956aeffd592866a',{expiresIn: '10000s'})
}

const User = mongoose.model("User",UserSchema);
module.exports = User;