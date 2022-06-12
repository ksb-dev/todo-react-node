import React, { useState, useEffect } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateTask } from '../../hooks/useUpdateTask'

const EditForm = ({ editTask }) => {
  const {
    getTasks,
    error,
    setError,
    loadTaskError,
    taskId,
    taskName,
    taskDate,
    taskPriority,
    setTaskCompleted,
    setTaskDate
  } = useTaskContext()

  const [input, setInput] = useState('')
  const [id, setId] = useState('')
  const [priority, setPriority] = useState('')
  const [completed, setCompleted] = useState(false)
  const [date, setDate] = useState('')

  useEffect(() => {
    setInput(taskName)
    setId(taskId)
    setPriority(taskPriority)
    setCompleted(setTaskCompleted)
    setDate(taskDate)
  }, [taskName, taskId, taskPriority, setTaskCompleted, taskDate])

  const hideEdit = () => {
    editTask.current.style.zIndex = '-1'
    editTask.current.style.transform = 'scale(0)'
  }

  const handleSubmit = e => {
    e.preventDefault()

    updateTask(id, getTasks, setError, input, priority, date, editTask)
  }

  return (
    <div className='edit-task' ref={editTask}>
      <div className='edit-task__inner'>
        <i
          className='fa-solid fa-circle-xmark fa-3x edit-task__inner-close'
          onClick={hideEdit}
        ></i>

        <form className='edit-task__inner__box' onSubmit={e => handleSubmit(e)}>
          <input
            type='text'
            className='input'
            placeholder='Add todo...'
            onChange={e => setInput(e.target.value)}
            value={input}
          />

          <input
            type='text'
            className='input date'
            placeholder='Add todo...'
            onChange={e => setDate(e.target.value)}
            value={date}
          />

          <input
            type='text'
            className='input priority'
            placeholder='Add todo...'
            onChange={e => setPriority(e.target.value)}
            value={priority}
          />

          <button type='submit' onSubmit={e => handleSubmit(e)}>
            submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditForm
