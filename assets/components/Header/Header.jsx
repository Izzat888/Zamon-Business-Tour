import React, { useState } from 'react'
import "./Header.css"
import { FaTelegram, FaInstagram, } from "react-icons/fa";
import one from './images/zamon.svg'
function Header() {

    const [modal, setModal] = useState(false);
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className='header__container'>
                        <a className='logo' href='#home'><img className='header__logo' src={one} alt="Logo" /></a>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <a className='header-list__link' href='#home'>Home</a>
                            </li>
                            <li className='header__item'>
                                <a className='header-list__link' href="#about">About</a>
                            </li>
                            <li className='header__item'>
                                <a className='header-list__link' href="#tours">Tours</a>
                            </li>
                            <li className='header__item'>
                                <a className='header-list__link' href="#contact">Contacts</a>
                            </li>
                        </ul>
                        <div className='icon'>
                            <a className='header-icon__link' href="#"><FaTelegram size={24} /></a>
                            <a className='header-icon__link' href="#"><FaInstagram size={24} /></a>
                        </div>
                        <div className={`bars ${modal ? "active" : ""}`} onClick={() => setModal(prev => !prev)}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>

                    </div>
                </div>
            </header>
            {
                modal && (
                    <div className='modal-overlay' onClick={() => setModal(false)}>
                        <ul className='bars__list' onClick={(e) => e.stopPropagation()}>
                            <li className='bars__item'>
                                <a className='bars-list__link' href='#home' onClick={() => setModal(false)}>Home</a>
                            </li>
                            <li className='bars__item'>
                                <a className='bars-list__link' href="#about" onClick={() => setModal(false)}>About</a>
                            </li>
                            <li className='bars__item'>
                                <a className='bars-list__link' href="#tours" onClick={() => setModal(false)}>Tours</a>
                            </li>
                            <li className='bars__item'>
                                <a className='bars-list__link' href="#contact" onClick={() => setModal(false)}>Contacts</a>
                            </li>
                            <li className='bars__item'>
                                <a className='bars-icon__link' href="#"><FaTelegram size={24} /></a>
                            </li>
                            <li className='bars__item'>
                                <a className='bars-icon__link' href="#"><FaInstagram size={24} /></a>
                            </li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default Header