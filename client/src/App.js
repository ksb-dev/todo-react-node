import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'
import Completed from './pages/Completed/Completed'
import Pending from './pages/Pending/Pending'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
