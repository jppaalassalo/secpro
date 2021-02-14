var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  bookName:{
    type: String,
    index: true
  },
  authorName:{
    type: String
  },
  rating:{
    type: Number
  },
  comment:{
    type: String
  },
  reader:{
    type: String
  },
  read: { 
    type: Date, default: Date.now
  },
  taskId:{
    type: Number  
  } 
});

module.exports = mongoose.model('Book', BookSchema);