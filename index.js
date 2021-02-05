const express = require('express');
const path = require('path');
const moment = require('moment');

const app = express();

// middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    //console.log('Hello');
    next();
}
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req,res) => {
//  res.send('<h1>Hello W2</h1>');
//});
const PORT = process.env.port || 5000
app.listen(PORT, () => console.log('Server started'));