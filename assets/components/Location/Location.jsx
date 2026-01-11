import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './Location.css';

import one from "./images/dubai4.jpg";
import two from "./images/antalya3.jpg";
import three from "./images/istanbul4.jpg";
import four from "./images/sharm3.webp";
import five from "./images/paris.jpg";

const Location = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  
  const images = [
    { id: 1, src: one, alt: "Dubai" },
    { id: 2, src: two, alt: "Antalya" },
    { id: 3, src: three, alt: "Istanbul" },
    { id: 4, src: four, alt: "Sharm El-Sheikh" },
    { id: 5, src: five, alt: "Paris" }
  ];

  const openModal = (img) => {
    setSelectedImg(img);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <div className='location'>
      <div className='container'>
        <div className='location__container'>
          <h3 className='location__title'>Best Locations</h3>
          <p className='location__text'>
            Discover the best offers in each city, curated just for you. 
            Immerse yourself in a world of savings and indulge in unparalleled experiences.
          </p>

          <div className="location__cards-container">
            <Swiper
              effect={'cards'}
              grabCursor={true}
              cardsEffect={{
                perSlideOffset: 10,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              speed={800}
              modules={[EffectCards, Autoplay]}
              className="location__swiper-cards"
            >
              {images.map((img) => (
                <SwiperSlide key={img.id}>
                  <div 
                    className="location__card-slide"
                    onClick={() => openModal(img)}
                  >
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="location__card-image"
                    />
                    <div className="location__card-overlay">
                      <h3 className="location__card-title">{img.alt}</h3>
                      <div className="location__card-hint">Click to view</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;