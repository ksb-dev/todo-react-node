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
    setTaskId,
    setTaskName
  } = useTaskContext()

  const [input, setInput] = useState('')
  console.log(taskName)
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('')

  useEffect(() => {
    setInput(taskName)
  }, [taskName])

  const hideEdit = () => {
    setTaskId('')
    setTaskName('')

    editTask.current.style.zIndex = '-1'
    editTask.current.style.transform = 'scale(0)'
  }

  const handleSubmit = e => {
    e.preventDefault()

    //addTask(input, priority, date, getTasks, setError)
    setInput('')
    setDate('')
    setPriority('')
  }

  return (
    <div className='edit-task' ref={editTask}>
      <div className='edit-task__inner'>
        <form className='edit-task__inner__box' onSubmit={handleSubmit}>
          <input
            type='text'
            className='input'
            placeholder='Add todo...'
            onChange={e => setInput(e.target.value)}
            value={input}
          />
          <p className='addBtn' onClick={handleSubmit}>
            <span>
              <i className='fa-solid fa-plus'></i>
            </span>
          </p>
        </form>

        <select
          name='priority'
          id='priority'
          className='edit-task__inner__priority-box'
          onChange={e => setPriority(e.target.value)}
        >
          <option value='low'>Priority</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
          <option value='high'>High</option>
        </select>

        <form className='edit-task__inner__date-box'>
          <input type='date' onSelect={e => setDate(e.target.value)} />
        </form>

        <i
          class='fa-solid fa-circle-xmark fa-3x edit-task__inner-close'
          onClick={hideEdit}
        ></i>
      </div>
    </div>
  )
}

export default EditForm
