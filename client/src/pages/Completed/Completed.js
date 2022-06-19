import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Completed = () => {
  const {
    completed,
    filteredCompleted,
    setFilteredCompleted
  } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList
        tasks={completed}
        filtered={filteredCompleted}
        setTasks={setFilteredCompleted}
      />
    </div>
  )
}

export default Completed
