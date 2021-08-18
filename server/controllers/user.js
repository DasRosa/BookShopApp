const Product = require('../models/Product')
const User = require('../models/User')

const addItem = async (req,res,next) => {
    try {
        const {id:productId} = req.params
        const user = req.user
        const product = await Product.findOne({_id:productId})

        if(!product){
            return res.status(404).json({msg:`no product with id ${productId}`})
        }

        user.cart.push(product)
        user.save()
        res.status(200).json({user})
        console.log(user)
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//admin only
const getAllUser = async (req,res,next) => {
    try {
        const users = await User.find({}).populate({path:"cart", model:"Product"})
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteItem = async (req,res,next) => {
    try {
        const {id:productId} = req.params
        const user = req.user
        
        const product = await Product.findOne({_id:productId})

        if(!product){
            return res.status(404).json({msg:`no product with id ${productId} in our store`})
        }

        const index = await user.cart.indexOf(productId)
        
        if (index > -1) {
            user.cart.splice(index, 1)
            user.save()
          }
        else{
            return res.status(404).json({msg:`no product with id ${productId} in your cart`})
        }
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getCart = async (req,res,next) => {
    try {
        const userId = req.user._id
        const user = await User.findById({_id: userId}).populate({path: "cart" , model: "Product"})
        const cart = user.cart

        res.status(200).json({cart})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getUserName = async (req,res,next) =>{
    try {
        username = req.user.username
        res.status(200).json({msg: `your user name is ${username}`})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    addItem,
    getAllUser,
    deleteItem,
    getCart,
    getUserName
}