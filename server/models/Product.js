const mongoose = require('mongoose')
const connectDB= require('../db/connect')
const notEmpty = require('./Validation')

const ProductSchema = new mongoose.Schema({
    title: {
        type:String,
        required:[true,'must contain value'],
        trim:true,
        maxlenght:[50, "name can't be that long"],
        unique:true
    },img: {
        type:String,
        required:[true,'must contain value']
    },releaseDate: {
        type:String,
        required:[true,'must contain value'],
        trim:true
    },genre: {
        type:[String],
        required:true,
        validate:[notEmpty,'must contain value']
    },author: {
        type:String,
        required:[true,'must contain value'],
        trim:true,
        maxlenght:[50, "name can't be that long"]
    },bestSeller:{
        type: Boolean,
        default:false
    },newBook:{
        type:Boolean,
        default:true
    },description:{
        type:String,
        required:[true,'must contain value']
    },price:{
        type:Number,
        required: [true,'must contain value']
    }
})

module.exports = connectDB.model('Product', ProductSchema)