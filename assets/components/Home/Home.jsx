import React, { useEffect, useState } from 'react'
import "./Home.css"

import bg1 from "./images/istanbul.jpg"
import bg2 from "./images/antalya.jpg"
import bg3 from "./images/dubai.jpg"
import bg4 from "./images/sharm.webp"

const slides = [
  { image: bg1, title: "Istanbul" },
  { image: bg2, title: "Antalya" },
  { image: bg3, title: "Dubai" },
  { image: bg4, title: "Sharm El Sheikh" },
]

const Home = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className='home'
      style={{ backgroundImage: `url(${slides[index].image})` }}
    >
      <div className='container'>
        <div className='home__container'>
          <div className='overlay'>
            <h1 className='home__title'>
              Take a Glimpse Into The Beautiful City Of:
            </h1>
            <p className='slide__title'>{slides[index].title}</p>
            <button className='home__btn'>Go There</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
