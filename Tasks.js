const Task = require("./models/task").Task;
var tasks;
Task.findOne({ 'listIndex': 22 }, function(err, task) {
    console.log(' %s', task.descr);
} );

module.exports = tasks;