const express = require('express')
const router = express.Router()

const { getAllProduct,createProduct,getProduct,updateProduct,deleteProduct } = require('../controllers/product')

router.route('/').get(getAllProduct).post(createProduct)
router.route('/:id').get(getProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router