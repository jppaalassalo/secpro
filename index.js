require('custom-env').env()
var fs = require('fs');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('keys/server.key', 'utf8');
var certificate = fs.readFileSync('keys/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

const express = require('express');
const helmet = require('helmet');
var delay = require('express-delay'); //for frontend testing!
var cors = require('cors');
//const exph = require('express-handlebars');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();

const { clientOriginUrl, serverPort } = require("./config/env");
const { domain, audience, dbUrl } = require("./config/env");

const mongoose = require('mongoose');
const { endianness } = require('os');
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(logger);
// handlebars middleware
//app.engine('handlebars', exph({defaulLayout: 'main'}));
//app.set('view engine', 'handlebars');

//app.use(helmet());
app.use(helmet({
  contentSecurityPolicy :{
    directives:{
      defaultSrc:["'self'"]}
  }
 } ));

app.use(cors({ origin: clientOriginUrl }));
app.disable("x-powered-by");

let setCache = function (req, res, next) {
  if (req.method == 'GET') {
    res.set('Cache-control', `must-revalidate, no-cache, no-store`)
  } else {
    res.set('Cache-control', `must-revalidate, no-cache, no-store`)
  }
  next()
}

app.use(setCache)
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const router = express.Router();
app.use('/api/users', require('./routes/api/users'));
app.use('/api/challenges', require('./routes/api/challenges'));
app.use('/api/books', require('./routes/api/books'));
//app.get('/favicon.ico', (req,res) => res.status(204).end());
app.use(function (req, res) {
  //if(req.originalUrl.includes('/favicon.ico')){
    res.status(204).end()
  //} 
}); 
app.use(function (req, res) {
  res.status(404);
  res.json({"message" : "Requested route does not exist" });
} );

app.use(function (err, req, res, next) {
  console.log('Hep');
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  } else { 
    res.status(500);
    res.json({"message" : err.name + ": " + err.message});
  } 
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

const PORT = process.env.port || 5000

httpServer.listen(PORT);
httpsServer.listen(serverPort);
