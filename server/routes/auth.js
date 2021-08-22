const express = require('express')
const router = express.Router()
const passport = require('passport')

const {login, createUser ,getLogOut} = require('../controllers/auth')

router.route('/login').post(login)
router.route('/register').post(createUser)
router.route('/logout').get(getLogOut)

module.exports = router