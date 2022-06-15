const mongoose = require('mongoose')
const validator = require('validator')

const TaskSchema = new mongoose.Schema({
  task_name: {
    type: String,
    required: [true, 'Please provide a task name'],
    trim: true,
    maxlength: [20, 'Name can not be more than 100 characters']
  },
  added_date: {
    type: Date,
    validate: [validator.isDate, 'Please provide date in a YYYY-MM-DD format']
  },
  task_priority: {
    type: String,
    trim: true,
    default: 'low'
  },
  is_completed: {
    type: Boolean,
    default: false
  },
  task_description: {
    type: String,
    required: [true, 'Please provide a description'],
    trim: true,
    maxlength: [250, 'Description can not be more than 250 characters']
  }
})

module.exports = mongoose.model('Task', TaskSchema)
