var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('keys/server.key', 'utf8');
var certificate = fs.readFileSync('keys/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const express = require('express');
var delay = require('express-delay'); //for frontend testing!
var cors = require('cors');
const exph = require('express-handlebars');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();
const router = express.Router();
const { clientOrigins, serverPort } = require("./config/env.dev");
const { domain, audience } = require("./config/env.dev");

const mongoose = require('mongoose');
mongoose.connect('mongodb://demo:demo@10.99.30.233:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true});

// handlebars middleware
app.engine('handlebars', exph({defaulLayout: 'main'}));
app.set('view engine', 'handlebars');

//app.use(cors({ origin: clientOrigins }));
app.use(cors());
app.use(logger);
// Body parser middlelware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
//app.use(delay(2000));

app.use(express.static(path.join(__dirname, 'public')));
 app.get('/', (req,res) => {
  res.send('<h1>Lukuhaaste rest api: ./api/challenges</h1>');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/challenges', require('./routes/api/challenges'));
app.use('/api/books', require('./routes/api/books'));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
    //res.render('message :' + err.name + err.message);
  } else
    next(err);
});

//app.use(function errorHandler (err, req, res, next) {
//  res.status(500)
//  res.render('error', { error: err })
//});


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

const PORT = process.env.port || 5000

httpServer.listen(PORT);
httpsServer.listen(serverPort);
