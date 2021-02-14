var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
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

var Task = mongoose.model('Task', TaskSchema);

module.exports = {
  Task: Task
}