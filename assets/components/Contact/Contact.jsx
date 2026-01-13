import React, { useState } from 'react';
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';

const Contact = () => {
    const [open, setOpen] = useState(false);

    const [region, setRegion] = useState(false);

    const [visa, setVisa] = useState(false)

    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [destination, setDestination] = useState("");
    const [vise, setVise] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        const token = "8525190160:AAGZkVzB6-zwfCtWONTFjI7Oqb7JKsjeiJo"
        const chat_id = 1319144600

        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const text = `Ism: ${name};\n Telefon: ${telephone};\n Guests: ${guests};\n Date: ${date};\n Destination: ${destination};\n Vise: ${vise};\n`

        axios.post(url, {
            chat_id: chat_id,
            text: text
        }).then(() => {
            alert(" Arizangiz muvaffiqiyatli jo'natildi.✅")
            setName("")
            setTelephone("")
            setGuests("")
            setDate("")
            setDestination("")
            setVise("")
        }).catch(() => {
            console.log("Noto'g'ri ma'lumot kiritingiz ❌");

        })
    }

    const options = ["ex. 3 or 4 or 5", "1", "2", "3", "4+"];

    const opttionss = ["Antalya", "Istanbul", "Dubai", "Sharm El-Sheikh", "Kuala Lumpur", "Canada", "England"]

    const option = ["Country", "USA", "Europe", "England", "Japan", "Oman", "Saudi Arabia", "India", "China", "Hong Kong"]
    return (
        <div className='contact'>
            <div className='container'>
                <div className='contact__container'>

                    {/* Book Box */}
                    <div className='contact__box'>
                        <h4 className='contact__title'>Book Prefered Deal Here</h4>
                        <hr className='contact__hr' />
                        <p className='contact__text'>Make Your Reservation</p>
                        <button className='contact__btn'>Discover More</button>
                    </div>

                    {/* Contact Info */}
                    <ul className='contact__list'>
                        <li className='contact__item'>
                            <FaPhone className='contact__icon' size={20} />
                            <h5 className='contact-list__title'>Make a Phone Call</h5>
                            <a className='contact__link' href="#">+998 99 299 99 96</a>
                        </li>
                        <li className='contact__item'>
                            <FaEnvelope className='contact__icon' size={20} />
                            <h5 className='contact-list__title'>Contact Us via Email</h5>
                            <a className='contact__link' href="#">zamonbiznestour@mail.ru</a>
                        </li>
                        <li className='contact__item'>
                            <FaMapMarkerAlt className='contact__icon' size={20} />
                            <h5 className='contact-list__title'>Visit Our Offices</h5>
                            <a className='contact__link' href="#">15/25, Chilanzar - 9, Tashkent city</a>
                        </li>
                    </ul>

                    {/* Map */}
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

                    {/* Register Form */}
                    <div className='register'>
                        <h4 className='contact-btns__title'>
                            Make Your <span className='contact__span'>Reservation</span> Through This <span className='contact__span'>Form</span>
                        </h4>

                        <form className='form' action="#" onSubmit={sendMessage}>


                            <div className='register__container'>

                                {/* Your Name */}
                                <div className='input__one'>
                                    <label className='name' htmlFor="name">Your name</label>
                                    <input className='name__input' type="text" id="name" placeholder='Ex. John Smithee' onChange={(e) => setName(e.target.value)} value={name} required />
                                </div>

                                {/* Phone Number */}
                                <div className='input__two'>
                                    <label className='number' htmlFor="phone">Your Phone Number</label>
                                    <input className='number__input' onChange={(e) => setTelephone(e.target.value)} type="text" id="phone" placeholder='Ex. +99899 999 99 99' value={telephone} required />
                                </div>

                                {/* Number of Guests (Dropdown) */}
                                <div className='input__three' style={{ position: "relative" }}>
                                    <label className='guest' htmlFor="guests">Number Of Guests</label>
                                    <input id="guests" className='guest__input' onChange={(e) => setGuests(e.target.value)} value={guests} placeholder='Ex. 3 or 4 or 5' readOnly required onClick={() => setOpen(!open)} />
                                    {open && (
                                        <ul className='guest__dropdown'> {options.map((opt) => (
                                            <li className='guests' key={opt} onClick={() => { setGuests(opt); setOpen(false); }}> {opt}</li>))}
                                        </ul>
                                    )}
                                </div>
                                {/* data */}
                                <div className='input__four'>
                                    <label className='date' htmlFor="date">Check In Date</label>
                                    <input className='date__input' type="date" id='date' onChange={(e) => setDate(e.target.value)} value={date} required />
                                </div>
                            </div>
                            {/* region */}
                            <div className='input__four' style={{ position: "relative" }}>
                                <label className='choos' htmlFor="choose">Choose Your Destination</label>
                                <input id="choose" className='choos__input' value={destination} onChange={(e) => setDestination(e.target.value)} placeholder='Antalya' readOnly required onClick={() => setRegion(!region)} />
                                {region && (
                                    <ul className='choos__dropdown'> {opttionss.map((opt) => (
                                        <li className='choose' key={opt} onClick={() => { setDestination(opt); setRegion(false); }}> {opt}</li>))}
                                    </ul>)}
                            </div>
                            {/* Visa */}
                            <div className='input__five' style={{ position: "relative" }}>
                                <label className='visa' htmlFor="visa">Choose Your Visa Support</label>
                                <input id="vise" className='visa__input' value={vise} onChange={(e) => setVise(e.target.value)} placeholder='Country' readOnly required onClick={() => setVisa(!visa)} />
                                {visa && (
                                    <ul className='visa__dropdown'> {option.map((opt) => (
                                        <li className='vise' key={opt} onClick={() => { setVise(opt); setVisa(false); }}> {opt}</li>))}
                                    </ul>)}
                            </div>
                            {/* button */}
                            <button type='submit' className='btn'>Make Your Reservation Now</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Contact;
