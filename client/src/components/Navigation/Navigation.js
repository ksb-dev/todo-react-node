import React from 'react'
import { Link } from 'react-router-dom'

// Context
import { useTaskContext } from '../../context/context'

const Navigation = () => {
  const { tasks, pending, completed, category } = useTaskContext()

  return (
    <div className='navigation'>
      <ul>
        {!window.location.pathname.includes('/pending') &&
        !window.location.pathname.includes('/completed') &&
        !window.location.pathname.includes('/upcoming') ? (
          <Link to='/'>
            <li className='active'>
              All{' '}
              <p className='active-number'>
                <span>{tasks.length}</span>
              </p>
            </li>
          </Link>
        ) : (
          <Link to='/'>
            <li>
              All{' '}
              <p>
                <span>{tasks.length}</span>
              </p>
            </li>
          </Link>
        )}

        {window.location.pathname.includes('/pending') ? (
          <Link to='/pending'>
            <li className='active'>
              Pending{' '}
              <p className='active-number'>
                <span>{pending.length}</span>
              </p>
            </li>
          </Link>
        ) : (
          <Link to='/pending'>
            <li>
              Pending{' '}
              <p>
                <span>{pending.length}</span>
              </p>
            </li>
          </Link>
        )}

        {window.location.pathname.includes('/completed') ? (
          <Link to='/completed'>
            <li className='active'>
              Completed{' '}
              <p className='active-number'>
                <span>{completed.length}</span>
              </p>
            </li>
          </Link>
        ) : (
          <Link to='/completed'>
            <li>
              Completed{' '}
              <p>
                <span>{completed.length}</span>
              </p>
            </li>
          </Link>
        )}

        {window.location.pathname.includes('/upcoming') ? (
          <Link to='/upcoming'>
            <li className='active'>
              Upcoming{' '}
              <p className='active-number'>
                <span>{tasks.length}</span>
              </p>
            </li>
          </Link>
        ) : (
          <Link to='/upcoming'>
            <li>
              Upcoming{' '}
              <p>
                <span>{tasks.length}</span>
              </p>
            </li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Navigation
