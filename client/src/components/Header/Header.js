import React, { useRef } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Components
import Navigation from '../Navigation/Navigation'
import CreateTodo from '../CreateTodo/CreateTodo'

// Images
import user from '../../img/user.png'

const Header = () => {
  const { tasks, completed } = useTaskContext()

  const addForm = useRef(null)

  const showAddTask = () => {
    addForm.current.style.zIndex = '1'
    addForm.current.style.transform = 'scale(1)'
  }

  return (
    <>
      <CreateTodo addForm={addForm} />

      <div className='header'>
        <div className='header__image__progress'>
          <h1>Taskivity</h1>
          <div>
            <img src={user} alt='user' />
            <h2>
              {((completed.length / tasks.length) * 100).toFixed(1) + '%'}
            </h2>
          </div>
        </div>

        <div className='header__create_filter'>
          <button className='createBtn' onClick={showAddTask}>
            create todo <i className='fa-solid fa-plus'></i>
          </button>
          {/*<div className='input-date'>
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
            <option value='low'>Low</option>
            <option value='medium'>Medium</option>
            <option value='high'>High</option>
          </select>

          <form className='date-box'>
            <input type='date' onSelect={e => setDate(e.target.value)} />
          </form>
  </div>*/}

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
    </>
  )
}

export default Header
