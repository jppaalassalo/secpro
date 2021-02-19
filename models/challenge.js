var mongoose = require("mongoose");

var ChallengeSchema = new mongoose.Schema({
  year:{
    type: Number,
    index: true
  },
  listIndex:{
    type: Number,
    index: true
  },
  descr: {
    type: String,
    index: true
  }
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
