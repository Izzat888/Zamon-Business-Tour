import React, { useEffect, useState } from 'react'
import "./Home.css"
import { FaUser, FaGlobe, FaHome } from "react-icons/fa";
import bg1 from "./images/istanbul.jpg"
import bg2 from "./images/antalya.jpg"
import bg3 from "./images/dubai.jpg"
import bg4 from "./images/sharm.webp"

const slides = [
  {
    image: bg1,
    title: "Istanbul",
    population: "44.48 M",
    territory: "275.400 KM²",
    price: "$946.000"
  },
  {
    image: bg2,
    title: "Antalya",
    population: "8.66 M",
    territory: "41.290 KM²",
    price: "$1.100.200"
  },
  {
    image: bg3,
    title: "Dubai",
    population: "67.41 M",
    territory: "551.500 KM²",
    price: "$425.600"
  },
  {
    image: bg4,
    title: "Sharm El Sheikh",
    population: "69.86 M",
    territory: "513.120 KM²",
    price: "$165.450"
  }
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
      style={{ backgroundImage: `url(${slides[index].image})` }}>
      <div className='container'>
        <div className='home__container'>
          <div className='overlay'>
            <h1 className='home__title'>
              Take a Glimpse Into The Beautiful City Of:</h1>
            <p className='slide__title'>{slides[index].title}</p>
            <button className='home__btn'>Go There</button>
          </div>
          <div className="home__box">
            <div className="home__item">
              <FaUser className='icon' size={24}/>
              <div>
                <h2 className="icon__title">Population:</h2>
                <p className="icon__text">{slides[index].population}</p>
              </div>
            </div>

            <div className="home__item">
              <FaGlobe className='icon' size={24}/>
              <div>
                <h2 className="icon__title">Territory:</h2>
                <p className="icon__text">{slides[index].territory}</p>
              </div>
            </div>

            <div className="home__item">
              <FaHome className='icon' size={24}/>
              <div>
                <h2 className="icon__title">AVG Price:</h2>
                <p className="icon__text">{slides[index].price}</p>
              </div>
            </div>
            <button className='home-box__btn'>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
