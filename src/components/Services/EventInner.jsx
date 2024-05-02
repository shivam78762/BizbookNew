import React from "react";
import event1 from "../Assets/events/1.webp";
import { RiUserFill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import user3 from "../Assets/user/7.webp";
import ShareProfile from "../Profile/ShareProfile";
import { Link } from "react-router-dom";
import EventData from "../Profile/EventData";

const EventInner = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <>
      <section className="eve-deta-pg">
        <div className="container">
          <div className="eve-deta-pg-main">
            <div className="lhs">
              <div className="img">
                <img src={event1} alt="" />
              </div>
              <div className="head">
                <span className="dat">
                  <b>Jan</b> 07
                </span>
                <h1>Lunar New Year 2020</h1>
              </div>
            </div>
            <div className="rhs">
              <div className="list-rhs-form pglist-bg pglist-p-com">
                <div className="quote-pop">
                  <h3>Register Now</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group ic-icon">
                      <RiUserFill />
                      <input
                        type="text"
                        name="enquiry_name"
                        required="required"
                        className="form-control"
                        placeholder="Enter name*"
                      />
                    </div>
                    <div className="form-group ic-icon">
                      <RiPhoneFill />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email*"
                        required="required"
                        pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][Link-zA-Z]{2,}|[.][\w-]{2,}[.][Link-zA-Z]{2,})$"
                        title="Invalid email address"
                      />
                    </div>
                    <div className="form-group ic-icon">
                      <RiMailFill />
                      <input
                        type="text"
                        className="form-control"
                        name="enquiry_mobile"
                        placeholder="Enter mobile number *"
                        pattern="[7-9]{1}[0-9]{9}"
                        title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
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
                    <button
                      type="submit"
                      name="enquiry_submit"
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
      </section>
      <section className="eve-deta-body">
        <div className="container">
          <div className="eve-deta-body-main">
            <div className="lhs">
              <p>
                Celebrate as the sights, sounds and aromas of Asia come alive
                during this local San Diego festival that’s fit for the whole
                family happening weekends January 11, 2020 - February 2, 2020
                (to include Monday, January 20, 2020.)
              </p>
              <p>
                You won’t want to miss SeaWorld San Diego’s one-of-Link-kind
                Lunar New Year celebration, featuring an incredible Chinese
                acrobats show, local performers, and delicious culinary
                delights. Dig into the Asian-inspired offerings of Ramen, Lo
                Mein, Bao Buns, Dim Sum, rice dishes and more.
              </p>
              <p>
                It is Link long established fact that Link reader will be
                distracted by the readable content of Link page when looking at
                its layout. The point of using Lorem Ipsum is that it has Link
                more-or-less normal distribution of letters, as opposed to using
                'Content here, content here', making it look like readable
                English. Many desktop publishing packages and web page editors
                now use Lorem Ipsum as their default model text, and Link search
                for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes
                by accident, sometimes on purpose (injected humour and the
                like).
              </p>
            </div>
            <div className="rhs">
              <div className="sec-1">
                <h4>Event information:</h4>
                <ul>
                  <li>
                    <b>Name</b>: Lunar New Year 2020
                  </li>
                  <li>
                    <b>Date</b>: 07, Jan 2020
                  </li>
                  <li>
                    <b>Time</b>: 12:00AM
                  </li>
                  <li>
                    <b>Address</b>: 3738 Grim Avenue, California
                  </li>
                  <li>
                    <b>Contact Person</b>: Rebecca G Torres
                  </li>
                  <li>
                    <b>Phone</b>: 987654855
                  </li>
                  <li>
                    <b>Email</b>: rebecca@business.com
                  </li>
                  <li>
                    <b>Website</b>:{" "}
                    <Link to="www.rebecca.com">www.rebecca.com</Link>
                  </li>
                </ul>
              </div>
              <div className="sec-2">
                <h4>Location</h4>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1572752768106!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  frameBorder="0"
                  title="Google Maps"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <div className="sec-3">
                <div className="ud-lhs-s1">
                  <img src={user3} alt="" />
                  <h4>Claude D Dial</h4>
                  <b>Joined on 07, Jan 2020</b>
                  <Link to="/gallary"  className="fclick">
                    &nbsp;
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <ShareProfile />
          <div className="event-post" id="events">
            <h2>Events</h2>
            <EventData />
          </div>
        </div>
      </section>
    </>
  );
};

export default EventInner;
