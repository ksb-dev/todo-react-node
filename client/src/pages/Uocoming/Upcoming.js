import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Upcoming = () => {
  const { upcoming } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList tasks={upcoming} />
    </div>
  )
}

export default Upcoming
