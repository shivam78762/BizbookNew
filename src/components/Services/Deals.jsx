import React, { useState } from "react";
import deals from "../Assets/coupon-bg.webp";
import service19 from "../Assets/services/19.webp";
import MyBusiness from "./MyBusiness";
import { RiArrowLeftLine } from "@remixicon/react";
import { Link } from "react-router-dom";
const Deals = () => {

  const coupons = [
    {
      id: 1,
      imageSrc: service19,
      title: "Reliance fresh",
      expires: "31, Mar 2021",
      code: "REL10%",
    },
    {
      id: 2,
      imageSrc: service19,
      title: "Trends",
      expires: "26, Mar 2021",
      code: "sa%",
    },
    {
      id: 3,
      imageSrc: service19,
      title: "Rn53 Themes Offers",
      expires: "25, Mar 2021",
      code: "REL10%",
    },
    {
      id: 4,
      imageSrc: service19,
      title: "Bizbook 50% Offer",
      expires: "23, Dec 2021",
      code: "BIZ50%",
    },
    {
      id: 5,
      imageSrc: service19,
      title: "Better Coupon",
      expires: "10, Jan 2021",
      code: "REL10%",
    },
    {
      id: 6,
      imageSrc: service19,
      title: "Awesome Coupon",
      expires: "07, Feb 2021",
      code: "REL10%",
    },
    {
      id: 7,
      imageSrc: service19,
      title: "New Coupon",
      expires: "01, Jan 2021",
      code: "REL10%",
    },
    {
      id: 8,
      imageSrc: service19,
      title: "New Coupon",
      expires: "01, Jan 2021",
      code: "REL10%",
    },
    {
      id: 9,
      imageSrc: service19,
      title: "New Coupon",
      expires: "01, Jan 2021",
      code: "REL10%",
    },
  ];
  const [showCoupons, setShowCoupons] = useState(
    Array.from({ length: coupons.length }, () => false)
  );
  const handleCouponClick = (index) => {
    setShowCoupons((prevState) =>
      prevState.map((show, i) => (i === index ? !show : show))
    );
  };

  const handleBackClick = (index) => {
    setShowCoupons((prevState) =>
      prevState.map((show, i) => (i === index ? !show : show))
    );
  };

  return (
    <>
      <div className="deals-images">
        <img src={deals} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <div className="service-main-head text-center">
              <h1>Coupon and deals</h1>
              <p>Here post your events, seminar, webinar, festivals and more</p>
              <input
                type="text"
                className="service-search-container"
                placeholder="Search event in your city.."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="coupon-container">
          {coupons.map((coupon, index) => (
           <div className={`coupon ${showCoupons[index] ? 'active' : ''}`} key={coupon.id}>
              {showCoupons[index] ? (
                <div class="coup-box act">
                  <div class="coup-box-2">
                    <h4>Congratulations!</h4>
                    <p>
                      Here the code for <b>{coupon.title}</b>: 
                    </p>
                    <i>{coupon.code}</i>
                    <span class="coup-back"onClick={() => handleBackClick(index)}><RiArrowLeftLine /> Back</span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="deals-image">
                    <img src={coupon.imageSrc} alt={coupon.title} />
                    <h3>{coupon.title}</h3>
                  </div>
                  <div className="deals-content">
                    <div className="deals-content-text">
                      <p>Expires</p>
                      <p>{coupon.expires}</p>
                    <Link to='/term'>  <p className="terms-para">Terms & Conditions Apply</p></Link>
                    </div>
                    <div>
                      <button
                        className="get-coup-btn"
                        onClick={() => handleCouponClick(index)}
                      >
                        Get Coupon
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <MyBusiness />
    </>
  );
};

export default Deals;
