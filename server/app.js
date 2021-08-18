const session = require('express-session')
const express = require('express')
const connectDB = require('./db/connect')
const passport = require('passport')
const crypto = require('crypto')
const MongoStore = require('connect-mongo')(session)
const app = express()

require('dotenv').config()

let cors = require('cors')

const product = require('./routes/products')

const auth = require('./routes/auth')

const user = require('./routes/user')
// middleware
app.use(express.json())
app.use(express.urlencoded({extends: true}))
app.use(cors())



// port
const port = process.env.PORT || 5000


// session to store cookie data to DB
const sessionStore = new MongoStore({ mongooseConnection: connectDB, collection: 'sessions' })

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    }
}))

//check authentication
require('./strategy/verify')

app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/api/v1/products', product)
app.use('/api/v1/authentication', auth)
app.use('/api/v1/user',user)

// start
const start = async () => {
    try {
        await connectDB
        app.listen(port, console.log(`Server is listening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}

start()