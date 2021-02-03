const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.port || 5000
app.get('/', (req,res) => {
  res.send('<h1>Hello W2</h1>');
});
app.listen(PORT, () => console.log('Server started'));