import React from 'react'
import "./main.css"
import "./App.css"
import Home from '../assets/components/Home/Home'
import Header from '../assets/components/Header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
