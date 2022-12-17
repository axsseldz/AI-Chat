const express = require('express');
const app = express();
const { StatusCodes } = require('http-status-codes');


app.get('/', (req, res) => {
    res.status(StatusCodes.OK).send('Server running...')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))