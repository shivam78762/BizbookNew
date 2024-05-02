import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import facebook from "../Assets/icon/facebook.webp"
import whatsapp from "../Assets/icon/whatsapp.webp"
import twitter from "../Assets/icon/twitter.webp"
import linkedin from "../Assets/icon/linkedin.webp"
import admin from "../Assets/admin-log-bg.webp"
import MyBusiness from '../Services/MyBusiness';

const FeedBack = () => {
  const [formData, setFormData] = useState({
    feedback_name: '',
    feedback_email: '',
    feedback_mobile: '',
    feedback_message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    // Example: Submit formData to backend or perform other actions
  };

  return (
    <>
    <section className="feedback">
        <img className='fed' src={admin} alt="" />
      <div className="fed-box">
        <div className="lhs">
          <h3>Send your feedbacks</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name*"
                name="feedback_name"
                value={formData.feedback_name}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email*"
                name="feedback_email"
                value={formData.feedback_email}
                onChange={handleChange}
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][Link-zA-Z]{2,}|[.][\w-]{2,}[.][Link-zA-Z]{2,})$"
                title="Invalid email address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                className="form-control"
                id="feedback_mobile"
                name="feedback_mobile"
                placeholder="Enter mobile number *"
                value={formData.feedback_mobile}
                onChange={handleChange}
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digit with 0-9"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="feedback_message"
                id="feedback_message"
                value={formData.feedback_message}
                onChange={handleChange}
                required
                placeholder="Write your feedback here*"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit Feedback</button>
          </form>
        </div>
        <div className="rhs">
          <h2>Your feedback</h2>
          <p>Your feedback is most important for us. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
          <ul>
            <li>
              <Link to="#">
                <img src={facebook} alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={linkedin} alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={twitter} alt="" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <img src={whatsapp} alt="" />
              </Link>
            </li>
          </ul>
          <h4>Why send feedback?</h4>
          <p>Useful for feature update</p>
          <p>Helping for customer feedback</p>
        </div>
      </div>
    </section>
    <MyBusiness />
    </>
  );
};

export default FeedBack;
