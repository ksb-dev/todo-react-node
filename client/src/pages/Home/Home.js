import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TaskList from '../../components/TaskList/TaskList'

const Home = () => {
  const { tasks } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default Home
