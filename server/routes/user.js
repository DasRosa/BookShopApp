const express = require('express')
const router = express.Router()

const {getLogOut} = require('../controllers/auth')
const { addItem,getAllUser,deleteItem,getCart,getUserName} = require('../controllers/user')

router.route('/').get(getUserName)
router.route('/:id').post(addItem).delete(deleteItem)
// router.route('/admin').get(getAllUser)
router.route('/cart').get(getCart)
router.route('/logout').get(getLogOut)

module.exports = router