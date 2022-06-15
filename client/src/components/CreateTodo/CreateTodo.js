import React, { useState } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { addTask } from '../../hooks/useAddTask'

const CreateTodo = ({ addForm }) => {
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
    <div ref={addForm} className='create__todo'>
      <i
        className='fa-solid fa-xmark fa-3x create__todo-close'
        onClick={hideEdit}
      ></i>
      <form onSubmit={e => handleSubmit(e)}>
        <h2>Add Todo</h2>
        <div className='create__todo__input'>
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

        <div className='create__todo__description'>
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

        <div className='create__todo__date'>
          <label htmlFor='date' id='date'>
            Date
          </label>
          <input type='date' onSelect={e => setDate(e.target.value)} />
        </div>

        <div className='create__todo__priority'>
          <input
            name='priority'
            type='radio'
            id='low'
            value='Low'
            onClick={e => setPriority(e.target.value)}
          />
          <label htmlFor='low'>Low</label>

          <input
            name='priority'
            type='radio'
            id='medium'
            value='Medium'
            onClick={e => setPriority(e.target.value)}
          />
          <label htmlFor='medium'>Medium</label>

          <input
            name='priority'
            type='radio'
            id='high'
            value='High'
            onClick={e => setPriority(e.target.value)}
          />
          <label htmlFor='high'>High</label>
        </div>

        <div className='create__todo__submit'>
          <button type='submit' onSubmit={e => handleSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTodo
