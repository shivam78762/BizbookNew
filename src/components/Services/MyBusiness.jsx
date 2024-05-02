import React from 'react'
import idea from "../Assets/idea.webp";
import "./CSS/Services.css";
import { Link } from 'react-router-dom';

const MyBusiness = () => {
  return (
    <>
  
        <div className="full-bot-book">
        <div className="container" >
          <div className="row">
            <div className="bot-book">
            <div className="col-md-2 bb-img">
              <img src={idea} alt="" />
            </div>
            <div className="col-md-7 bb-text">
              <h4>#1 Business Directory and Service Provider</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
            <div className="col-md-3 bb-link">
              <Link to="/mybuiness">Add my business</Link>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyBusiness
