const jwt = require('jsonwebtoken');
const { createCustomError } = require('../errors/custom-error');
const { StatusCodes } = require('http-status-codes');

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return next(createCustomError("You don't have access to this route", StatusCodes.UNAUTHORIZED))
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: payload.userId, name: payload.name }
        next()
    } catch (error) {
        return next(createCustomError("You don't have access to this route", StatusCodes.UNAUTHORIZED))
    }
}

module.exports = auth