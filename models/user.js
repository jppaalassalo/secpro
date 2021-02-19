var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  userName:{
    type: String,
    index: true
  },
  passwd:{
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);