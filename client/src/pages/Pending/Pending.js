import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TaskList from '../../components/TaskList/TaskList'

const Pending = () => {
  const { pending } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TaskList tasks={pending} />
    </div>
  )
}

export default Pending
