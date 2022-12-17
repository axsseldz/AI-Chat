const { StatusCodes } = require('http-status-codes');

// Middleware in charge of giving a custom response when the user try to enter a not valid route
const notFound = (req, res) => {
    res.status(StatusCodes.NOT_FOUND).send('Route does not exist...')
}

module.exports = notFound