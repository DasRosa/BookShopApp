const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

// middleware
app.use(express.json())

// routes

// port
const port = process.env.PORT || 5000

// start
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port} ...`))
    } catch (error) {
        console.log(error)
    }
}

start()