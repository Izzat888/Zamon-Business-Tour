import React from 'react'
import "./main.css"
import "./App.css"
import Home from '../assets/components/Home/Home'
import Header from '../assets/components/Header/Header' 
import Tours from '../assets/components/Tours/Tours'
import Support from '../assets/components/Support/Support'
import About from '../assets/components/About/About'
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
      <Support/>
      <section id='about'>
        <About/>
      </section>
    </>
  )
}

export default App
