import React from 'react'
import "./Header.css"
import{Link} from 'react-router-dom'
import { FaTelegram, FaInstagram, } from "react-icons/fa";
import one from './images/zamon.svg'
function Header() {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header__container'>
                <Link className='logo' to={"home"}><img className='header__logo' src={one} alt="Logo"/></Link>
                <ul className='header__list'>
                    <li className='header__item'>
                        <Link className='header-list__link' to={"home"}>Home</Link>
                    </li>
                    <li className='header__item'>
                        <a className='header-list__link' href="#">About</a>
                    </li>
                    <li className='header__item'>
                        <a className='header-list__link' href="#">Tours</a>
                    </li>
                    <li className='header__item'>
                        <a className='header-list__link' href="#">Contacts</a>
                    </li>
                </ul>
                <div className='icon'>
                    <a className='header-icon__link' href="#"><FaTelegram size={24}/></a>
                    <a className='header-icon__link' href="#"><FaInstagram size={24}/></a>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header