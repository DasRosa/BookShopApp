const mongoose = require('mongoose')
const connectDB= require('../db/connect')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true,'must contain value'],
        trim:true,
        unique:true
    },cart:[{
        type:mongoose.Types.ObjectId,
        ref: 'Product'
    }],
    hash: String,
    salt: String
})

//connect to the User collection
const User = connectDB.model('User', UserSchema)

module.exports = User