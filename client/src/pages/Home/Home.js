import React from 'react'

// context
import { useTaskContext } from '../../context/context'

// components
import Header from '../../components/Header/Header'
import TodoList from '../../components/TodoList/TodoList'

const Home = () => {
  const { tasks, filteredTasks, setFilteredTasks } = useTaskContext()

  return (
    <div className='home'>
      <Header />
      <TodoList
        tasks={tasks}
        filtered={filteredTasks}
        setTasks={setFilteredTasks}
      />
    </div>
  )
}

export default Home
