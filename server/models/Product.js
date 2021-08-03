const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'must contain vaulue'],
        trim:true,
        maxlenght:[50, "name can't be that long"],
        unique:true
    },image: {
        type:String,
        required:[true,'must contain vaulue']
    },dateOfRelease: {
        type:String,
        required:[true,'must contain vaulue'],
        trim:true
    },genra: {
        type:Array,
        required:[true,'must contain vaulue']
    },author: {
        type:String,
        required:[true,'must contain vaulue'],
        trim:true,
        maxlenght:[50, "name can't be that long"]
    }
})

module.exports = mongoose.model('Product', ProductSchema)