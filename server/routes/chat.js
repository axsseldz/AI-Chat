const express = require('express');
const chatRouter = express.Router();
const { getAllMessages, createMessage } = require('../controllers/chat');


chatRouter.route('/').get(getAllMessages).post(createMessage)

module.exports = chatRouter;
