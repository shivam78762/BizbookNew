import React from "react";
import "./Card.css";
import one from "../Assets/icon/1.webp";
import two from "../Assets/icon/2.webp";
import three from "../Assets/icon/3.webp";
import four from "../Assets/icon/4.webp";
import card1 from "../Assets/services/21.webp";
import card2 from "../Assets/services/30.webp";
import card3 from "../Assets/services/1.webp";
import card4 from "../Assets/services/4.webp";
import card5 from "../Assets/services/8.webp";
import card6 from "../Assets/services/27.webp";
import card7 from "../Assets/services/17.webp";
import card8 from "../Assets/services/28.webp";
import hotel1 from "../Assets/services/10.webp";
import hotel2 from "../Assets/services/9.webp";
import hotel3 from "../Assets/services/19.webp";
import hotel4 from "../Assets/services/8.webp";
import hotel5 from "../Assets/services/2.webp";
import hotel6 from "../Assets/services/3.webp";
import hotel7 from "../Assets/services/5.webp";
import hotel8 from "../Assets/services/6.webp";
import hotel9 from "../Assets/services/7.webp";
import hotel11 from "../Assets/services/11.webp";
import hotel12 from "../Assets/services/12.webp";
import hotel13 from "../Assets/services/13.webp";
import hotel16 from "../Assets/services/16.webp";
import hotel14 from "../Assets/services/14.webp";
import service1 from "../Assets/listings/1.webp";
import service2 from "../Assets/listings/5.webp";
import service3 from "../Assets/listings/2.webp";
import service4 from "../Assets/listings/6.webp";
import service5 from "../Assets/listings/3.webp";
import service6 from "../Assets/listings/7.webp";
import service7 from "../Assets/listings/4.webp";
import service8 from "../Assets/listings/8.webp";
import blog from "../Assets/icon/blog.webp";
import shield from "../Assets/icon/shield.webp";
import general from "../Assets/icon/general.webp";
import { RiStarSFill } from "@remixicon/react";
import Form from "../Form/Form.jsx";
import slider1 from "../Assets/slider/1.webp";
import slider2 from "../Assets/slider/2.webp";

