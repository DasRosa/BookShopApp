const User = require('../models/User')
const {genPassword} = require('../lib/passwordUtils')

const createUser = (req,res,next) =>{
    const saltHash = genPassword(req.body.password)
    
    const salt = saltHash.salt
    const hash = saltHash.hash

    const newUser = new User({
        username: req.body.username,
        hash: hash,
        salt: salt,
    })

    newUser.save()
        .then((user) => {
            console.log(user)
        })

    res.redirect('/api/v1/authentication/login')
}

const getLoginForm = (req,res,next) => {
    try {
        const form = '<h1>Login Page</h1><form method="POST" action="/api/v1/authentication/login">\
        Enter Username:<br><input type="text" name="username">\
        <br>Enter Password:<br><input type="password" name="password">\
        <br><br><input type="submit" value="Submit"></form>'
    
        res.write(form) 
    } catch (error) {
        res.status(417).json({ msg: "username or password is empty" })
    }
    res.end()
}

const getRegisterForm = (req,res,next) => {
    try {
        const form = '<h1>Register Page</h1><form method="post" action="register">\
        Enter Username:<br><input type="text" name="username">\
        <br>Enter Password:<br><input type="password" name="password">\
        <br><br><input type="submit" value="Submit"></form>'

        res.write(form)
    } catch (error) {
        res.status(417).json({ msg: "username or password is empty" })
    }
    res.end()
}

const getAuthPage = (req,res,next) => {
    res.write('<h1>Home</h1><p>Please <a href="/api/v1/authentication/register">register</a></p>')
    if (req.isAuthenticated()) {
        res.write('<h3>You are authenticated</h3>')
        res.write(`<p>Here is your user name :${req.user.username}</p>`)
        res.write('<p><a href="/api/v1/authentication/logout">Logout and reload</a></p>')
        
        res.end()
    } else {
        res.write('<h3>You are not authenticated</h3><p><a href="/api/v1/authentication/login">Login</a></p>')
        res.end()
    }
}

const getLoginFail = (req,res,next) => {
    res.send('You entered the wrong password.')
}

const getLogOut = (req,res,next) => {
    req.logout()    
    res.redirect('/api/v1/authentication')
}

module.exports = {
    createUser,
    getLoginForm,
    getRegisterForm,
    getAuthPage,
    getLoginFail,
    getLogOut
}