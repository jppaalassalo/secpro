var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  bookName:{
    type: String,
    index: true
  },
  author:{
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
  challengeId:{
    type: Number  
  } 
});

module.exports = mongoose.model('Book', BookSchema);