const express = require('express');
const exph = require('express-handlebars');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();
const router = express.Router();

const mongoose = require('mongoose');
mongoose.connect('mongodb://demo:demo@10.99.30.233:27017/demo', {useNewUrlParser: true, useUnifiedTopology: true});


// handlebars middleware
app.engine('handlebars', exph({defaulLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger);
// Body parser middelelware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.use(express.static(path.join(__dirname, 'public')));
 app.get('/', (req,res) => {
  res.send('<h1>Hello W2</h1>');
});

app.use('/api/members', require('./routes/api/members'));
app.use('/api/tasks', require('./routes/api/tasks'));

const PORT = process.env.port || 5000
app.listen(PORT, () => console.log('Server started'));