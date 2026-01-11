import React, { useRef, useEffect, useState } from 'react'
import "./Support.css"
import { FaTag, FaClock, FaCheck, FaUsers } from "react-icons/fa"
import { MdHome } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"

import one from "./images/india.avif"
import two from "./images/japan.jpg"
import three from "./images/arabia.jpg"
import four from "./images/oman.jpg"
import five from "./images/china.avif"
import six from "./images/hong.jpg"
import seven from "./images/schengen.jpg"

import "swiper/css"
import "swiper/css/hash-navigation"
import "swiper/css/navigation"

const Support = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [swiperReady, setSwiperReady] = useState(false)

    useEffect(() => {
        setSwiperReady(true)
    }, [])

    return (
        <>
        <div className='support'>
            <div className='container'>
                <div className='support__container'>
                    <h2 className='support__title'>Visa support</h2>
                    <p className='support__text'>Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey.</p>

                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={170}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

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
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={one} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>India</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>

                        {/* 2box */}
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={two} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>Japan</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>

                        {/* 3box */}
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={three} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>Saudi Arabia</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>

                        {/* 4box */}
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={four} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>Oman</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>

                        {/* 5box */}
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={five} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>China</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>

                        {/* 6box */}
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={six} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>Hong Kong</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>

                        {/* 7box */}
                        <SwiperSlide style={{ width: "370px" }} data-hash="slide1">
                            <ul className='support__list'>
                                <li className='support__item'>
                                    <div className='support__bg'>
                                        <img className='support-img__one' src={seven} alt="" />
                                    </div>
                                    <h3 className='support-list__title'>European(Schengen)</h3>
                                    <p className='support-list__text'><FaUsers size={20} /> 234 Check Ins</p>
                                    <hr />
                                    <p className='support-list-one__title'>Deal Includes:</p>
                                    <p className='support-list-one__text'><FaTag size={20} /> Best Prices</p>
                                    <p className='support-list-two__text'><FaClock size={20} /> Short Processing Time</p>
                                    <p className='support-list-three__text'><FaCheck size={20} /> Trustworthy Assistance</p>
                                    <button className='support__btn'>Make A Reservation</button>
                                </li>
                            </ul>
                        </SwiperSlide>
                        <div className='slider2'>
                            <button ref={prevRef} className="swiper__btn2 prev-btn">←</button>
                            <button ref={nextRef} className="swiper__btn2 next-btn">→</button>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
        <hr className='hr' />
        </>
    )
}

export default Support