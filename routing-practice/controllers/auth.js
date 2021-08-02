require("dotenv").config({path:"./config.env"});
const User = require('../models/user');

exports.register = async(req,res,next) =>
{
    const {username, email, password}=req.body;

    try{
        const user = await User.create({
            username,email,password
        });
        // res.status(201).json({
        //     success:true,
        //     token:"tokenforRegister"
        // })

        sendToken(user,201,res);
        return;
    }
    catch(error)
    {
        res.status(500).json({
            success:true,
            error:error.message
        })
        return;
    }
    res.send("register route");
    return;
};

exports.login = async(req,res,next) =>
{
    const {email,password}=req.body;

    if(!email || !password)
    {
        res.status(400).json({success:false,error:"Please provide email and password"});
        return;
    }

    try{
        const user = await User.findOne({email}).select("+password");

        if(!user)
        {
            res.status(404).json({success:false,error:"user not found"});
            return;
        }
        const isMatch = await user.matchPasswords(password);

        if(!isMatch)
        {
            res.status(404).json({success: false,error:"Invalid credentials"});
            return;
        }

        // res.status(200).json({
        //     success:true,
        //     token:"8667676",
        // });
        sendToken(user,200,res);
        return;
    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            error:error.message
        });
        return;
    }
    res.send("Login route");
    return;
};

exports.forgotpasssword = (req,res,next) =>
{
    res.send("forgot password");
};

exports.resetpassword = (req,res,next) =>
{
    res.send("reset password");
};

const sendToken = (user,statusCode,res)=>
{
    const token= user.getSignedToken();
    res.status(statusCode).json({success:true,token});
}