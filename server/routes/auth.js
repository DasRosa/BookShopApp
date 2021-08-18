const express = require('express')
const router = express.Router()
const passport = require('passport')

const {createUser,getLoginForm,getRegisterForm,getAuthPage,getLoginFail,getLogOut} = require('../controllers/auth')
const { addItem,getAllUser,deleteItem,getCart} = require('../controllers/user')

router.route('/').get(getAuthPage)
router.route('/login').get(getLoginForm).post(passport.authenticate('local',{failureRedirect: '/login-failure', successRedirect: '/api/v1/authentication'}))
router.route('/register').get(getRegisterForm).post(createUser)
router.route('/login-failure').get(getLoginFail)

module.exports = router