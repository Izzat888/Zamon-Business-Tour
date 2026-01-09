import React, { useRef, useEffect, useState } from 'react'
import "./Tours.css"
import one from "./images/list1.jpg"
import { FaUsers, FaCar, FaPlane } from "react-icons/fa"
import { MdHome } from "react-icons/md"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, HashNavigation, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/hash-navigation"
import "swiper/css/navigation"

const Tours = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [swiperReady, setSwiperReady] = useState(false)

  useEffect(() => {
    setSwiperReady(true) // Swiper render bo‘lganidan keyin refs tayyor bo‘ladi
  }, [])

  return (
    <div className='tours'>
      <div className='container'>
        <div className='tours__container'>
          <h2 className='tours__title'>Best Weekly Offers In Each City</h2>
          <p className='tours__text'>
            Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.
          </p>

          <Swiper
            modules={[Autoplay, HashNavigation, Navigation]}
            spaceBetween={170}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            hashNavigation={{ watchState: true }}
            navigation={swiperReady ? { prevEl: prevRef.current, nextEl: nextRef.current } : false}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              // Ref elementlar render bo‘lgandan keyin navigation ishlaydi
              if (swiperReady) {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
              }
            }}
          >
            {/* 1box */}
            <SwiperSlide style={{ width: "370px", height: "550px" }} data-hash="slide1">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 2box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide2">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 3box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide3">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 4box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide4">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 5box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide5">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 6box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide6">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 7box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide7">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>

            {/* 8box */}
            <SwiperSlide style={{ width: "370px", height: "400px" }} data-hash="slide8">
              <ul className='tours__list'>
                <li className='tours__item'>
                  <div className='tours__bg'>
                    <img className='img__one' src={one} alt="Istanbul" />
                  </div>
                  <h3 className='tours-list__title'>Istanbul <span className='list__span'>420$</span></h3>
                  <p className='tours-list__text'><FaUsers size={20}/> 234 Check Ins <span>/person</span></p>
                  <hr />
                  <p className='tours-list-one__title'>Deal Includes:</p>
                  <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                  <p className='tours-list-two__text'><FaPlane size={20}/> Airplane Bill Included</p>
                  <p className='tours-list-three__text'><MdHome size={20}/> Daily Places Visit</p>
                  <button className='tours__btn'>Make A Reservation</button>
                </li>
              </ul>
            </SwiperSlide>
            <button ref={prevRef} className="swiper__btn prev-btn">←</button>
            <button ref={nextRef} className="swiper__btn next-btn">→</button>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Tours
