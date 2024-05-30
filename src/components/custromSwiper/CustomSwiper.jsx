import React, { useState } from 'react';
import './CustomSwiper.css'; // Import your custom styles

const CustomSwiper = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="custom-swiper">
      <button className="prev-btn" onClick={goToPrevSlide}>Prev</button>
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default CustomSwiper;
