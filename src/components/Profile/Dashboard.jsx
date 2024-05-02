import React from "react";
import Left from "./Left";
import user12 from "../Assets/user/1.webp";
import user13 from "../Assets/blogs/blog5.webp";
import { Link } from "react-router-dom";
import Right from "./right";
import MenuComponent from "./MenuComponent";

const Dashboard = () => {
  const blogsData = [
    {
      id: 1,
      title: "INCEPTION",
      image: user13,
      created: "12, Mar 2021",
      slug: "inception",
    },
    {
      id: 2,
      title: "AVENGERS INFINTY WAR",
      image: user13,
      created: "12, Mar 2021",
      slug: "avengers-infinty-war",
    },
    {
      id: 3,
      title: "AVENGERS END GAME",
      image: user13,
      created: "11, Mar 2021",
      slug: "avengers-end-game1",
    },
    {
      id: 4,
      title: "captainamerica the civil war",
      image: user13,
      created: "11, Mar 2021",
      slug: "captainamerica-the-civil-war",
    },
    {
      id: 5,
      title: "Samsung M31 Review",
      image: user13,
      created: "22, Feb 2021",
      slug: "samsung-m31-review-",
    },
    {
      id: 6,
      title: "wizard of oz",
      image: user13,
      created: "21, Feb 2021",
      slug: "wizard-of-oz1",
    },
    {
      id: 7,
      title: "wizard of oz",
      image: user13,
      created: "21, Feb 2021",
      slug: "wizard-of-oz",
    },
    {
      id: 8,
      title: "Titanic",
      image: user13,
      created: "21, Feb 2021",
      slug: "titanic",
    },
    {
      id: 9,
      title: "Digital Marketing",
      image: user13,
      created: "26, Mar 2020",
      slug: "digital-marketing",
    },
  ];

  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
            <div className="dashboard-left" >
              <Left />
            </div>
            <div className="dashboard-center">
              <div className="ud-cen">
                <span className="udb-inst">User Dashboard</span>
                <div className="cd-cen-intr">
                  <div className="cd-cen-intr-inn">
                    <h2>
                      Welcom back, <b>Rn53 Themes</b>
                    </h2>
                    <p>
                      Stay up to date reports in your listing, products, events
                      and blog reports here
                    </p>
                  </div>
                </div>
                <div className="ud-cen-s1">
                  <ul>
                    <li>
                      <div>
                        <b>21</b>
                        <h4>All Listings</h4>
                        <p>Total no of listings</p>
                        <Link to="/listing">&nbsp;</Link>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>13</b>
                        <h4>Enquiries</h4>
                        <p>Total no of enquiry</p>
                        <Link to="/newlisting">&nbsp;</Link>
                      </div>
                    </li>
                    <li>
                      <div>
                        <b>18</b>
                        <h4>Liked Listing</h4>
                        <p>Total no of Liked Listing</p>
                        <Link to="/liked">&nbsp;</Link>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="ud-cen-s3 ud-cen-s4">
                  <h2>Profile page</h2>
                  <Link to="/edit-profile" className="db-tit-btn">
                    Edit profile page
                  </Link>
                  <div className="ud-payment ud-pro-link">
                    <div className="pay-lhs">
                      <div className="lis-pro-badg">
                        <div>
                          <img src={user12} alt="" />
                          <h4>Rn53 Themes</h4>
                          <p>Member since 26, Mar 2021</p>
                        </div>
                        <Link
                          to="/gallary"
                          className="fclick"
                          
                        >
                          &nbsp;
                        </Link>
                      </div>
                    </div>
                    <div className="pay-rhs">
                      <ul>
                        <li>
                          <b>Name : </b> Rn53 Themes
                        </li>
                        <li>
                          <b>Followers : </b> <span>07</span>
                        </li>
                        <li>
                          <b>City : </b> Sydney
                        </li>
                        <li>
                          <b>Email : </b> rn53themes@gmail.com
                        </li>
                        <li className="pro">
                          <input type="text" value="" readOnly />
                        </li>
                        <li className="pre">
                          <Link to="/gallary">
                            View my profile page
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="ud-cen-s3 ud-cen-s4">
                  <h2>Business page</h2>
                  <Link to="/edit-buisness" className="db-tit-btn">
                    Edit business page
                  </Link>
                  <div className="ud-payment ud-pro-link bus-pg">
                    <div className="pay-lhs">
                      <div className="lis-pro-badg">
                        <div>
                          <img src={user12} alt="" />
                          <h4>Rn53 Themes net</h4>
                          <p>Member since 26, Mar 2021</p>
                        </div>
                        <Link
                          to="/view-business"
                          className="fclick"
                   
                        >
                          &nbsp;
                        </Link>
                      </div>
                    </div>
                    <div className="pay-rhs">
                      <ul>
                        <li>
                          <b>Name : </b> Rn53 Themes net
                        </li>
                        <li>
                          <b>Page views : </b> <span>19</span>
                        </li>
                        <li className="pro">
                          <input
                            type="text"
                            value=""
                            readOnly
                          />
                        </li>
                        <li className="pre">
                          <Link to="/view-business">
                            View business page
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="ud-cen-s3 ud-cen-s4">
                  <h2>Blog posts</h2>
                  <Link to="/blog" className="db-tit-btn">
                    Add new post
                  </Link>
                  <ul>
                    {blogsData.map((blog) => (
                      <li key={blog.id}>
                        <div className="db-eve">
                          <Link to='/blogs  '>
                            <img src={blog.image} alt={blog.title} />
                            <h5>{blog.title}</h5>
                            <span>Created: {blog.created}</span>
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
              <div className="dashboard-right">
                <Right />
              </div>
          </div>
        </div>
        <MenuComponent />
    </>
  );
};

export default Dashboard;
