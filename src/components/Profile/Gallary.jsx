import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../Assets/user/3.webp";
import social3 from "../Assets/social/3.webp";
import social2 from "../Assets/social/2.webp";
import social5 from "../Assets/social/5.webp";
import social1 from "../Assets/social/1.webp";
import service1 from "../Assets/services/1.webp";
import blog1 from "../Assets/blogs/blog5.webp";
import promo from "../Assets/promo.webp";
import MyBusiness from "../Services/MyBusiness";
import ShareProfile from "./ShareProfile";
import EventData from "./EventData";

const Gallary = () => {
  const [activeItem, setActiveItem] = useState("All");

  // Function to handle click event
  const handleClick = (itemName) => {
    setActiveItem(itemName);
  };
  const listingData = [
    {
      imgSrc: service1,
      title: "Sony Musics 2",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      imgSrc: service1,
      title: "Sony Music",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      imgSrc: service1,
      title: "IPM Business Software",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      imgSrc: service1,
      title: "Royal Real Estates",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      imgSrc: service1,
      title: "Appers Premium Independent Houses",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      imgSrc: service1,
      title: "Capital five star hotels",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
    {
      imgSrc: service1,
      title: "Hard Rocks Hotels",
      address: "No:2, 4th Avenue, Newyork, USA, Near to Airport",
    },
  ];

  const blogData = [
    {
      imgSrc: blog1,
      date: "07, Jan 2020",
      title: "12 Days Fitness Challenge",
    },
    {
      imgSrc: blog1,
      date: "07, Jan 2020",
      title: "Bike Racing Techniques",
    },
    {
      imgSrc: blog1,
      date: "07, Jan 2020",
      title: "Best Island In The World",
    },
    {
      imgSrc: blog1,
      date: "07, Jan 2020",
      title: "Online Marketing 2020",
    },
    {
      imgSrc: blog1,
      date: "07, Jan 2020",
      title: "Home Interior Design Trends",
    },
    {
      imgSrc: blog1,
      date: "07, Jan 2020",
      title: "Home Interior Design Trends",
    },
  ];


  return (
    <>
      <section className="us-pro-main">
        <div className="container">
          <div className="row">
            <div className="us-pro">
              <div className="us-pro-sec-1">
                <div className="us-pro-sec-1-lhs">
                  <img src={user} className="pro" alt="" />
                  <h1>Claude D Dial</h1>
                  <p>
                    <b>City:</b> &nbsp;&nbsp;<b>Join:</b> 07, Jan 2020
                  </p>
                  <button
                    className="userfollow follow-content44"
                    data-item="44"
                    data-num="37"
                  >
                    UN-FOLLOW
                  </button>
                  <ul className="lis-cou">
                    <li>
                      <b>9</b> Listings
                    </li>
                    <li>
                      <b>6</b> Blogs
                    </li>
                    <li>
                      <b>4</b> Events
                    </li>
                    <li>
                      <b>6</b> Following
                    </li>
                  </ul>
                  <ul className="pro-soci">
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/directoryfinder.s.7"
                      >
                        <img src={social3} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://twitter.com/DirectoryFinder"
                      >
                        <img src={social2} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.youtube.com/channel/UCEuC2HN5jb02knjP9o3Q8QA"
                      >
                        <img src={social5} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="www.rn53themes.net">
                        <img src={social1} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="us-pro-sec-1-rhs">
                  <img src={promo} className="pro-bg" alt="" />
                </div>
              </div>
              <div className="us-pro-sec-2">
                <div className="us-pro-nav">
                  <ul>
                    <li>
                      <span
                        className={activeItem === "All" ? "act" : ""}
                        onClick={() => handleClick("All")}
                      >
                        All
                      </span>
                    </li>
                    <li>
                      <a href="#listning">
                        <span
                          className={activeItem === "Listings" ? "act" : ""}
                          onClick={() => handleClick("Listings")}
                        >
                          Listings
                        </span>
                      </a>
                    </li>
                    <li>
                    <a href="#blogs">
                      <span
                        className={activeItem === "Blog posts" ? "act" : ""}
                        onClick={() => handleClick("Blog posts")}
                      >
                        Blog posts
                      </span>
                      </a>
                    </li>
                    <li>
                    <a href="#events">
                      <span
                        className={activeItem === "Events" ? "act" : ""}
                        onClick={() => handleClick("Events")}
                      >
                        Events
                      </span>
                      </a>
                    </li>
                    <li>
                    <a href="#followers">
                      <span
                        className={activeItem === "Followers" ? "act" : ""}
                        onClick={() => handleClick("Followers")}
                      >
                        Followers
                      </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="us-propg-main" id="listning">
                  <div className="us-pppg-com us-ppg-listings">
                    <h2>All listings</h2>
                    <ul>
                      {listingData.map((item, index) => (
                        <li key={index}>
                          <div className="pro-listing-box">
                            <div>
                              <img src={item.imgSrc} alt={item.title} />
                              <h2>{item.title}</h2>
                              <p>{item.address}</p>
                              <Link
                                to=""
                                className="fclick"
                              >
                                &nbsp;
                              </Link>
                            </div>
                            <div>
                             <Link to='/all'>
                             <span data-toggle="modal" data-target="#quote">
                                Get quote
                              </span></Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="event-post" id="blogs">
                    
                    <h2 style={{ paddingBottom: "15px" }}>Blog posts</h2>
                    <div className="blog-post">
                      {blogData.map((blog, index) => (
                        <div className="blog-box" key={index}>
                          <div className="pro-eve-box blog-post-box">
                            <img src={blog.imgSrc} alt={blog.title} />
                            <span>{blog.date}</span>

                            <h2>{blog.title}</h2>
                          </div>
                          <Link to="/blogs" className="fclick">
                            &nbsp;
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="event-post" id="events">
                      <h2>Events</h2>
                <EventData />
                </div>
                    <div className="us-pppg-com us-ppg-follow" id="followers">
                      <h2>Followers</h2>
                      <div className="ud-rhs-sec-2">
                        <ul>
                          <li>
                            <div className="pro-sm-box">
                              <img src={user} alt="" />
                              <h5>Rachel</h5>
                              <p>
                                City: <b>Arizona</b>
                              </p>
                              <Link to="#">&nbsp;</Link>
                            </div>
                          </li>
                          <li>
                            <div className="pro-sm-box">
                              <img src={user} alt="" />
                              <h5>Betty D Friedman</h5>
                              <p>
                                City: <b>N/A</b>
                              </p>
                              <Link to="#">&nbsp;</Link>
                            </div>
                          </li>
                          <li>
                            <div className="pro-sm-box">
                              <img src={user} alt="" />
                              <h5>Rn53 Themes</h5>
                              <p>
                                City: <b>Sydney</b>
                              </p>
                              <Link to="#">&nbsp;</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
               <ShareProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyBusiness />
    </>
  );
};

export default Gallary;
