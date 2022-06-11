import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <li>
          All{' '}
          <p>
            <span>0</span>
          </p>
        </li>
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
