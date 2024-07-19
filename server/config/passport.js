const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GoogleAuth = require('../models/googleAuth');

passport.use(new GoogleStrategy({
    clientID: "86153705027-v59g37u8oe45q72v4kp9vegr9r5pod6n.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/api/google/callback"
},
    async(accessToken,refreshToken, profile,done)=>{
        const { id,emails, displayName, photos } = profile;
      const newUser = {
        googleId:id,
        email:emails[0].value,
        displayName: displayName,
        firstName: displayName.split(' ')[0],
        lastName: displayName.split(' ')[1],
        image: photos[0].value
      };
      try {
        let user = await GoogleAuth.findOne({ googleId: id });
        if (user) {
        done(null, user);
      } else {
        user = await GoogleAuth.create(newUser);
        done(null, user);
      }
      } catch (error) {
        console.log(error);
      }
}))



passport.serializeUser((user, done) => {
   done(null,user.id); 
});
passport.deserializeUser(async(id, done) => {
    try {
        const user = await GoogleAuth.findById(id);
        done(null,user)
    } catch (error) {
        done(err,null)
    }
});
module.exports = passport; 