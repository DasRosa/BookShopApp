const express = require('express')
const router = express.Router()

const { getTest, createTest } = require('../controllers/test')

router.route('/').get(getTest).post(createTest)

module.exports = router
