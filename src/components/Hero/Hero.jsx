import React, { useState, useEffect } from "react";
import "./Hero.css"; // Import your external CSS file
// import map from "../Assets/icon/line/map.webp";
import Slider from "react-slick";
import search from "../Assets/icon/search.webp";
import ImageSlider from "./ImageSlider";
import image1 from "../Assets/home/banner_cctv_2024.webp";
import image2 from "../Assets/home/banner2.webp";
import image7 from "../Assets/home/banner6.webp";
import b2b from "../Assets/home/b2b.webp";
import b3b from "../Assets/home/b3b.webp";
import b4b from "../Assets/home/b4b.webp";
import b5b from "../Assets/home/b5b.webp";

import Card from "../Cards/Card";
import CommonComponent from "../Footer/CommonComponent";
import Testimonial from "../Cards/Testimonial";
import { Link } from "react-router-dom";
import one from "../Assets/icon/1.webp";
import two from "../Assets/icon/2.webp";
import three from "../Assets/icon/3.webp";
import four from "../Assets/icon/4.webp";

const Hero = () => {
  const [isSwapped, setIsSwapped] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredBgColor, setHoveredBgColor] = useState(null);
  const [location, setLocation] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prevState) => !prevState);
    }, 2000); // Interval set to 2 seconds

    return () => clearInterval(interval);
  }, []);
  const cardData = [
    {
      imageUrl: one,
      heading: "24 Million Business",
      paragraph:
        "Choose from a collection of handpicked luxury villas & apartments",
    },
    {
      imageUrl: two,
      heading: "1,200 Services Offered",
      paragraph:
        "Choose from a collection of handpicked luxury villas & apartments",
    },
    {
      imageUrl: three,
      heading: "05 Million Visitors",
      paragraph:
        "Choose from a collection of handpicked luxury villas & apartments",
    },
    {
      imageUrl: four,
      heading: "2k+ Premium Users",
      paragraph:
        "Choose from a collection of handpicked luxury villas & apartments",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay:true
  };

  const [loc, setLoc] = useState();

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as needed for mobile devices
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const images = [image1, image2, image7];

  const cardsData = [
    {
      imageUrl: b2b,
      title: "B2B",
      description: "Quick Quotes",
      bgColor: "#0F7DD8", // Pink
    },
    {
      imageUrl: b3b,
      title: "Repair & Service",
      description: "Get nearest Vendor",
      bgColor: "#2654A1", // Pink
    },
    {
      imageUrl: b4b,
      title: "Real estate",
      description: "Finest Agents",
      bgColor: "#6769D0", // Pink
    },
    {
      imageUrl: b5b,
      title: "Doctors",
      description: "Book Now",
      bgColor: "#00ac7d", // Pink
      color: "white", // Pink
    },
  ];

  const handleMouseEnter = (index, bgColor) => {
    setHoveredButton(index);
    setHoveredBgColor(bgColor);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  useEffect(() => {
    const handleLocationDetection = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude);
            console.log(longitude);

            try {
              //  https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
              // https://nominatim.openstreetmap.org/reverse?format=json&lat=37.7749295&lon=-122.4194155
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
              console.log(data);

              console.log(data.address.county);
              const str = JSON.stringify(data.address);
              console.log(str);
              localStorage.setItem("location", str);

              console.log("dataafa", data);

              setLocation(data.address.county || data.address.city);

              // setLocation("Location not found");
            } catch (error) {
              console.error("Error fetching location:", error);
            }
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    handleLocationDetection();
  }, []);

  return (
    <>
      <section className="hero-main">
      {isMobile ? ( <div className="container mt-3">
          <div className="row">
            <div className="col-md-12">
              <h2 className="hero-font">
                Search across&nbsp;
                <span className={isSwapped ? " span-two" : " span-one"}>
                  '
                  {isSwapped
                    ? `3.3 Crore+' Products & Services`
                    : `4 Crore+' Business`}
                </span>
              </h2>
            </div>
          </div>
          <div className="hero-search">
            <div className="search-container">
              <div className="icon search-icon">
                <img src={search} alt="Search Icon" width="20" />
              </div>
              <input type="text" placeholder="Search" />
              <div className="icon mic-icon"></div>
            </div>
          </div>
        </div>) : ""} 
        <div>
          {isMobile ? (
            <Slider {...settings}>
              {cardData.map((card, index) => (
                <div key={index} className="card-container">
                  <Link
                    to={`${
                      (loc?.county == ""
                        ? loc?.city
                        : loc?.county?.replace(/\s+/g, "")) ||
                      (loc?.Name == "NA"
                        ? loc?.State
                        : loc?.Name?.replace(/\s+/g, ""))
                    }/realestate`}
                  >
                    <section className="card-hero">
                      <img
                        src={card.imageUrl}
                        alt="Card"
                        className="card-image"
                      />
                      <div className="card-content">
                        <h2 className="card-heading text-black">
                          {card.heading}
                        </h2>
                        <p className="card-paragraph">{card.paragraph}</p>

                        <button className="card-button">Explore Now</button>
                      </div>
                    </section>
                  </Link>
                </div>
              ))}
            </Slider>
          ) : (
            ""
          )}
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ImageSlider images={images} />
            </div>

            {isMobile ? (
              ""
            ) : (
              <div className="col-md-6">
                <div className="card-list">
                  {cardsData.map((card, index) => (
                    <div
                      className="card"
                      key={index}
                      style={{
                        backgroundColor: card.bgColor,
                        color: card.color,
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.description}</p>
                      </div>
                      <Link
                        to={`${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/realestate`}
                      >
                        <img src={card.imageUrl} alt={card.title} />
                      </Link>
                      <div className="hero-explore">
                        <button
                          className="arrow-button"
                          onMouseEnter={() =>
                            handleMouseEnter(index, card.bgColor)
                          }
                          onMouseLeave={handleMouseLeave}
                          style={{
                            backgroundColor:
                              hoveredButton === index
                                ? hoveredBgColor
                                : "transparent",
                          }}
                        >
                          &#10095;
                        </button>

                        <button
                          className={`explore-button ${
                            hoveredButton === index ? "active" : ""
                          }`}
                        >
                          <Link
                            to={`${
                              (loc?.county == ""
                                ? loc?.city
                                : loc?.county?.replace(/\s+/g, "")) ||
                              (loc?.Name == "NA"
                                ? loc?.State
                                : loc?.Name?.replace(/\s+/g, ""))
                            }/realestate`}
                          >
                            {" "}
                            Explore &#10095;
                          </Link>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Card />

      <div className="why-choose-us">
        <div className="container">
          <div className="row">
            <CommonComponent />
          </div>
          <div className="row">
            <Testimonial />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
