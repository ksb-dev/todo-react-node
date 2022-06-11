import React from 'react'

// Context
import { useTaskContext } from '../../context/context'

const Navigation = () => {
  const { tasks, category } = useTaskContext()

  return (
    <div className='navigation'>
      <ul>
        {category === 'all' ? (
          <li className='active'>
            All{' '}
            <p className='active-number'>
              <span>{tasks.length}</span>
            </p>
          </li>
        ) : (
          <li>
            All{' '}
            <p>
              <span>{tasks.length}</span>
            </p>
          </li>
        )}
        <li>
          Pending{' '}
          <p>
            <span>0</span>
          </p>
        </li>
        <li>
          Completed{' '}
          <p>
            <span>0</span>
          </p>
        </li>
        <li>
          Upcoming{' '}
          <p>
            <span>0</span>
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
