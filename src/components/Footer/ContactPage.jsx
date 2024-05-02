import React from 'react';
import MyBusiness from '../Services/MyBusiness';
import { Link } from 'react-router-dom';


const ContactPage = () => {
  return (
    <>
    <section className="con-us-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12566588.694179254!2d-89.26650700000002!3d39.739318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C%20USA!5e0!3m2!1sen!2sin!4v1584780817502!5m2!1sen!2sin"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        style={{ width: '100%', height: '250px', border: '0' }} // Adjust the width, height, and any other styles as needed
      ></iframe>
    </section>


    <section className="con-us-loc">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tit-contact">
                            <h2>Contact Us</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="con-pg-addr">
                            <h4>Address:</h4>
                            <h5>United States:</h5>
                            <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                            <h5>India:</h5>
                            <p>28800 Orchard Lake Road, Suite 180 Farmington, Chennai, India</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="con-pg-info">
                            <h4>Contact info:</h4>
                            <ul>
                                <li className="ic-pho">Support: +01 25414 6354</li>
                                <li className="ic-pho">Enquiry: +01 9867 4326</li>
                                <li className="ic-eml">Email: support@company.com</li>
                                <li className="ic-eml">Email: support@company.com</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="con-pg-soc">
                            <h4>Website & Social media:</h4>
                            <ul>
                                <li className="ic-man-web"><Link to="#">www.website.com</Link></li>
                                <li className="ic-man-fb"><Link to="#">Facebook</Link></li>
                                <li className="ic-man-tw"><Link to="#">Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    <MyBusiness />
    </>
  );
};

export default ContactPage;
