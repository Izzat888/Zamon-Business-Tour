import React from 'react'
import "./Tours.css"
import { FaUsers, FaCar,FaPlane,} from "react-icons/fa";
import { MdHome } from "react-icons/md";
const Tours = () => {
  return (
    <div className='tours'>
        <div className='container'>
            <div className='tours__container'>
                <h2 className='tours__title'>Best Weekly Offers In Each City</h2>
                <p className='tours__text'>Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.</p>
                <ul className='tours__list'>
                    <li className='tours__item'>
                        <h3 className='tours-list__title'>Istanbul <span className='list__span'>300$</span></h3>
                        <p className='tours-list__text'><FaUsers className='tours__icon' size={20}/>234 Chesk Ins /person</p>
                        <hr />
                        <p className='tours-list-one__title'>Deal Includes:</p>
                        <p className='tours-list-one__text'><FaCar size={20}/> 5 Days Trip › Hotel Included</p>
                        <p className='tours-list-two__text'><FaPlane size={20}/>Airplane Bill Included</p>
                        <p className='tours-list-three__text'><MdHome size={20}/>Daily Places Visit</p>
                        <button className='tours__btn'>Make A Reservation</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Tours