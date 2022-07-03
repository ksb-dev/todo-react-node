import React from 'react'
import { Link } from 'react-router-dom'

// Context
import { useTaskContext } from '../../context/context'

// Components
import Navigation from '../Navigation/Navigation'

// Images
import userImg from '../../img/user.png'
import task from '../../img/task.jpg'

const Header = () => {
  const { tasks, completed, user } = useTaskContext()

  return (
    <div
      style={{ backgroundImage: `url(${task})`, objectFit: 'contain' }}
      className='outer'
    >
      <div className='header'>
        <div className='header__image__progress__btn'>
          <h1>Taskivity</h1>
          {!user && (
            <Link to='/login'>
              <button className='createBtn'>Login</button>
            </Link>
          )}

          {user && (
            <Link to='/create'>
              <button className='createBtn'>
                create task <i className='fa-solid fa-plus'></i>
              </button>
            </Link>
          )}
          <div>
            <img src={userImg} alt='user' />
            <h2>
              {completed.length > 0
                ? ((completed.length / tasks.length) * 100).toFixed(1) + '%'
                : '0%'}
            </h2>
          </div>
        </div>

        <div className='header__navigation'>
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header
