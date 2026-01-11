import React from 'react'
import "./Header.css"
import { FaTelegram, FaInstagram, } from "react-icons/fa";
import one from './images/zamon.svg'
function Header() {
    return (
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
                            <a className='header-list__link' href="#">Contacts</a>
                        </li>
                    </ul>
                    <div className='icon'>
                        <a className='header-icon__link' href="#"><FaTelegram size={24} /></a>
                        <a className='header-icon__link' href="#"><FaInstagram size={24} /></a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header