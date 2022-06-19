import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Pending = () => {
  const { pending, filteredPending, setFilteredPending } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList
        tasks={pending}
        filtered={filteredPending}
        setTasks={setFilteredPending}
      />
    </div>
  )
}

export default Pending
