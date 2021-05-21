var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
  userName:{
    type: String,
    index: true
  },
  email:{
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);