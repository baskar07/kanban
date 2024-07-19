const mongoose = require('mongoose');

const googleAuthSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    displayName: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        
    },
    lastName: {
        type: String,
        
    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('GoogleAuth', googleAuthSchema);