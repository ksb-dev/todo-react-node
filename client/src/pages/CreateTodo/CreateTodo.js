import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { addTask } from '../../hooks/useAddTask'

const CreateTodo = () => {
  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('')
  const [description, setDescription] = useState('')

  const { getTasks, error, setError } = useTaskContext()
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await addTask(
      input,
      priority,
      description,
      date,
      getTasks,
      setError
    )

    if (response) {
      navigate('/')
    } else return

    setInput('')
    setDate('')
    setPriority('')
    setDescription('')
  }

  return (
    <>
      {error && <h4 className='error'>{error}</h4>}
      <div className='create__todo'>
        <Link to='/' className='edit__todo-back'>
          <i className='fa-solid fa-left-long'></i>
          Back
        </Link>
        <form onSubmit={e => handleSubmit(e)}>
          <h2>Create Task</h2>
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
              placeholder='Description'
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
              value='low'
              onClick={e => setPriority(e.target.value)}
            />
            <label htmlFor='low'>Low</label>

            <input
              name='priority'
              type='radio'
              id='medium'
              value='medium'
              onClick={e => setPriority(e.target.value)}
            />
            <label htmlFor='medium'>Medium</label>

            <input
              name='priority'
              type='radio'
              id='high'
              value='high'
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
    </>
  )
}

export default CreateTodo
