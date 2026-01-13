import React from 'react'

import fotter from "./images/travel.jpeg"
import "./Footer.css"
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='footer__container'>
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <h6 className='footer__title'>Are You Looking To Travel ?</h6>
                                <p className='footer__text'>Make A Reservation By Clicking The Button</p>
                            </li>
                            <li className='footer__item'>
                                <button className='footer__btn'>Book Yours Now</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer__box'>
                <div className='container'>
                    <a className='footer__link' href="#">Copyright © 2024 Zamon Business Tour. All rights reserved.</a>
                </div>
            </div>
        </>
    )
}

export default Footer