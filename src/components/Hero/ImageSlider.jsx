import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import './ImageSlider.css'; // You need to create this CSS file for styling
const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [loc, setLoc] = useState();

  useEffect(()=>{
    const loc = localStorage.getItem("location")
      console.log(JSON.parse(loc))
    //  setLoc = JSON.parse(loc);
    setLoc( JSON.parse(loc))
    console.log(JSON.parse(loc))

  },[])

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  const goToNextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  return (
    <>
    <div className="slider-container">
      <div className="slider">
        <button className="prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
       <Link to={`/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/deal`}>
       <div className="slide">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
          />
        </div>
        </Link>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? "dot active" : "dot"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
    </div>

    
</>
  );
};

export default ImageSlider;
