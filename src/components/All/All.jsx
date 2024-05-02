import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/style.css";
import MyBuiness from "../Services/MyBusiness"
import user1 from "../Assets/user/1.webp"
import icon from "../Assets/icon/g2.webp"
import images from "../Assets/services/2.webp";
import service25 from "../Assets/services/25.webp";
import ban1 from "../Assets/listing-ban/1.webp";
import social1 from "../Assets/social/1.webp";
import social3 from "../Assets/social/3.webp";
import social2 from "../Assets/social/2.webp";
import social6 from "../Assets/social/6.webp";
import listing1 from "../Assets/listings/1.webp";
import listing2 from "../Assets/listings/2.webp";
import listing14 from "../Assets/listings/14.webp";
import {
  RiUserFill,
  RiSuitcase2Fill,
  RiGalleryFill,
  RiEyeFill,
  RiStarHalfFill,
  RiPriceTag2Fill,
  RiStarFill,
  RiShieldCheckFill,
  RiPhoneFill,
  RiMailFill,
  RiThumbUpFill,
  RiChat4Fill,
} from "react-icons/ri";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RiCloseFill } from "@remixicon/react";


const All = () => {
  const [isPopupOpen, setIsPopupOpen] = useState("-400px");
  const [formData, setFormData] = useState({
    priceRating: "3",
    reviewName: "Rn53 Themes",
    reviewMobile: "5522114422",
    reviewEmail: "rn53themes@gmail.com",
    reviewCity: "",
    reviewMessage: "",
  });
  

  
  const [showForm, setShowForm] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const handleClose = () => {
    setIsPopupOpen("-400px");
  };
  const togglePopup = () => {

  if(isPopupOpen === "20px"){
    setIsPopupOpen("-400px");
  }else{
    if(window.innerWidth <= 767){
      setIsPopupOpen("8px")
    }else{
      setIsPopupOpen("20px")
    }

  }
   
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform desired action
  
  };

  // Function to handle input changes
  const handleChange = (rating) => {
    setFormData({
      ...formData,
      priceRating: rating,
    });
  };

  return (
    <>
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
      <div className="v3-list-ql">
        <div className="container">
          <div className="row">
            <div className="v3-list-ql-inn">
              <ul>
                <li className="active">
                  <a href="#ld-abo">
                    <RiUserFill /> About
                  </a>
                </li>
                <li>
                  <a href="#ld-ser">
                    <RiSuitcase2Fill /> Services
                  </a>
                </li>
                <li>
                  <a href="#ld-gal">
                    <RiGalleryFill /> Gallery
                  </a>
                </li>
                <li>
                  <a href="#ld-off">
                    <RiPriceTag2Fill /> Offers
                  </a>
                </li>
                <li>
                  <a href="#ld-360">
                    <RiEyeFill /> 360 View
                  </a>
                </li>
                <li>
                  <a href="#ld-rev">
                    <RiStarHalfFill /> Write Review
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="list-bann">
        <img src={ban1} alt="" />
      </div>

      <section className="pg-list-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="pg-list-1-pro">
                <img src={images} alt="" />
                <span className="stat">
                  <RiShieldCheckFill />
                </span>
              </div>
              <div className="pg-list-1-left">
                <h3>Rolexo Villas in California</h3>
                <div className="list-rat-all">
                  <b>5.0</b>
                  <label className="rat">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </label>
                  <span>526 Reviews</span>
                </div>
                <p>
                  <b>Address:</b> 28800 Orchard Lake Road, Suite 180 Farmington
                  Hills, U.S.A.
                </p>
                <div className="list-number pag-p1-phone">
                  <ul>
                    <Link to="tel:87654567">
                      <li className="ic-php">
                        <RiPhoneFill />
                        87654567
                      </li>
                    </Link>
                    <Link to="mailto:thedirectoryfinder@gmail.com">
                      <li className="ic-php">
                        <RiMailFill />
                        thedirectoryfinder@gmail.com
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="list-ban-btn">
                <ul>
                  <li>
                    <Link to="tel:87654567" className="cta cta-call">
                      <RiPhoneFill /> Call now
                    </Link>
                  </li>
                  <li>
                    <span
                      className="cta cta-like ldelik Animatedheartfunc385"
                      data-for="1"
                      data-section="1"
                      data-num="325"
                      data-item="37"
                      data-id="385"
                    >
                      <b className="like-content385">
                        <RiThumbUpFill />1
                      </b>{" "}
                      Likes
                    </span>
                  </li>
                  <li>
                    <Link
                      to="https://wa.me/98765657486"
                      className="cta cta-rev"
                    >
                      WhatsApp
                    </Link>
                  </li>
                  <li>
                    <span
                      data-toggle="modal"
                      data-target="#quote"
                      className="pulse cta cta-get"
                      onClick={()=>togglePopup()}
                    >
                      <RiChat4Fill /> Get quote
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="list-pg-bg">
          <div className="container">
            <div className="row">
              <div className="com-padd">
                <div id="ld-abo" className="list-pg-lt list-page-com-p">
                  <div className="pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>About</span> Rolexo Villas in California
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp list-pg-inn-abo">
                      <div className="share-btn">
                        <ul>
                          <li>
                            <Link target="_blank" to="" className="so-fb">
                              <img
                                src={social3}
                                alt="Share on Facebook"
                                title="Share on Facebook"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" to="" className="so-tw">
                              <img
                                src={social2}
                                alt="Share On Twitter"
                                title="Share On Twitter"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" to="" className="so-wa">
                              <img
                                src={social6}
                                alt="Share on WhatsApp"
                                title="Share on WhatsApp"
                              />
                            </Link>
                          </li>
                          <li>
                            <Link target="_blank" to="" className="so-li">
                              <img
                                src={social1}
                                alt="Share on LinkedIn"
                                title="Share on LinkedIn"
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <p>
                        <strong>Rolexo Villas in California Lorem Ipsum</strong>
                        &nbsp;is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took Link galley of type and
                        scrambled it to make Link type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                  </div>

                  <div id="ld-ser" className="pglist-bg pglist-p-com">
            <div className="pglist-p-com-ti">
                <h3><span>Services</span> Offered</h3>
            </div>
            <div className="list-pg-inn-sp">
                <div className="row pg-list-ser">
                    <ul>
                        <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                                <img src={images} alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                                <h4>Villa plots</h4>
                            </div>
                        </li>
                        <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                                <img src={service25} alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                                <h4>Appartments</h4>
                            </div>
                        </li>
                        <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                                <img src={images} alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                                <h4>House constructions</h4>
                            </div>
                        </li>
                        <li className="col-md-3">
                            <div className="pg-list-ser-p1">
                                <img src={service25} alt="" />
                            </div>
                            <div className="pg-list-ser-p2">
                                <h4>Plots</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
                  <div id="ld-ser" className="pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Service</span> Areas
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="row pg-list-ser-area">
                        <ul>
                          <li>
                            <span>Sablon</span>
                          </li>
                          <li>
                            <span>Saco</span>
                          </li>
                          <li>
                            <span>Santa Cruz Gardens</span>
                          </li>
                          <li>
                            <span>Napa County</span>
                          </li>
                          <li>
                            <span>Los Angeles County</span>
                          </li>
                          <li>
                            <span>Fresno County</span>
                          </li>
                          <li>
                            <span>Monterey County</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div id="ld-gal" className="pglist-bg pglist-p-com">
      <div className="pglist-p-com-ti">
        <h3>
          <span>Photo</span> Gallery
        </h3>
      </div>
      <div className="list-pg-inn-sp">
        <Slider {...settings}>
          <div className="carousel-item">
            <img src={listing1} alt="" className="slider-images"/>
          </div>
          <div className="carousel-item">
            <img src={listing2} alt="" className="slider-images"/>
          </div>
          <div className="carousel-item">
            <img src={listing14} alt=""className="slider-images" />
          </div>
        </Slider>
      </div>
    </div>
                  <div
                    id="ld-off"
                    className="pglist-bg pglist-off-last pglist-p-com"
                  >
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Special</span> Offers
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="home-list-pop">
                       <div className="row">
                       <div className="col-md-3">
                          <img src={images} alt="" />
                        </div>

                        <div className="col-md-9 home-list-pop-desc inn-list-pop-desc list-room-deta">
                          <Link to="#!">
                            <h3>Villa offer 10%</h3>
                          </Link>
                          <p>
                            Special booking March offer It is Link long
                            established fact that Link reader will be distracted
                            by the readable content of Link page when looking at
                            its layout.
                          </p>
                          <span className="home-list-pop-rat list-rom-pric">
                            $5000
                          </span>
                          <div className="list-enqu-btn">
                            <ul>
                              <li>
                                <Link to="#">
                                  View more
                                </Link>
                              </li>
                              <li>
                                <Link
                                     onClick={()=>togglePopup()}
                                  data-toggle="modal"
                                  data-target="#quote"
                                >
                                  Send enquiry
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                       </div>
                      </div>
                    </div>
                  </div>
                  <div className="pglist-bg pglist-p-com" id="ld-360">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>360 </span> Degree View
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp list-360">
                      <iframe
                        title="360-degree view"
                        src="https://www.google.com/maps/embed?pb=!4v1615094507523!6m8!1m7!1sCAoSLEFGMVFpcFAxZ0hoalZZU25Wb2xDbVVROWdZNlYxWnc2UGU1YjVDckVjeEYz!2m2!1d37.779626!2d-122.5134699!3f256.26044!4f13.954989999999995!5f0.7820865974627469"
                        width="100%"
                        height="350"
                        style={{ border: "0" }}
                        allowFullScreen={true}
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                  <div className="pglist-bg pglist-p-com" id="ld-rew">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>Write Your</span> Reviews
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="list-pg-write-rev">
                        <form
                          className="col"
                          name="review_form"
                          id="review_form"
                          onSubmit={handleSubmit}
                        >
                          <p>
                            Writing great reviews may help others discover the
                            places that are just apt for them. Here are Link few
                            tips to write Link good review:
                          </p>
                          <div className="row">
                            <div>
                              <fieldset className="rating">
                                {[...Array(5)].map((_, index) => (
                                  <label
                                    key={index}
                                    title={
                                      index === 0
                                        ? "Very Poor"
                                        : index === 1
                                        ? "Poor"
                                        : index === 2
                                        ? "Average"
                                        : index === 3
                                        ? "Good"
                                        : "Excellent"
                                    }
                                  >
                                    <RiStarFill
                                      onClick={() => handleChange(index + 1)}
                                      color={
                                        formData.priceRating >= index + 1
                                          ? "#FFD700"
                                          : "grey"
                                      }
                                      style={{
                                        cursor: "pointer",
                                        fontSize: "25px",
                                      }}
                                    />
                                  </label>
                                ))}
                              </fieldset>
                              <div id="star-value">
                                {formData.priceRating} Star
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="review_name"
                                name="reviewName"
                                type="text"
                                placeholder="Rn53 Themes"
                                value={formData.reviewName}
                                onChange={handleChange}
                                readOnly
                              />
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="review_mobile"
                                name="reviewMobile"
                                type="text"
                                placeholder="Mobile number"
                                value={formData.reviewMobile}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input
                                id="review_email"
                                name="reviewEmail"
                                type="email"
                                placeholder="Email Id"
                                value={formData.reviewEmail}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="input-field col s6">
                              <input
                                id="review_city"
                                name="reviewCity"
                                placeholder="City"
                                type="text"
                                value={formData.reviewCity}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <textarea
                                id="review_message"
                                placeholder="Write review"
                                name="reviewMessage"
                                value={formData.reviewMessage}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s12">
                              <input
                                type="submit"
                                id="review_submit"
                                name="review_submit"
                                value="Submit Review"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="pglist-p3 pglist-bg pglist-p-com" id="ld-rev">
                    <div className="pglist-p-com-ti">
                      <h3>
                        <span>User</span> Reviews
                      </h3>
                    </div>
                    <div className="list-pg-inn-sp">
                      <div className="lp-ur-all">
                        {/* Left panel for different ratings */}
                        <div className="lp-ur-all-left">
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">Excellent</div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13"></div>
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">Good</div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-Good"></div>
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">
                              Satisfactory
                            </div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-satis"></div>
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">
                              Below Average
                            </div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-below"></div>
                            </div>
                          </div>
                          <div className="lp-ur-all-left-1">
                            <div className="lp-ur-all-left-11">Poor</div>
                            <div className="lp-ur-all-left-12">
                              <div className="lp-ur-all-left-13 lp-ur-all-left-poor"></div>
                            </div>
                          </div>
                        </div>
                        {/* Right panel for overall ratings */}
                        <div className="lp-ur-all-right">
                          <h5>Overall Ratings</h5>
                          <p>
                            <label className="rat-rating">
                              <RiStarFill />
                              <RiStarFill />
                              <RiStarFill />
                              <RiStarFill />
                              <RiStarFill />
                            </label>
                            <span>based on 1 reviews</span>
                          </p>
                        </div>
                      </div>
                      {/* Reviews section */}
                      <div className="lp-ur-all-rat">
                        <h5>Reviews</h5>
                        <ul>
                          <li>
                            <div className="lr-user-wr-img">
                              <img src={service25} alt="" />
                            </div>
                            <div className="lr-user-wr-con">
                              <h6>Rn53 Themes</h6>
                              <label className="rat">
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                                <RiStarFill />
                              </label>
                              <span className="lr-revi-date">07, Mar 2021</span>
                              <p>
                                verified_userRolexo Villas is well-known to all
                                as Link premier builder of villas and
                                apartments. Even though they have various
                                departments they stay united in giving the
                                customers the best service. I really had Link
                                good service right from on time delivery,
                                quality of work, perfection in work completion.
                                The relationship does not end in just in hand
                                over but they stand strong in all tuff times for
                                the commitment given. After 3+ years of handover
                                they addressed the compound wall cracks which
                                expanded and in Link week condition. They still
                                respond to any queries / faults on time and
                                track it to closure.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="list-det-rel-pre">
                    <h2>Related listings:</h2>
                    <ul>
                      <li>
                        <div className="land-pack-grid">
                          <div className="land-pack-grid-img">
                          <Link
                            
                            to="/all"
                            className="land-pack-grid-btn"
                          >    <img src={service25} alt="" />    </Link>
                          </div>
                          <div className="land-pack-grid-text">
                            <h4>Core real estates</h4>
                          </div>
                  
                        </div>
                      </li>
                      <li>
                        <div className="land-pack-grid">
                          <div className="land-pack-grid-img">
                          <Link
                         
                            to="#"
                            className="land-pack-grid-btn">   <img src={service25} alt="" /></Link>
                          </div>
                          <div className="land-pack-grid-text">
                            <h4>Museo Villas and Plots</h4>
                          </div>
                  
                        </div>
                      </li>
                      <li>
                        <div className="land-pack-grid">
                          <div className="land-pack-grid-img">
                          <Link
                           
                            to="#"
                            className="land-pack-grid-btn"
                          >     <img src={service25} alt="" /> </Link>
                          </div>
                          <div className="land-pack-grid-text">
                            <h4>ccc</h4>
                          </div>
                         
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="list-pg-rt">
                {/* LISTING DETAILS: LEFT PART 9 */}
                <div className="list-rhs-form pglist-bg pglist-p-com">
      <div className="quote-pop">
        <h3><span>Get</span> Quote</h3>
       

        <form method="post" name="detail_enquiry_form" id="detail_enquiry_form" onSubmit={handleSubmit}>
          <input type="hidden" className="form-control" name="listing_id" value="385" placeholder="" required="" />
          <input type="hidden" className="form-control" name="listing_user_id" value="325" placeholder="" required="" />
          <input type="hidden" className="form-control" name="enquiry_sender_id" value="37" placeholder="" required="" />
          <input type="hidden" className="form-control" name="enquiry_source" value="Website" placeholder="" required="" />
          <div className="form-group ic-icon">
          <RiUserFill />
            <input type="text" name="enquiry_name" defaultValue="Rn53 Themes" required="required" className="form-control" placeholder="Enter name*" />
          </div>
          <div className="form-group ic-icon">
          <RiMailFill />
            <input type="email" className="form-control" placeholder="Enter email*" required="required" defaultValue="rn53themes@gmail.com" name="enquiry_email" pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][Link-zA-Z]{2,}|[.][\w-]{2,}[.][Link-zA-Z]{2,})$" title="Invalid email address" />
          </div>
         
          <div className="form-group ic-icon">
            <RiPhoneFill />
            <input type="text" className="form-control" defaultValue="5522114422" name="enquiry_mobile" placeholder="Enter mobile number *" pattern="[7-9]{1}[0-9]{9}" title="Phone number starting with 7-9 and remaing 9 digit with 0-9" required="" />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="3" name="enquiry_message" placeholder="Enter your query or message"></textarea>
          </div>
          <input type="hidden" id="source" value="" />
          <button type="submit" id="detail_enquiry_submit" name="enquiry_submit" className="btn btn-primary">Submit</button>
        </form>
         {/* Popup for success message */}
         {showPopup && (
          <div className="popup-content">
            <p>Your Enquiry Is Submitted Successfully</p>
          </div>
        )}
      </div>
    </div>
                {/* END LISTING DETAILS: LEFT PART 9 */}
                {/* LISTING DETAILS: LEFT PART 7 */}
                <div className="lide-guar pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti pglist-p-com-ti-right">
                        <h3><span>Claim</span> Listing</h3>
                    </div>
                    <div className="list-pg-inn-sp">
                        <div className="list-pg-guar">
                            <ul>
                                <li>
                                    <div className="list-pg-guar-img">
                                        <img src={icon} alt="" />
                                    </div>
                                    <h4>Claim this business</h4>
                                   <Link to='/edit-business'> <span data-toggle="modal" data-target="#claim"  className="clim-edit">Suggest an edit</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* END LISTING DETAILS: LEFT PART 7 */}
                {/* LISTING DETAILS: COMPANY BADGE */}
                <div className="ld-rhs-pro pglist-bg pglist-p-com">
                    <div className="lis-comp-badg">
                        <div className="s1">
                            <div> <span className="by">Business profile</span>
                                <img className="proi" src={user1} alt="" />
                                <h4>Rn53 Themes net</h4>
                                <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A</p>
                                <ul>
                                    <li>
                                        <Link to="https://www.facebook.com/53themes" target="_blank">
                                            <img src={social3} alt="" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://twitter.com/53themes" target="_blank">
                                            <img src={social2} alt=""/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg" target="_blank">
                                            <img src={social1} alt=""/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" target="_blank">
                                            <img src={social6} alt=""/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="s2"> <Link  to="/view-business" className="use-fol">View profile</Link>
                            <Link target="_blank" to="company-profile.html#home_enquiry_form">Get in touch with us</Link>
                        </div>
                    </div>
                </div>
                {/* END LISTING DETAILS: COMPANY BADGE */}
                {/* LISTING DETAILS: LEFT PART 8 */}
                <div className="pglist-p3 pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti pglist-p-com-ti-right">
                        <h3><span>Our</span> Location</h3>
                    </div>
                    <div className="list-pg-inn-sp">
                        <div className="list-pg-map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.17087601054!2d-122.50781157529548!3d37.75767917396271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1615094456570!5m2!1sen!2sin" width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
                {/* END LISTING DETAILS: LEFT PART 8 */}
                {/* LISTING DETAILS: LEFT PART 9 */}
                <div className="pglist-p3 pglist-bg pglist-p-com">
                    <div className="pglist-p-com-ti pglist-p-com-ti-right">
                        <h3><span>Company</span> Info</h3>
                    </div>
                    <div className="list-pg-inn-sp">
                        <div className="list-pg-oth-info">
                            <ul>
                                <li>Available villas <span>12</span>
                                </li>
                                <li>Booking advance <span>$500</span>
                                </li>
                                <li>Contact number <span>986516876516</span>
                                </li>
                                <li>WhatsApp <span>65468764879</span>
                                </li>
                                <li>Email id <span>booking@rolex.com</span>
                                </li>
                                <li>Contact name <span>Bruce mecho</span>
                                </li>
                                <li>Website <span>www.relexovillas.com</span>
                                </li>
                                <li>Available plots <span>32</span>
                                </li>
                                <li>Next project location <span>Losangles</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* END LISTING DETAILS: LEFT PART 9 */}
                {/* LISTING DETAILS: LEFT PART 7 */}
                <div className="ld-rhs-pro pglist-bg pglist-p-com">
                    <div className="lis-pro-badg">
                        <div> <span className="rat" alt="User rating">4.2</span>
                            <span className="by">Created by</span>
                            <img src={user1} alt="" />
                            <h4>Loki</h4>
                            <p>Member since Feb 2021</p>
                        </div> <Link to="/gallary" className="fclick" >&nbsp;</Link>
                    </div>
                </div>
                {/* END LISTING DETAILS: LEFT PART 7 */}
                {/* LISTING DETAILS: LEFT PART 10 */}
                <div className="list-mig-like">
                    <div className="list-ri-peo-like">
                        <h3>Who all are like this</h3>
                        <ul>
                            <li>
                                <Link to="profile.html" target="_blank">
                                    <img src={user1} alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
              
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MyBuiness />
    </>
  );
};

export default All;
