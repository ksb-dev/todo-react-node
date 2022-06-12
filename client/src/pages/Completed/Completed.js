import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TaskList from '../../components/TaskList/TaskList'

const Completed = () => {
  const { completed } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TaskList tasks={completed} />
    </div>
  )
}

export default Completed
