// The `Task` Mongoose model handles an object with the following properties:


//'taskNumber' - position of task in the list
//(user should be able to reorder a task in the task list)

//'complete' - is the task complete or not?
//(user should be able to mark a task in the list as completed)

//'name' - name of the task
//(user should be able to edit the name of a task in the task list)

//'description' - description of the task

//*** 'priority level' - urgency of task
//*** may add this later 


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({

  taskNumber: Number,
  complete: String,
  name: String,
  description: String,
  
});

module.exports = mongoose.model('Task', TaskSchema);
