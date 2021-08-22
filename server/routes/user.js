const express = require('express')
const router = express.Router()


const { addItem,getAllUser,deleteItem,getCart,getUserName, getUserId} = require('../controllers/user')

router.route('/').get(getUserName)
router.route('/:id').post(addItem).delete(deleteItem)
router.route('/admin').get(getAllUser)
router.route('/cart').get(getCart)
router.route('/id').get(getUserId)
module.exports = router