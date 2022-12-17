const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const chatRouter = require('./routes/chat');
const connectDB = require('./db/connect');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const Authentication = require('./middleware/auth');
require('dotenv').config();

// extra security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

app.set('trust proxy', 1);
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());


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
