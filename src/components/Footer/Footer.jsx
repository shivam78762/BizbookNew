// Footer.js

import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
// import EnquiryForm from "./EnquiryForm";
import { RiCloseFill } from "@remixicon/react";
import social12 from "../Assets/social/1.webp";
import social1 from "../Assets/social/2.webp";
import social2 from "../Assets/social/3.webp";
import social4 from "../Assets/social/4.webp";
import social5 from "../Assets/social/5.webp";
import gstore from "../Assets/gstore.webp";
import astore from "../Assets/astore.webp";


const Footer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState("-400px");
  const [faqText, setFaqText] = useState('Default FAQ Text');

  const [formData, setFormData] = useState({
    enquiry_name: "",
    enquiry_email: "",
    enquiry_mobile: "",
    enquiry_category: "",
    enquiry_message: "",
  });

  const [showForm, setShowForm] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending data to a backend server
    console.log(formData); // For demonstration, logging form data to console
  };

  const handleClose = () => {
    setIsPopupOpen("-400px");
  };
  const togglePopup = () => {

  if(isPopupOpen === "20px"){
    setIsPopupOpen("-400px");
  }else{
    if(window.innerWidth <= 767){
      setIsPopupOpen("7px")
    }else{
      setIsPopupOpen("20px")
    }

  }
   
  };

  


  return (
    <>
      <div className="btn-ser-need-ani" onClick={togglePopup}>
        <FontAwesomeIcon
          icon={faPhone}
          style={{ position: "relative", right: "7px", fontSize: "12px" }}
        />
        Help & Support
      </div>
     

      <div
        className="ani-quo-form ani-quo-form-act"
        style={{ right: showForm ? isPopupOpen : "-400px" }}
      >
        <button onClick={handleClose} className="button-close-form">
          <RiCloseFill />
        </button>
        <div className="tit-footer">
          <h3>
            What service do you need? <span>BizBook will help you</span>
          </h3>
        </div>
        <div className="hom-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="enquiry_name"
                value={formData.enquiry_name}
                onChange={handleChange}
                required
                placeholder="Enter name*"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="enquiry_email"
                value={formData.enquiry_email}
                onChange={handleChange}
                required
                placeholder="Enter email*"
                className="form-control"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="enquiry_mobile"
                value={formData.enquiry_mobile}
                onChange={handleChange}
                required
                placeholder="Enter mobile number *"
                className="form-control"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digits with 0-9"
              />
            </div>
            <div className="form-group">
              <select
                name="enquiry_category"
                id="enquiry_category"
                value={formData.enquiry_category}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Category</option>
                <option value="19">Wedding halls</option>
                <option value="18">Hotel & Food</option>
                <option value="17">Pet shop</option>
                <option value="16">Digital Products</option>
                <option value="15">Spa and Facial</option>
                <option value="10">Real Estate</option>
                <option value="8">Sports</option>
                <option value="7">Education</option>
                <option value="6">Electricals</option>
                <option value="5">Automobiles</option>
                <option value="3">Transportation</option>
                <option value="2">Hospitals</option>
                <option value="1">Hotels And Resorts</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="enquiry_message"
                value={formData.enquiry_message}
                onChange={handleChange}
                placeholder="Enter your query or message"
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="button-submit">
              Submit Requirements
            </button>
          </form>
        </div>
      </div>

      <section className="wed-hom-footer">
        <div className="container">
          <div className="row foot-supp">
            <h2>
              <span>Free support:</span> +01 5426 24400
              &nbsp;&nbsp;|&nbsp;&nbsp;
               <span>Email:</span> rn53themes@gmail.com
            </h2>
          </div>
          <div className="row wed-foot-link">
            <div className="col-md-4 foot-tc-mar-t-o">
              <h4>Top Category</h4>
              <ul>
                <li>
                  <Link to="/realestate">Digital Products</Link>
                </li>
                <li>
                  <Link to="/realestate">Spa and Facial</Link>
                </li>
                <li>
                  <Link to="/realestate">Real Estate</Link>
                </li>
                <li>
                  <Link to="/realestate">Sports</Link>
                </li>
                <li>
                  <Link to="/realestate">Education</Link>
                </li>
                <li>
                  <Link to="/realestate">Electricals</Link>
                </li>
                <li>
                  <Link to="/realestate">Automobiles</Link>
                </li>
                <li>
                  <Link to="/realestate">Transportation</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Trending Category</h4>
              <ul>
                <li>
                  <Link to="/realestate">Hospitals</Link>
                </li>
                <li>
                  <Link to="/realestate">Hotels And Resorts</Link>
                </li>
                <li>
                  <Link to="/realestate">Automobiles</Link>
                </li>
                <li>
                  <Link to="/realestate">Hotels And Resorts</Link>
                </li>
                <li>
                  <Link to="/realestate">Real Estate</Link>
                </li>
                <li>
                  <Link to="/realestate">Sports</Link>
                </li>
                <li>
                  <Link to="/realestate">Education</Link>
                </li>
                <li>
                  <Link to="/realestate">Electricals</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>HELP & SUPPORT</h4>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                <Link to="/how/Frequently%20Asked%20Questions">FAQ</Link>
                </li>
                <li>
                  <Link to="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of use</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row wed-foot-link-pop">
            <div className="col-md-12">
              <h4>Popular Categories</h4>
              <ul>
                <li>
                  <Link to="/realestate">Wedding halls in London</Link>
                </li>
                <li>
                  <Link to="/realestate">Schools in Chennai</Link>
                </li>
                <li>
                  <Link to="/dashboard">Schools in NewYork</Link>
                </li>
                <li>
                  <Link to="/dashboard">Real estate in Illunois</Link>
                </li>
                <li>
                  <Link to="/dashboard">Real estate in Chennai1</Link>
                </li>
                <li>
                  <Link to="/dashboard">Enents in Tailand</Link>
                </li>
                <li>
                  <Link to="/dashboard">Flat for rent in Melborn</Link>
                </li>
                {/* Add more tags as needed */}
              </ul>
            </div>
          </div>
          <div className="row wed-foot-link-1">
            <div className="col-md-4">
              <h4>Get In Touch</h4>
              <p>
                Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills,
                U.S.A.
              </p>
              <p>
                Phone: <Link to="tel:+01 5426 24400">+01 5426 24400</Link>
              </p>
              <p>
                Email:{" "}
                <Link to="mailto:rn53themes@gmail.com">
                  rn53themes@gmail.com
                </Link>
              </p>
            </div>
            <div className="col-md-4 fot-app">
              <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
              <ul>
                <li>
                  <Link to="">
                    <img src={gstore} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <img src={astore} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 fot-soc">
              <h4>SOCIAL MEDIA</h4>
              <ul>
                <li>
                  <Link target="_blank" to="">
                    <img src={social12} alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://twitter.com/Google?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  >
                    <img src={social1} alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/Rn53themes-1956793534579530/"
                  >
                    <img src={social2} alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/Rn53themes-1956793534579530/"
                  >
                    <img src={social4} alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/Rn53themes-1956793534579530/"
                  >
                    <img src={social5} alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row foot-count">
            <ul>
              <li>
                <Link target="_blank" to="http://www.domainname.au">
                  Australia
                </Link>
              </li>
              <li>
                <Link target="_blank" to="http://www.domainname.uk">
                  UK
                </Link>
              </li>
              <li>
                <Link target="_blank" to="http://www.domainname.usa">
                  USA
                </Link>
              </li>
              <li>
                <Link target="_blank" to="http://www.domainname.in">
                  India
                </Link>
              </li>
              <li>
                <Link target="_blank" to="http://www.domainname.ge">
                  Germany
                </Link>
              </li>
              <li>
                <Link target="_blank" to="http://www.domainname.ch">
                  China
                </Link>
              </li>
              <li>
                <Link target="_blank" to="http://www.domainname.fr">
                  France
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="cr">
        <div className="container">
          <div className="row">
            <p>
              Copyright © 2017-2021{" "}
              <Link to="https://futuretouch.in/" target="_blank"></Link>.
              Proudly powered by
              <Link to="https://futuretouch.in/" target="_blank">
                {" "}
                Future IT Touch Pvt Lmt
              </Link>
            </p>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Footer;
