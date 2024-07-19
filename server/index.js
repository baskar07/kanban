const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/database');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('./config/passport');
const app = express();

//config
require('dotenv').config({ path : 'server/config/.env'});

const PORT = process.env.PORT || 5000;

// cors options
const corsOptions ={
    origin:'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
    optionsSuccessStatus: 204
};


app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Session middleware
app.use(session({
    secret:'keyword@123',
    resave:false,
    saveUninitialized:true,
    store:MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    })
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Database connection
connectDB();


// Routes call
const googleAuth = require('./routes/googleAuth');
const { setEngine } = require('crypto');
app.use('/api',googleAuth)


app.listen(PORT,()=>{
    console.log(`Server running port: ${PORT}`);
})