const { StatusCodes } = require('http-status-codes');
const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/asyncWrapper');
const User = require('../models/User');


// Function that registers every user
const register = asyncWrapper(async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name, token: token } })
})


// Function that validates the user's credentials
const login = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body

    if (!email || !password) {
        return next(createCustomError('Please provide email and password', StatusCodes.BAD_REQUEST))
    }

    const user = await User.findOne({ email })
    if (!user) {
        return next(createCustomError('Invalid credentials', StatusCodes.BAD_REQUEST))
    }

    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        return next(createCustomError('Invalid credentials', StatusCodes.BAD_REQUEST))
    }

    const token = user.createJWT()
    res.status(StatusCodes.OK).json({ user: { name: user.name, token: token } })
})

module.exports = {
    register,
    login
}