import React from 'react'

// components
import Header from '../../components/Header/Header'
import TaskList from '../../components/TaskList/TaskList'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <TaskList />
    </div>
  )
}

export default Home
