const asyncErrorHandler = require("../middleware/asyncErrorHandler");
const User = require("../models/userModels");
const ErrorHandler = require("../utils/errorHandler");
const sendMail = require("../utils/sendMail");
const sendToken = require("../utils/sendToken");

exports.createEmail = asyncErrorHandler(async(req,res,next)=>{
    const { email } = req.body;

        let user = await User.findOne({email});
        if(user){
            return next(new ErrorHandler("Email already exists",400));
        }
        user = new User({email});
        const token = await user.generateVerifyToken();
        await user.save();
        const verificationUrl = `http://localhost:3000/verify?email=${email}&token=${token}`;
        await sendMail({
            email: user.email,
            subject:'Email Verification',
            verificationUrl
        });
        res.status(200).json({
        success:true,
        message: "success",
        token,
        verificationUrl
    })
})

exports.signup = asyncErrorHandler(async (req,res,next)=>{
  
    try {
        const { name, password } = req.body;
        const {email, token } = req.query;

        let user = await User.findOne({email,emailVerifyExpires: { $gt: Date.now() }});
        if(!user){
            return next(new ErrorHandler("email not found",400));
        }
        const isMatchToken = await user.compareToken(token);
        if(!isMatchToken){
            return next(new ErrorHandler("Invalid token",400));
        }
        
        user.name = name;
        user.password = password;
        user.isVerified = true;
        user.emailVerifyToken = undefined;
        user.emailVerifyExpires = undefined;
        await user.save();

        const getRefreshToken = await user.newRefreshToken();
        user = await User.findByIdAndUpdate(user.id,{
            refreshToken: getRefreshToken
        }, { new: true });

       
        sendToken(user, 201,res);
       
    } catch (error) {
        console.log(error);
    } 
    
})