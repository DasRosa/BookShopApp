const express = require('express')
const router = express.Router()


const { addItem,getAllUser,deleteItem,getCart,getUserName} = require('../controllers/user')

router.route('/').get(getUserName)
router.route('/:id').post(addItem).delete(deleteItem)
router.route('/admin').get(getAllUser)
router.route('/cart').get(getCart)

module.exports = router