import { Link } from "react-router-dom";
import Herotwo from "../Hero/Herotwo.jsx";
import { useState, useEffect } from "react";
const Card = () => {

  

  const [loc, setLoc] = useState();

  useEffect(()=>{
    const loc = localStorage.getItem("location")
      console.log(JSON.parse(loc))
    //  setLoc = JSON.parse(loc);
    setLoc( JSON.parse(loc))
    console.log(JSON.parse(loc))

  },[])

    const [sliderPosition, setSliderPosition] = useState(0);

    const prevSlide = () => {
      setSliderPosition(prevPosition => (prevPosition === 0 ? 50 : prevPosition - 50));
    };
    
    const nextSlide = () => {
      setSliderPosition(prevPosition => (prevPosition === 50 ? 0 : prevPosition + 50));
    };
    

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



  // const additionalCardData = [
  //   {
  //     imageUrl: card1,
  //     title: "Spa and Facial",
  //   },
  //   {
  //     imageUrl: card2,
  //     title: "Hospitals",
  //   },
  //   {
  //     imageUrl: card3,
  //     title: "Transportation",
  //   },
  //   {
  //     imageUrl: card4,
  //     title: "Automobiles",
  //   },
  //   {
  //     imageUrl: card5,
  //     title: "Electricals",
  //   },
  //   {
  //     imageUrl: card6,
  //     title: "Education",
  //   },
  //   {
  //     imageUrl: card7,
  //     title: "Pet & Animals",
  //   },
  //   {
  //     imageUrl: card8,
  //     title: "Real Estate",
  //   },
  // ];

  const hotelsData = [
    {
      image: hotel1,
      title: "Hotels And Resorts",
      rating: "3.0",
      reviews: 2,
      listings: 9,
      link: "all-listing.html",
    },
    {
      image: hotel2,
      title: "Autombiles",
      rating: "3.0",
      reviews: 4,
      listings: 6,
      link: "all-listing.html",
    },
    {
      image: hotel3,
      title: "Wedding halls",
      rating: "5.0",
      reviews: 3,
      listings: 3,
      link: "all-listing.html",
    },
    {
      image: hotel4,
      title: "Digital Products",
      rating: "3.3",
      reviews: 3,
      listings: 23,
      link: "all-listing.html",
    },
    {
      image: hotel5,
      title: "Real Estate",
      rating: "3.3",
      reviews: 2,
      listings: 23,
      link: "all-listing.html",
    },
  ];
  const services = [
    {
      id: 1,
      image: service1,
      title: "Titan Wedding Hall",
      subTitle: "Wedding halls",
      description: "Titan wedding happ, North street, No 2, Neyyork,USA",
      rating: "5.0",
    },
    {
      id: 2,
      image: service2,
      title: "IPM Business Software",
      subTitle: "Digital Products",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      id: 3,
      image: service3,
      title: "Gill Automobiles and Services",
      subTitle: "Automobiles",
      description: "Titan wedding happ, North street, No 2, Newyork, USA",
    },
    {
      id: 4,
      image: service4,
      title: "Rachel Taj Hotels",
      subTitle: "Hotels And Resorts",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "3.0",
    },
    {
      id: 5,
      image: service5,
      title: "Rolexo Villas in California",
      subTitle: "Real Estate",
      description:
        "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      rating: "5.0",
    },
    {
      id: 6,
      image: service6,
      title: "Joseph Multispeciality Hospital",
      subTitle: "Hospitals",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      id: 7,
      image: service7,
      title: "The Spa at Mandarin Oriental",
      subTitle: "Hospitals",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "4.0",
    },
    {
      id: 8,
      image: service8,
      title: "Green Healthcare Hospital",
      subTitle: "Hospitals",
      description: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "3.0",
    },
  ];
  const cityData = [
    {
      head: "Top Branding Real Estate",
      images: [
        {
          image: card3,
          title: "Royal Real Estates",
          description: "Description of Royal Real Estates",
        },
        {
          image: hotel5,
          title: "Royal Real Estates",
          description: "Description of Royal Real Estates",
          rating: "3.0",
        },
        {
          image: hotel6,
          title: "Royal Real Estates",
          description: "Description of Royal Real Estates",
          rating: "3.0",
        },
        {
          image: card4,
          title: "Royal Real Estates",
          description: "Description of Royal Real Estates",
        },
        {
          image: hotel7,
          title: "Royal Real Estates",
          description: "Description of Royal Real Estates",
        },
      ],
    },
    {
      head: "Top Branding Digital Products",
      images: [
        {
          image: hotel8,
          title: "BizBookBusiness Directory ",
          description: "Description of BizBookBusiness Directory ",
        },
        {
          image: hotel9,
          title: "BizBookBusiness Directory ",
          description: "Description of BizBookBusiness Directory ",
        },
        {
          image: card5,
          title: "BizBookBusiness Directory ",
          description: "Description of BizBookBusiness Directory ",
        },
        {
          image: hotel2,
          title: "BizBookBusiness Directory ",
          description: "Description of BizBookBusiness Directory ",
          rating: "3.0",
        },
        {
          image: hotel1,
          title: "BizBookBusiness Directory ",
          description: "Description of BizBookBusiness Directory ",
          rating: "3.0",
        },
      ],
    },
    {
      head: "Top Branding Hospitals",
      images: [
        {
          image: hotel11,
          title: "William Chill care Hospital",
          description: "Description of William Chill care Hospital",
        },
        {
          image: hotel12,
          title: "William Chill care Hospital",
          description: "Description of William Chill care Hospital",
          rating: "3.0",
        },
        {
          image: hotel13,
          title: "William Chill care Hospital",
          description: "Description of William Chill care Hospital",
        },
        {
          image: hotel14,
          title: "William Chill care Hospital",
          description: "Description of William Chill care Hospital",
          rating: "3.0",
        },
        {
          image: hotel16,
          title: "William Chill care Hospital",
          description: "Description of William Chill care Hospital",
          rating: "3.0",
        },
      ],
    },
  ];

  return (
    <>
   
      {isMobile ? (
       ""
      ) : 
      (
      <div className="card-container m-4">
        {cardData.map((card, index) => (
          <section className="card-hero" key={index}>
            <img src={card.imageUrl} alt="Card" className="card-image" />
            <div className="card-content">
              <h2 className="card-heading">{card.heading}</h2>
              <p className="card-paragraph">{card.paragraph}</p>
              <Link to={`${
       (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
       ? loc?.State
       : loc?.Name?.replace(/\s+/g, ""))
      }/realestate`}>
                    <button className="card-button">Explore Now</button>
                  </Link>
            </div>
          </section>
        ))}
      </div>)}
  
      <Herotwo />

      {/* <div className="second m-4 text-center">
        <h1>
          Popular Services <span style={{ fontWeight: 400 }}>near you</span>
        </h1>
        <p>laccina viviera lectous. Fuce ullampur mteus es fnrirmms</p>
     <div className="container">
     <div className="card-container">
          {additionalCardData.map((card, index) => (
            <section className="second-card" key={`additional-${index}`}>
              <Link to='/realestate'>
              <img
                src={card.imageUrl}
                alt={card.title}
                className="second-card-image"
              />
            </Link>
              <div className="second-card-content">
                <h2 className="second-card-heading">{card.title}</h2>
              </div>
            </section>
          ))}
          <button className="view-btn">
            <Link to="/services">View all services</Link>
          </button>
        </div>
     </div>
      </div> */}
      <section>
        <div className="str">
          <div className="container mt-5">
            <div className="row">
              <div className="home-tit text-center  mb-4">
                <h2>
                  <span>Explore City</span>
                  <span style={{ fontWeight: 400 }}> Category</span>
                </h2>
                <p>
                  lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
                  fringilla.
                </p>
              </div>
              <div className="col-md-6">
                <div className="home-city">
                  <ul>
                    <li>
                      <Link to={`${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/realestate`}>
                        <div className="hcity-hcity hcity-image">
                          <div>
                            <img src={hotelsData[0].image} alt="" />
                          </div>
                          <div className="hcity-text ">
                            <h4>{hotelsData[0].title}</h4>
                            <div className="list-rat-all-first">
                              <b>{hotelsData[0].rating}</b>
                              <label className="rat-first">
                                {[...Array(5)].map((_, i) => (
                                  <RiStarSFill
                                    key={i}
                                    className={
                                      i < hotelsData[0].rating ? "ratstar" : ""
                                    }
                                  />
                                ))}
                              </label>
                              <span>{hotelsData[0].reviews} Reviews</span>
                            </div>
                            <p>{hotelsData[0].listings} Listings</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  {hotelsData.slice(1).map((hotel, index) => (
                    <div className="col-md-6" key={index}>
                      <Link to={`${
       (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
       ? loc?.State
       : loc?.Name?.replace(/\s+/g, ""))
      }/realestate`}>
                        <div className="hcity">
                          <div>
                            <img src={hotel.image} alt="" />
                          </div>
                          <div className="hcity-text">
                            <h4>{hotel.title}</h4>
                            <div className="list-rat-all-first">
                              <b>{hotel.rating}</b>
                              <label className="rat-first ">
                                {[...Array(5)].map((_, i) => (
                                  <RiStarSFill
                                    key={i}
                                    className={
                                      i < parseFloat(hotel.rating)
                                        ? "ratstar"
                                        : ""
                                    }
                                  />
                                ))}
                              </label>
                              <span>{hotel.reviews} Reviews</span>
                            </div>
                            <p>{hotel.listings} Listings</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  

      <section className="section-service pt-3">
        <div className="home-tit text-center p-3">
          <h2>
            <span>Explore City</span>
            <span style={{ fontWeight: 400 }}> Category </span>
          </h2>
          <p className="px-4">
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <Link to={`${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/all`}>
          <div className="container service-container ">
            {services.map((service) => (
              <div className="row service-card" key={service.id}>
                <div className="col-md-3 service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="col-md-9 service-text text-start">
                  {service.rating && (
                    <b className="service-rating">{service.rating}</b>
                  )}
                  <h2>{service.title}</h2>
                  <h3>{service.subTitle}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Link>

        <div className="container mt-3 mb-3 slider-container-main">
      <div className="slider-image" style={{ transform: `translateX(-${sliderPosition}%)` }}>
        <div className="slide-img">
       <Link to={`${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/realestate`}>  <img src={slider1} alt="" /></Link> 
        </div>
        <div className="slide-img">
         <Link to={`${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/realestate`}> <img src={slider2} alt="" /></Link>
        </div>
        
      </div>
      <button className="prev-slider" onClick={prevSlide}>Prev</button>
      <button className="next-slider" onClick={nextSlide}>Next</button>
    </div>
        <div className="left-main">
          <div className="container mt-5 mb-4">
            <div className="row">
              <div className="col-md-6">
                <div className="hom-cre-acc-left">
                  <h3>
                    What service do you need? <span>BizBook Directory</span>
                  </h3>
                  <p>
                    Tell us more about your requirements so that we can connect
                    you to the right service provider.
                  </p>
                  <ul>
                    <li>
                      <img src={blog} alt="" />
                      <div>
                        <h5>Tell us more about your requirements</h5>
                        <p>
                          HI Imagine you have made your presence online through
                          a local online directory, but your competitors have..
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={shield} alt="" />
                      <div>
                        <h5>We connect with right service provider</h5>
                        <p>
                          Advertising your business to area specific has many
                          advantages. For local businessmen, it is an
                          opportunity..
                        </p>
                      </div>
                    </li>
                    <li>
                      <img src={general} alt="" />
                      <div>
                        <h5>Happy with our service</h5>
                        <p>
                          Your local business too needs brand management and
                          image making. As you know the local market..
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 pb-5">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="home-tit text-center mt-5">
          <h2>
            <span>Explore City</span>
            <span style={{ fontWeight: 400 }}> Category </span>
          </h2>
          <p>
            lacinia viverra lectus. Fusce imperdiet ullamcorper metus eu
            fringilla.
          </p>
        </div>
        <div className="city-container">
          {cityData.map((city, index) => (
            <div className="city" key={index}>
              <div className="city-head">
                <h4>{city.head}</h4>
              </div>
              <Link to={`${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/all`} >
                {city.images.map((imageData, i) => (
                  <div className="image" key={i}>
                    <div className="city-image">
                      <img src={imageData.image} alt={imageData.title} />
                    </div>
                    <div className="image-details">
                      {imageData.rating && (
                        <b className="city-rating">{imageData.rating}</b>
                      )}
                      <h3>{imageData.title}</h3>
                      <p>{imageData.description}</p>
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
