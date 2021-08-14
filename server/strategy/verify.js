const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')
const {validPassword} = require('../lib/passwordUtils')

const customFiels = {
    usernameField: 'username',
    passwordField: 'password'
}

const verifyCallback = (username, password, done) =>{

    User.findOne({ username: username})
    .then((user)=>{ 

        if (!user) { return done(null, false)}

        const isValid = validPassword(password, user.hash, user.salt)

        if(isValid) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    }).catch((err)=>{
        done(err)
    })
}

const strategy = new LocalStrategy(customFiels, verifyCallback)

passport.use(strategy)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user)
        })
        .catch((err)=>{
            done(err)
        })
}) 