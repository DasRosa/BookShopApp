const Test = require('../models/Test')

const getTest = async (req, res) => {
    try {
        const test = await Test.find({})
        res.status(201).json({ test })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

const createTest = async (req, res) => {
    try {
        const test = await Test.create(req.body)
        res.status(201).json({ test })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    getTest,
    createTest
}