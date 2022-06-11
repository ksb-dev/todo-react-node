const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  task_name: {
    type: String,
    required: [true, 'Please provide a task name'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters']
  },
  added_date: {
    type: Date
  },
  task_priority: {
    type: String,
    required: [true, 'Please select priority'],
    trim: true,
    default: 'low'
  },
  is_completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Task', TaskSchema)
