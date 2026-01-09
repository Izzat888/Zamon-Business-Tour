import React from 'react'
import "./main.css"
import "./App.css"
import Home from '../assets/components/Home/Home'
import Header from '../assets/components/Header/Header' 
import Tours from '../assets/components/Tours/Tours'

function App() {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="tours">
        <Tours />
      </section>
    </>
  )
}

export default App
