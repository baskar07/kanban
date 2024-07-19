const  mongoose = require("mongoose");
mongoose.set('strictQuery', false);


const connectDB = () =>{
    const MONGO_URI = process.env.MONGO_URI;
    mongoose.connect(MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Mongodb Connected.");
    }).catch((err)=>{
        console.log(err);
    })   
}

module.exports = connectDB;