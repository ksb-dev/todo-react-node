import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Home = () => {
  const { tasks } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList tasks={tasks} />
    </div>
  )
}

export default Home
