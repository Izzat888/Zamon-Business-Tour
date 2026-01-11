import React from 'react'
import "./About.css"
import { FaUser, FaGlobe, FaHome } from "react-icons/fa";

import one from "./images/afr.jpg"
import two from "./images/airplane.jpg"
import three from "./images/dubai3.jpg"
import four from "./images/antalya.jpg"
import five from "./images/sharm2.jpg"
import six from "./images/istanbul3.jpg"
const About = () => {
    return (
        <div className='about'>
            <div className='container'>
                <div className='about__container'>
                    <h3 className='about__title'>Explore Destinations with Ease</h3>
                    <p className='about__text'>Find the best deals on railway and airplane tickets in each city, carefully selected for you.</p>
                    <ul className='about__list'>
                        <li className='about__item'>
                            <img className='about__img' src={one} alt="" />
                            <div className='list__box'>
                                <h4 className='about-list__title'>Cheap Railway Tickets With Us</h4>
                                <p className='about-one__text'>Whole world</p>
                                <p className='about-two__text'>Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .</p>
                            </div>
                            <div className='list__btn'>
                                <button className='about__btn'>Explore More</button>
                            </div>
                        </li>
                        <hr className='hr' />
                        <li className='about__item'>
                            <img className='about__img' src={two} alt="" />
                            <div className='list__box'>
                                <h4 className='about-list__title'>Discover Exciting Air Travel Deals</h4>
                                <p className='about-one__text'>Global Destinations</p>
                                <p className='about-two__text'>Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .</p>
                            </div>
                            <div className='list__btn'>
                                <button className='about__btn'>Explore More</button>
                            </div>
                        </li>
                    </ul>
                    <hr className='hrr' />
                    {/* 2box */}
                    <h3 className='about__title'>Visit One Of Our Countries Now</h3>
                    <p className='about-two2__text'>Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
                    <ul className='about__list'>
                        <li className='about__item'>
                            <img className='about__img' src={three} alt="" />
                            <div className='list__box'>
                                <h4 className='about-list__title'>Dubai</h4>
                                <p className='about-one__text'>United Arab Emirated</p>
                                <p className='about-two__text'>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.</p>
                                <hr className='hr' />
                                <div className='about__box'>
                                    <div className='icon__item'>
                                        <FaUser className='icon__box' size={18} />
                                        <p className='static'> 8.66 Mil People</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaGlobe className='icon__box' size={18} />
                                        <p className='static'>  41.290 km2</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaHome className='icon__box' size={18} />
                                        <p className='static'>  $1.100.200</p>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <button className='box__btn'>Need Directions ? <span className='about__span'> →</span></button>
                            </div>
                            <div className='list__btn'>
                                <button className='about__btn'>Explore More</button>
                            </div>
                        </li>
                        <hr className='hr' />
                        <li className='about__item'>
                            <img className='about2__img' src={four} alt="" />
                            <div className='list__box'>
                                <h4 className='about-list__title'>Antalya</h4>
                                <p className='about-one__text'>Turkey</p>
                                <p className='about-two__text'>Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate.</p>
                                <hr className='hr' />
                                <div className='about__box'>
                                    <div className='icon__item'>
                                        <FaUser className='icon__box' size={18} />
                                        <p className='static'> 44.48 Mil People</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaGlobe className='icon__box' size={18} />
                                        <p className='static'>  275.400 km2</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaHome className='icon__box' size={18} />
                                        <p className='static'>   $946.000</p>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <button className='box__btn'>Need Directions ? <span className='about__span'> →</span></button>
                            </div>
                            <div className='list__btn'>
                                <button className='about__btn'>Explore More</button>
                            </div>
                        </li>
                        <hr className='hrr' />
                        <li className='about__item'>
                            <img className='about__img' src={five} alt="" />
                            <div className='list__box'>
                                <h4 className='about-list__title'>Sharm El-Sheikh</h4>
                                <p className='about-one__text'>Egypt</p>
                                <p className='about-two__text'>Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea.</p>
                                <hr className='hr' />
                                <div className='about__box'>
                                    <div className='icon__item'>
                                        <FaUser className='icon__box' size={18} />
                                        <p className='static'> 67.41 Mil People</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaGlobe className='icon__box' size={18} />
                                        <p className='static'>  551.500 km2</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaHome className='icon__box' size={18} />
                                        <p className='static'>   $425.600</p>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <button className='box__btn'>Need Directions ? <span className='about__span'> →</span></button>
                            </div>
                            <div className='list__btn'>
                                <button className='about__btn'>Explore More</button>
                            </div>
                        </li>
                        <hr className='hr' />
                        <li className='about__item'>
                            <img className='about__img' src={six} alt="" />
                            <div className='list__box'>
                                <h4 className='about-list__title'>Istanbul</h4>
                                <p className='about-one__text'>Turkey</p>
                                <p className='about-two__text'>Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents</p>
                                <hr className='hr' />
                                <div className='about__box'>
                                    <div className='icon__item'>
                                        <FaUser className='icon__box' size={18} />
                                        <p className='static'>  67.41 Mil People</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaGlobe className='icon__box' size={18} />
                                        <p className='static'>  551.500 km2</p>
                                    </div>
                                    <div className='icon__item'>
                                        <FaHome className='icon__box' size={18} />
                                        <p className='static'>    $425.600</p>
                                    </div>
                                </div>
                                <hr className='hr' />
                                <button className='box__btn'>Need Directions ? <span className='about__span'> →</span></button>
                            </div>
                            <div className='list__btn'>
                                <button className='about__btn'>Explore More</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About