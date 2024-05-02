import React from "react";
import blog1 from "../Assets/blogs/blog1.webp";
import MyBusiness from "./MyBusiness";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 2,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 3,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 4,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 5,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 6,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 7,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
    {
      id: 8,
      imageSrc: blog1,
      date: "10, Dec 2019",
      title: "Source and URL tracking",
    },
  ];

  return (
    <>
      <div className="blog-main blog-community-ban">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="service-main-head">
                <h1>Events</h1>
                <p>
                  Here post your events, seminar, webinar, fetivals and more
                </p>
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

      <section className="blog-body">
      <div className="container">
        <div className="us-ppg-com us-ppg-blog">
          <ul id="intseres" className="blog-list">
            {blogData.map((blog) => (
              <li key={blog.id}>
                <div className="pro-eve-box">
                  <div className="blog-image">
                  <Link to='/blog-inner'>  <img src={blog.imageSrc} alt="" /></Link>
                  </div>
                  <div className="blog-text">
                    <p>{blog.date}</p>
                    <h2>{blog.title}</h2>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <MyBusiness />
    </>
  );
};

export default Blog;
