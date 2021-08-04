const Product = require('../models/Product')

const getAllProducts = async (req,res)=>{
    try {
        const products = await Product.find({})
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createProduct = async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json({ product })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getProduct = async (req,res)=>{
    try {
        const {id:productId} = req.params
        const product = await Product.findOne({_id:productId})

    if(!product){
        return res.status(404).json({msg:`no product with id ${productId}`})
    }

        res.status(200).json({product})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const updateProduct = async (req,res)=>{
    try {
        const {id:productId} = req.params
        const product = await Product.findOneAndUpdate({_id:productId},req.body,{
            new:true,
            runValidators:true
        })

    if(!product){
        return res.status(404).json({msg:`no product with id ${productId}`})
    }

        res.status(200).json({product})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


const deleteProduct = async (req,res)=>{
    try {
        const {id:productId} = req.params
        const product = await Product.findOneAndDelete({_id:productId})

    if(!product){
        return res.status(404).json({msg:`no product with id ${productId}`})
    }

        res.status(200).json({product})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
}