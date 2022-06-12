import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TaskList from '../../components/TaskList/TaskList'

const Upcoming = () => {
  const { upcoming } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TaskList tasks={upcoming} />
    </div>
  )
}

export default Upcoming
