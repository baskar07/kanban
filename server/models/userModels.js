const  mongoose = require("mongoose");
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { schemaOptions } = require('./modelOptions');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type: String,
        
        unique: true
    },
    password:{
        type: String,
        select:false
    },
    googleId:{
        type:String,
        unique:true,
        sparse: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    emailVerifyToken: String,
    emailVerifyExpires: Date,
    refreshToken:String,
    createdAt:{
        type: Date,
        default: Date.now
    }
},schemaOptions);

//password hash
userSchema.pre('save',async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.generateVerifyToken = async function(){
    const token =crypto.randomBytes(32).toString('hex');
    const salt = await bcrypt.genSalt(10);
    this.emailVerifyToken = await bcrypt.hash(token, salt);
    this.emailVerifyExpires = Date.now() + 120 * 1000;
    return token ;
}

userSchema.methods.compareToken = function(token){
    return bcrypt.compare(token, this.emailVerifyToken);
}


//Refresh token generate
userSchema.methods.newRefreshToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_REFRESH_SECRET,{
        expiresIn: process.env.JWT_REFRESH_EXPIRE // 7days
    })
}

//access token generate for every ony day
userSchema.methods.getJwtToken = function(){
    return jwt.sign({id:this._id}, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE // 1 day
    })
}





module.exports = mongoose.model("User",userSchema); 