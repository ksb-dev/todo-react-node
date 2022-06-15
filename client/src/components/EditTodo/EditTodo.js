import React, { useState, useEffect } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateTask } from '../../hooks/useUpdateTask'

const EditTodo = ({ editTask }) => {
  const {
    getTasks,
    setError,
    taskId,
    taskName,
    taskDate,
    taskPriority,
    setTaskCompleted,
    taskDescription
  } = useTaskContext()

  const [input, setInput] = useState('')
  const [id, setId] = useState('')
  const [priority, setPriority] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setInput(taskName)
    setId(taskId)
    setPriority(taskPriority)
    setDate(taskDate)
    setDescription(taskDescription)
  }, [
    taskName,
    taskId,
    taskPriority,
    setTaskCompleted,
    taskDate,
    taskDescription
  ])

  const hideEdit = () => {
    // setInput('')
    // setId('')
    // setPriority('')
    // setDate('')
    // setDescription('')

    editTask.current.style.zIndex = '-1'
    editTask.current.style.transform = 'scale(0)'
  }

  const handleSubmit = e => {
    e.preventDefault()

    updateTask(
      id,
      getTasks,
      setError,
      input,
      description,
      priority,
      date,
      editTask
    )
  }

  return (
    <div ref={editTask} className='edit__todo'>
      <i
        className='fa-solid fa-xmark fa-3x edit__todo-close'
        onClick={hideEdit}
      ></i>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Add Todo</h2>
        <div className='edit__todo__input'>
          <label htmlFor='input'>Name</label>

          <input
            id='input'
            type='text'
            className='input'
            placeholder='Max 20 characters'
            onChange={e => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className='edit__todo__description'>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='5'
            cols='50'
            value={description}
            placeholder='Max 250 characters'
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className='edit__todo__priority'>
          <label htmlFor='priority'>Priority</label>

          <input
            id='priority'
            type='text'
            className='input priority'
            placeholder='Add todo...'
            onChange={e => setPriority(e.target.value)}
            value={priority}
          />
        </div>

        <div className='edit__todo__date'>
          <label htmlFor='date'>Date</label>

          <input
            id='date'
            type='text'
            className='input date'
            onChange={e => setDate(e.target.value)}
            value={date}
          />
        </div>

        <div className='edit__todo__submit'>
          <button type='submit' onSubmit={e => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditTodo
