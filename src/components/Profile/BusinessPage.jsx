import React from "react";

import logo from "../Assets/user/logotwo.webp";
import image from "../Assets/all-list-bg.webp";
import { Link } from "react-router-dom";
import user from "../Assets/user/1.webp";
import icon1 from "../Assets/icon/svg/verified.webp";
import map from "../Assets/icon/line/map.webp";
import phone from "../Assets/icon/line/phone.webp";
import email from "../Assets/icon/line/email.webp";
import website from "../Assets/icon/line/website.webp";
import facebook from "../Assets/icon/line/facebook.webp";
import whatsapp from "../Assets/icon/line/whatsapp.webp";
import twitter from "../Assets/icon/line/twitter.webp";
import youtube from "../Assets/icon/line/youtube.webp";
import product1 from "../Assets/products/1.webp";
import event2 from "../Assets/events/2.webp";
import blog1 from "../Assets/blogs/blog2.webp";

const BusinessPage = () => {
  return (
    <div>
      <section className="abou-pg comp-pro-pg">
        <div className="com-pro-pg-head">
          <div className="container">
            <div className="row">
              <div className="comp-head">
                <Link to="/">
                
                  <img src={logo} alt="" />
                </Link>
                <ul>
                  <li>
                    <a href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#prod">Products</a>
                  </li>
                  <li>
                    <a href="#event">Events</a>
                  </li>
                  <li>
                    <a href="#blog">Blogs</a>
                  </li>
                  <li>
                    <a href="#home_enquiry_form" id="bus-pg-quot">
                      Get quote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="com-pro-pg-banner">
          <img src={image} alt="" />
        </div>
        <div className="com-pro-pg-bd">
          <div className="container">
            <div className="row">
              <div className="box-s1">
                <div className="pro-pg-logo">
                  <img src={user} alt="" />
                </div>
                <div className="pro-pg-bio">
                  <h1>
                    Rn53 Themes net{" "}
                    <i className="li-veri" title="Verified">
                      <img src={icon1} alt="" />
                    </i>
                  </h1>
                  <ul className="bio">
                    <li>
                      <span>
                        <img src={map} alt="" />
                        Address: 28800 Orchard Lake Road, Suite 180 Farmington
                        Hills, U.S.A
                      </span>
                    </li>
                    <li>
                      <Link to="Tel:8765768675">
                        <img src={phone} alt="" />
                        8765768675
                      </Link>
                    </li>
                    <li>
                      <Link to="mailto:rn53themes@gmail.com">
                        <img src={email} alt="" />
                        rn53themes@gmail.com
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" to="www.rn53themes.net">
                        <img src={website} alt="" />
                        www.rn53themes.net
                      </Link>
                    </li>
                    <li>
                      <img src={website} alt="" />
                      Tax no: TX6543 HYG76
                    </li>
                  </ul>
                  <ul className="soc">
                    <li>
                      <Link
                        to="https://www.facebook.com/53themes"
                        target="_blank"
                      >
                        <img src={facebook} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/53themes" target="_blank">
                        <img src={whatsapp} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link to="98769876987" target="_blank">
                        <img src={twitter} alt="" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg"
                        target="_blank"
                      >
                        <img src={youtube} alt="" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="pro-pg-cts">
                  <a href="#home_enquiry_form" className="cta1">
                    Get quote
                  </a>
                  <Link to="Tel:8765768675" className="cta2">
                    Call now
                  </Link>
                  <Link
                    target="_blank"
                    to="https://wa.me/98769876987"
                    className="cta3"
                  >
                    WhatsApp
                  </Link>
                </div>
              </div>
              <div className="box-s2">
                <div className="lhs">
                  <div className="comp-abo" id="about">
                    <h2>About company</h2>
                    <p>
                      <h1>
                        Feel the professionalRn53 ThemesEasy to build your web
                        presence
                      </h1>
                      Official website of Rn53 Themes, Affiliated to&nbsp;
                      <Link
                        to=""
                        
                      >
                        Themeforest
                      </Link>
                      . We provide the best html and&nbsp;
                      <Link to="">
                        fully functional website
                      </Link>
                      &nbsp;templates. Our services are template customization,
                      custom template design, directory php template, HTML to
                      PHP conversions and more. We are one of the best web
                      development team we always interesting to develop
                      beautiful websites.
                    </p>
                    <ul>
                      <li>
                        <h3>
                          <strong>Classified Templates</strong>
                        </h3>
                        <p>
                          Kick start your online presence with Bizbook
                          Classified Templates. Template includes Classified
                          ads, listing, products, events, blogs &amp; community.
                          Try it today!
                        </p>
                      </li>
                      <li>
                        <h3>
                          <strong>HTML Templates</strong>
                        </h3>
                        <p>
                          We design most beautiful website templates with the
                          latest trend and user-friendly websites.
                        </p>
                      </li>
                      <li>
                        <h3>
                          <strong>Custom websites</strong>
                        </h3>
                        <p>
                          We are the leading custom website developers and
                          custom HTML websites are usually the most important
                          thing about an online presence.
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <h3>
                          <strong>Template customization</strong>
                        </h3>
                        <p>
                          We offer professional website template customization
                          for the templates we built and released here at
                          styleshout. Choose Link template and submit to us the
                          customization requirements and we will work on the
                          design until the desired result is achieved.
                        </p>
                      </li>
                      <li>
                        <h3>
                          <strong>Available for freelance</strong>
                        </h3>
                        <p>
                          Finibus Bonorum et Malorum" (The Extremes of Good and
                          Evil) by Cicero, written in 45 BC.
                        </p>
                      </li>
                      <li>
                        <h3>
                          <strong>Custom Directory Template</strong>
                        </h3>
                        <p>
                          We have to directory templates "The Directory" and
                          "Bizbook Directory Template", If you are interested in
                          our directory template and need any template related
                          customization or addition work we will help you to
                          integrate this.
                        </p>
                      </li>
                      <li>
                        <h3>
                          <strong>Website re-design</strong>
                        </h3>
                        <p>
                          Are you looking for Link website redesign? Our expert
                          web designers can build attractive and wonderful
                          websites for sustainable brands.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="comp-pro" id="prod">
                    <h2>Products</h2>
                    <div className="all-pro-box">
                      <div className="all-pro-img">
                        <img src={product1} alt="" />
                      </div>
                      <div className="all-pro-aut">
                        <div className="auth">
                          <Link
                            
                            to="/products-inner"
                            className="fclick"
                          ></Link>
                        </div>
                      </div>
                      <div className="all-pro-txt">
                        <h4>8 x 4 Metal Trailer - Exc Tyres</h4>
                        <span className="pri">
                          <b className="pro-off">$400</b> 20% off
                        </span>
                        <div className="links">
                          <Link
                         
                            to="/products-inner"
                          >
                            Buy now
                          </Link>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                  <div className="comp-pro" id="event">
                    <h2>Events</h2>
                    <Link
                       
                       to="/events-inner"
                       className="land-pack-grid-btn"
                     >
                    <div className="land-pack-grid">
                      <div className="land-pack-grid-img">
                        <img src={event2} alt="" />
                      </div>
                      <div className="land-pack-grid-text">
                        <h4>Digital Marketing Seminar 2020</h4>
                      </div>
                    </div>
                     </Link>
                  </div>
                 
                  <div className="comp-pro" id="blog">
                    <h2>Blogs</h2>
                  <Link
                        
                        to="/blog-inner"
                        className="land-pack-grid-btn"
                      >
                    <div className="land-pack-grid">
                      <div className="land-pack-grid-img">
                        <img src={blog1} alt="" />
                      </div>
                      <div className="land-pack-grid-text">
                        <h4>Digital Marketing</h4>
                      </div>
                  </div>
                     </Link>
                    </div>
                </div>
                <div className="rhs">
                  <div className="cpro-form">
                    <div className="box templ-rhs-eve">
                      <div className="hot-page2-hom-pre-head">
                        <h4>Send enquiry</h4>
                      </div>
                      <div className="templ-rhs-form">
                        <form
                          name="home_enquiry_form"
                          id="home_enquiry_form"
                          method="post"
                          encType="multipart/form-data"
                        >
                          <input
                            type="hidden"
                            className="form-control"
                            name="listing_id"
                            value="0"
                            placeholder=""
                            required=""
                          />
                          <input
                            type="hidden"
                            className="form-control"
                            name="listing_user_id"
                            value="0"
                            placeholder=""
                            required=""
                          />
                          <input
                            type="hidden"
                            className="form-control"
                            name="enquiry_sender_id"
                            value=""
                            placeholder=""
                            required=""
                          />
                          <input
                            type="hidden"
                            className="form-control"
                            name="enquiry_source"
                            value="Website"
                            placeholder=""
                            required=""
                          />
                          <div className="form-group ic-user">
                            <input
                              type="text"
                              name="enquiry_name"
                              value=""
                              required="required"
                              className="form-control"
                              placeholder="Enter name*"
                              id="ic-user"
                            />
                          </div>
                          <div className="form-group ic-eml">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Enter email*"
                              required="required"
                              value=""
                              name="enquiry_email"
                              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][Link-zA-Z]{2,}|[.][\w-]{2,}[.][Link-zA-Z]{2,})$"
                              title="Invalid email address"
                            />
                          </div>
                          <div className="form-group ic-pho">
                            <input
                              type="text"
                              className="form-control"
                              value=""
                              name="enquiry_mobile"
                              placeholder="Enter mobile number *"
                              pattern="[7-9]{1}[0-9]{9}"
                              title="Phone number starting with 7-9 and remaining 9 digits with 0-9"
                              required=""
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="3"
                              name="enquiry_message"
                              placeholder="Enter your query or message"
                            ></textarea>
                          </div>
                          <input type="hidden" id="source" value="" />
                          <button
                            type="submit"
                            id="home_enquiry_submit"
                            name="home_enquiry_submit"
                            className="btn btn-primary"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
