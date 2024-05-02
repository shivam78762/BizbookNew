import React, { useEffect, useState } from "react";
import "./CSS/Services.css";
import service29 from "../Assets/services/29.webp";
import service2 from "../Assets/services/10.webp";
import service3 from "../Assets/services/17.webp";
import service4 from "../Assets/services/4.webp";
import service5 from "../Assets/services/18.webp";
import service6 from "../Assets/services/21.webp";
import service7 from "../Assets/services/22.webp";
import service8 from "../Assets/services/23.webp";
import hotel1 from "../Assets/services/10.webp";
import MyBusiness from "./MyBusiness";
import { Link } from "react-router-dom";

const Service = () => {
  
  const [loc, setLoc] = useState();

  useEffect(()=>{
    const loc = localStorage.getItem("location")
      console.log(JSON.parse(loc))
    //  setLoc = JSON.parse(loc);
    setLoc( JSON.parse(loc))
    console.log(JSON.parse(loc))

  },[])
  const services = [
    {
      name: "Real Estate",
      totalCount: 23,
      imageSrc: service29,
      subcategories: [
        { name: "Villas", count: 87 },
        { name: "Indepentant House", count: 45 },
        { name: "Plots and Lands", count: 80 },
      ],
    },
    {
      name: "Hotels And Resorts",
      totalCount: 987,
      imageSrc: service2,
      subcategories: [
        { name: "Street food", count: 23 },
        { name: "Coffee shop", count: 234 },
        { name: "Food hotel", count: 423 },
        { name: "Beach Resort", count: 52 },
        { name: "Resort", count: 86 },
        { name: "Hotels", count: 33 },
      ],
    },
    {
      name: "Pet shop",
      totalCount: 12,
      imageSrc: service7,
      subcategories: [
        { name: "Buy dogs", count: 765 },
        { name: "Puppy dog types", count: 76 },
        { name: "Other pets", count: 40 },
      ],
    },
    {
      name: "Digital Products",
      totalCount: 1238,
      imageSrc: service8,
      subcategories: [
        { name: "Smart classes", count: 22 },
        { name: "Health care products", count: 898 },
        { name: "Website Template", count: 988 },
        { name: "Ebooks", count: 11 },
      ],
    },
    {
      name: "Spa and Facial",
      totalCount: 5321,
      imageSrc: service6,
      subcategories: [
        { name: "Health & Beauty", count: 230 },
        { name: "Health & Beauty", count: 64 },
        { name: "Face & Body", count: 72 },
        { name: "Massage", count: 321 },
        { name: "Facial", count: 532 },
      ],
    },
    {
      name: "Wedding halls",
      totalCount: 3,
      imageSrc: hotel1,
      subcategories: [
        { name: "Seminar hall", count: 0 },
        { name: "Party hall", count: 1 },
        { name: "Marriage hall", count: 0 },
      ],
    },
    {
      name: "Sports",
      totalCount: 5,
      imageSrc: service3,
      subcategories: [
        { name: "Cycling", count: 231 },
        { name: "Swimming", count: 342 },
        { name: "Sports Kits Shop", count: 764 },
      ],
    },
    {
      name: "Education",
      totalCount: 235,
      imageSrc: service5,
      subcategories: [
        { name: "Tution Centers", count: 45 },
        { name: "Colleges", count: 23 },
        { name: "Schools", count: 632 },
        { name: "Pre kg and Child care", count: 342 },
      ],
    },
    {
      name: "Electricals",
      totalCount: 95,
      imageSrc: service4,
      subcategories: [
        { name: "Panel", count: 70 },
        { name: "Power", count: 35 },
      ],
    },
    {
      name: "Automobiles",
      totalCount: 245,
      imageSrc: service4,
      subcategories: [
        { name: "Bike Showrooms", count: 23 },
        { name: "Car showrooms", count: 76 },
        { name: "Car and Bike Services", count: 65 },
      ],
    },
    {
      name: "Transportation",
      totalCount: 432,
      imageSrc: hotel1,
      subcategories: [
        { name: "Bike Services", count: 40 },
        { name: "Bus Tickets", count: 231 },
        { name: "Cab services", count: 40 },
      ],
    },
    {
      name: "Hospitals",
      totalCount: 1258,
      imageSrc: hotel1,
      subcategories: [
        { name: "Community Hospitals", count: 455 },
        { name: "Clinics", count: 890 },
        { name: "Child Hospitals", count: 83 },
      ],
    },
  ];

  return (
    <>
      <div className="service-main comunity-ban">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="service-main-head">
                <h1>All Service</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <input
                  type="text"
                  className="service-search-container"
                  placeholder="Search sub category here.."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container service-container mt-5 ">
        {services.map((service) => (
        
          <div className="row service-card serve-card" key={service.id}>
            <div className="col-md-3 service-image">
              <img src={service.imageSrc} alt={service.title} />
            </div>
            <div className="col-md-9 service-text text-start sub">
              <h2>
              <Link to="/realestate"> {service.name} {service.totalCount} </Link>
              </h2>

              {service.subcategories.map((subcategory) => (
                <div className="subcategory-text">
                   <Link
                                  to={`/${loc?.county?.replace(
                                    /\s+/g,
                                    ""
                                  )}/realestate`}
                                >{subcategory.name}: <span> {subcategory.count} </span> </Link>
                </div>
              ))}
            </div>
          </div>
         
        ))}
      </div>

      <MyBusiness />
    </>
  );
};

export default Service;
