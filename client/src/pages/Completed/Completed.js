import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Completed = () => {
  const { completed } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList tasks={completed} />
    </div>
  )
}

export default Completed
