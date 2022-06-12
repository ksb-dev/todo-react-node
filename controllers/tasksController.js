const Task = require('../models/Task')
const asyncError = require('../middleware/asyncError')
const CustomAPIError = require('../errors/customError')

const getAllTasks = asyncError(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const createTask = asyncError(async (req, res) => {
  if (req.body.added_date === '') {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate() + 1

    req.body.added_date = year + '-' + month + '-' + day
  }

  if (req.body.task_priority === '') req.body.task_priority = 'low'

  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncError(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })

  if (!task) {
    return next(new CustomAPIError(`No task with ID : ${taskID}`, 404))
  }

  res.status(201).json({ task })
})

const updateTask = asyncError(async (req, res, next) => {
  const { id: taskID } = req.params

  if (req.body.task_name === '') {
    return next(new CustomAPIError('Please provide task name', 404))
  }

  if (req.body.added_date === '') {
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1
    const day = new Date().getDate() + 1

    req.body.added_date = year + '-' + month + '-' + day
  }

  if (req.body.task_priority === '') req.body.task_priority = 'low'

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true
  })

  if (!task) {
    return next(new CustomAPIError(`No task with ID : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

const deleteTask = asyncError(async (req, res, next) => {
  console.log(req.body)
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })

  if (!task) {
    return next(new CustomAPIError(`No task with ID : ${taskID}`, 404))
  }

  res.status(201).json({ deleteTask: null, status: 'success' })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}
