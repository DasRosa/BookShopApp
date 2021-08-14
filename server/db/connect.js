const mongoose = require('mongoose')
require('dotenv').config()

const conn = process.env.MONGO_URI

const connectDB = mongoose.createConnection(conn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

module.exports = connectDB
