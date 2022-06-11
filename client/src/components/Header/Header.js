import React, { useState } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { addTask } from '../../hooks/useAddTask'

// Components
import Navigation from '../Navigation/Navigation'

// Images
import user from '../../img/user.png'

const Header = () => {
  const [input, setInput] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState('')

  const { getTasks, error, setError, loadTaskError } = useTaskContext()

  const handleSubmit = e => {
    e.preventDefault()

    addTask(input, priority, date, getTasks, setError)
    setInput('')
    setDate('')
    setPriority('')
  }

  return (
    <div className='header'>
      <div className='header__image__other'>
        <h1>Taskivity</h1>
        <div>
          <p>progress bar</p>
          <img src={user} alt='user' />
        </div>
      </div>

      <div className='header__input__date_filter'>
        <div className='input-date'>
          <form className='input-box' onSubmit={handleSubmit}>
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
            className='priority-box'
            onChange={e => setPriority(e.target.value)}
          >
            <option value='low'>Priority</option>
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>

          <form className='date-box'>
            <input type='date' onSelect={e => setDate(e.target.value)} />
          </form>
        </div>

        <form className='filter-box'>
          <input type='text' className='input' placeholder='Filter todo...' />
          <p className='filterBtn'>
            <span>
              <i className='fa-solid fa-filter'></i>
            </span>
          </p>
        </form>
      </div>

      <div className='header__navigation'>
        <Navigation />
      </div>
    </div>
  )
}

export default Header
