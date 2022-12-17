const { StatusCodes } = require('http-status-codes');
const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/asyncWrapper');
const User = require('../models/User');


const register = asyncWrapper(async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name, token: token } })
})

const login = asyncWrapper(async (req, res) => {
    res.send('login page')
})

module.exports = {
    register,
    login
}