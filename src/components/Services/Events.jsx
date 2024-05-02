import React from "react";
import event1 from "../Assets/events/1.webp";
import event2 from "../Assets/events/2.webp";
import user1 from "../Assets/user/1.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot,faMobile } from '@fortawesome/free-solid-svg-icons';
import MyBusiness from "./MyBusiness";
import { Link } from "react-router-dom";


const Events = () => {
  // Sample event data
  const eventData = [
    {
      imageUrl: event1,
      date: "Dec 28",
      eventName: "New year celebration 2020",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Online Marketers Meet-Up",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Lunar New Year 2020",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Poway Winter Festival",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Car Fest 2020",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Toyota Cars 20% Offer",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Electrical Energy Saving Methods",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "States Soccer World Cup 2022",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Directory Finder",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Art Exhibition: Nature's Beauty",
      address: "Art Gallery, Downtown Street, Los Angeles, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Artistic Creations",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Tech Summit 2022",
      address: "Convention Center, Silicon Valley, California, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Tech Innovations Inc.",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Gaming Expo 2022",
      address: "Exhibition Hall, Downtown Street, San Francisco, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "GameZone Entertainment",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Food Fest: Taste of the World",
      address: "City Park, Downtown Avenue, Chicago, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Foodie Delights LLC",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Fashion Show: Glamour & Style",
      address: "Fashion Arena, Rodeo Drive, Beverly Hills, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Style Creations Inc.",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Music Concert: Melodies Unplugged",
      address: "Amphitheater, Central Park, Newyork, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "Harmony Productions",
    },
    {
      imageUrl: event2,
      date: "Dec 28",
      eventName: "Fitness Expo: Health & Wellness",
      address: "Fitness Center, Main Street, Miami, USA",
      phone: "98765498465",
      hostImage: user1,
      hostName: "FitLife Enterprises",
    },
  ];

  return (
    <>
      <div className="event-main event-community-ban">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="service-main-head">
                <h1>Events</h1>
                <p>Here post your events, seminar, webinar, fetivals and more</p>
                <input
                  type="text"
                  className="service-search-container"
                  placeholder="Search event in your city.."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="event-list">
          {eventData.map((event, index) => (
            <div className="event-card" key={index}>
            <div className="top-content">
           <Link to='/events-inner'> <img src={event.imageUrl} alt="Event" className="event-image" /></Link>
              <span>{event.date}</span>
            </div>
              <div className="event-details">
                <Link to="/events-inner">
                <h3>{event.eventName}</h3>
                <p><FontAwesomeIcon icon={faLocationDot} /> {event.address}</p>
                <p><FontAwesomeIcon icon={faMobile} />  {event.phone}</p></Link>
                <div className="event-host">
                  <img src={event.hostImage} alt="Host" />
                  <div className="event-host-content">
                    <span>Hosted By</span>
                  <h6>{event.hostName}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))} 
        </div>
      </div>
      
      <MyBusiness />
    </>
  );
};

export default Events;
