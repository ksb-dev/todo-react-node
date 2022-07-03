import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Completed from './pages/Completed/Completed'
import Pending from './pages/Pending/Pending'
import Upcoming from './pages/Uocoming/Upcoming'
import CreateTodo from './pages/CreateTodo/CreateTodo'
import EditTodo from './pages/EditTodo/EditTodo'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/SignUp'

// Styles
import './styles/main.scss'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/completed' element={<Completed />} />

          <Route exact path='/pending' element={<Pending />} />

          <Route exact path='/upcoming' element={<Upcoming />} />

          <Route exact path='/create' element={<CreateTodo />} />

          <Route exact path='/edit/:id' element={<EditTodo />} />

          <Route exact path='/login' element={<Login />} />

          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
