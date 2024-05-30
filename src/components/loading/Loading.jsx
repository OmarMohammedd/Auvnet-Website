// @ts-nocheck
import React, { useState, useEffect } from "react";
import "./Loading.scss"; // Import CSS file for styling
import firstImg from "../../assets/first-loading-img.png";
import secondImg from "../../assets/second-loading-img.png";
import thirdImg from "../../assets/third-loading-img.png";
import fourthImg from "../../assets/fourth-loaidng-img.png"; // Fixed typo in image import

const UniLoading = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [firstImg, secondImg, thirdImg, fourthImg];

  useEffect(() => {
    setTimeout(() => {
      if (currentImageIndex === 0) {
        setCurrentImageIndex(1);
      } else if (currentImageIndex === 1) {
        setCurrentImageIndex(2);
      } else if (currentImageIndex === 2) {
        setCurrentImageIndex(3);
      } else {
        setCurrentImageIndex(0);
      }
    }, 800);
  }, [currentImageIndex]);

  return (
    <div className="image-slider">
      <div className="loading-background-img" style={{backgroundImage:`url(${images[currentImageIndex]})`}}  />
    </div>
  );
};

export default UniLoading;
