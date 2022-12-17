const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    message: {
        type: String,
        required: [true, 'Please provide message'],
        maxlength: 50,
        minlength: 1,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
    },
}, { timestamps: true })

module.exports = mongoose.model('Message', MessageSchema)