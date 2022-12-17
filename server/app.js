const express = require('express');
const app = express();
const { StatusCodes } = require('http-status-codes');
const authRouter = require('./routes/auth');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const connectDB = require('./db/connect');
const Authentication = require('./middleware/auth');
const chatRouter = require('./routes/chat');
require('dotenv').config();

app.use(express.json())

// Routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/chat', Authentication, chatRouter)



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 4000;


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
    } catch (err) {
        console.log(err);
    }
}

start()
