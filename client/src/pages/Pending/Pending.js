import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Pending = () => {
  const { pending } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList tasks={pending} />
    </div>
  )
}

export default Pending
