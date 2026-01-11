import React from 'react'

import "./Contact.css"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='contact__container'>
                <div className='contact__box'>
                    <h4 className='contact__title'>Book Prefered Deal Here</h4>
                    <hr className='contact__hr' />
                    <p className='contact__text'>Make Your Reservation</p>
                    <button className='contact__btn'>Discover More</button>
                </div>
                <ul className='contact__list'>
                    <li className='contact__item'>
                        <FaPhone className='contact__icon' size={20}/>
                        <h5 className='contact-list__title'>Make a Phone Call</h5>
                        <a className='contact__link' href="#">+998 99 299 99 96</a>
                    </li>
                    <li className='contact__item'>
                        <FaEnvelope className='contact__icon' size={20}/>
                        <h5 className='contact-list__title'>Contact Us via Email</h5>
                        <a className='contact__link' href="#">zamonbiznestour@mail.ru</a>
                    </li>
                    <li className='contact__item'>
                        <FaMapMarkerAlt className='contact__icon' size={20}/>
                        <h5 className='contact-list__title'>Visit Our Offices</h5>
                        <a className='contact__link' href="#">15/25, Chilanzar - 9, Tashkent city</a>
                    </li>
                </ul>
                <div className='contact__maps'>
                    <iframe className='map'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6448.632404078274!2d69.199668!3d41.289032!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89a274fdb9b7%3A0x2b8bc58608ca7fb2!2sChilanzar-25%2C%20100152%2C%20Tashkent%2C%20Tashkent%20Region%2C%20Uzbekistan!5e1!3m2!1sen!2sus!4v1768156885416!5m2!1sen!2sus"
                        width="1200"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Tashkent Map"
                    ></iframe>
                </div>
                <div className='contact__btns'>
                    <h4 className='contact-btns__title'>Make Your <span className='contact__span'>Reservation</span> Through This <span className='contact__span'>Form</span></h4>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact