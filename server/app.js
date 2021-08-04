const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

let cors = require('cors')

const product = require('./routes/products')

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use('/api/v1/product', product)

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