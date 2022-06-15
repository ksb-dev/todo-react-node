import React, { useState } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { addTask } from '../../hooks/useAddTask'

const AddTask = ({ addForm }) => {
  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')

  const { getTasks, setError } = useTaskContext()

  const handleSubmit = e => {
    e.preventDefault()

    console.log(input, priority, description, date)

    addTask(input, priority, description, date, getTasks, setError, addForm)
    setInput('')
    setDate('')
    setPriority('')
    setDescription('')
  }

  const hideEdit = () => {
    addForm.current.style.zIndex = '-1'
    addForm.current.style.transform = 'scale(0)'
  }

  return (
    <div ref={addForm} className='add-todo'>
      <i
        className='fa-solid fa-xmark fa-3x edit-task__inner-close'
        onClick={hideEdit}
      ></i>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='todo-input'>
          <label htmlFor='input'>Name</label>

          <input
            id='input'
            type='text'
            className='input'
            placeholder='Add todo...'
            onChange={e => setInput(e.target.value)}
            value={input}
          />
        </div>

        <div>
          <input
            type='checkbox'
            id='low'
            value='low'
            onClick={e => setPriority(e.target.value)}
          />
          <label htmlFor='low'>Low</label>
          <input
            type='checkbox'
            id='medium'
            value='medium'
            onClick={e => setPriority(e.target.value)}
          />
          <label htmlFor='medium'>Medium</label>
          <input
            type='checkbox'
            id='high'
            value='high'
            onClick={e => setPriority(e.target.value)}
          />
          <label htmlFor='high'>High</label>
        </div>

        <div>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            rows='4'
            cols='50'
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor='description' id='date'>
            Date
          </label>
          <input type='date' onSelect={e => setDate(e.target.value)} />
        </div>

        <div>
          <button type='submit' onSubmit={e => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTask
