const mongoose = require('mongoose')

const notEmpty = require('./Validation')

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'must contain value'],
        trim:true,
        maxlenght:[50, "name can't be that long"],
        unique:true
    },image: {
        type:String,
        required:[true,'must contain value']
    },dateOfRelease: {
        type:String,
        required:[true,'must contain value'],
        trim:true
    },genra: {
        type:[String],
        required:true,
        validate:[notEmpty,'must contain value']
    },author: {
        type:String,
        required:[true,'must contain value'],
        trim:true,
        maxlenght:[50, "name can't be that long"]
    }
})

module.exports = mongoose.model('Product', ProductSchema)