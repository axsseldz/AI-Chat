const { StatusCodes } = require('http-status-codes');
const { createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/asyncWrapper');
const Message = require('../models/Message');

const getAllMessages = asyncWrapper(async (req, res) => {
    const messages = await Message.find({ createdBy: req.user.userId })
    res.status(StatusCodes.OK).json({ messages, count: messages.length })
})

const createMessage = asyncWrapper(async (req, res) => {
    req.body.createdBy = req.user.userId
    const message = await Message.create(req.body)
    res.status(StatusCodes.OK).json({ message })
})

module.exports = {
    getAllMessages,
    createMessage
}