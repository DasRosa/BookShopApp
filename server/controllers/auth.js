const User = require('../models/User')
const {genPassword} = require('../lib/passwordUtils')
const passport = require('passport')

const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err
    if (!user) res.send('No User Exists')
    else {
      req.logIn(user, (err) => {
        if (err) throw err
        res.send('Successfully Authenticated')
        console.log(req.user)
      })
    }
  })(req, res, next)
}

const createUser = (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err
    if (doc) res.send('User Already Exists')
    if (!doc) {
      const saltHash = genPassword(req.body.password)

      const salt = saltHash.salt
      const hash = saltHash.hash

      // const hashedPassword = await bcrypt.hash(req.body.password, 10)

      const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt,
      })

      newUser.save().then((user) => {
        console.log(user)
      })

      res.send('User Created')
    }
  })
}

const getLogOut = (req,res,next) => {
    req.logout()
    res.send("LogOut Successfully")
}

module.exports = {
    login,
    createUser,
    getLogOut
}