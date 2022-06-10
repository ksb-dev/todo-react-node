import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home/Home'

// Styles
import './styles/main.scss'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
