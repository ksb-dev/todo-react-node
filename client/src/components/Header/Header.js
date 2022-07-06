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
  const {
    tasks,
    completed,
    user,
    setUser,
    setToken,
    setTasks,
    setPending,
    setCompleted,
    setUpcoming,
    setFilteredTasks,
    setFilteredPending,
    setFilteredCompleted,
    setFilteredUpcoming
  } = useTaskContext()

  const logout = () => {
    localStorage.removeItem('name')
    localStorage.removeItem('token')

    setUser('')
    setToken('')

    setTasks([])
    setPending([])
    setCompleted([])
    setUpcoming([])

    setFilteredTasks([])
    setFilteredPending([])
    setFilteredCompleted([])
    setFilteredUpcoming([])
  }

  return (
    <div
      style={{ backgroundImage: `url(${task})`, objectFit: 'contain' }}
      className='outer'
    >
      <div className='header'>
        <div className='header__image__progress__btn'>
          <h1>Taskivity</h1>

          <div className='create-logout'>
            {user && (
              <>
                <Link to='/create'>
                  <button className='createBtn'>
                    create task <i className='fa-solid fa-plus'></i>
                  </button>
                </Link>

                <button className='logoutBtn' onClick={() => logout()}>
                  Logout
                </button>
              </>
            )}

            {!user && (
              <Link to='/login'>
                <button className='loginBtn'>Login</button>
              </Link>
            )}
          </div>

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
