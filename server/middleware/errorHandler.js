const { CustomAPIError } = require('../errors/custom-error');
const { StatusCodes } = require('http-status-codes');


// This middleware handles every error we may have and gives to the user a better error response
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message })
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json('Something went wrong...')
}

module.exports = errorHandler