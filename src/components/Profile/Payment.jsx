import React, { useState } from "react";
import usr from "../Assets/user/1.webp";
import Left from "./Left";
import Right from "./right";
import MenuComponent from "./MenuComponent";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Payment = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState("paymentpaypal");
  const paymentOptions = [
   
    {
      id: "payment_razor_pay",
      name: "Razor Pay payment gateway",
      note: [
        "You can pay with your credit card if you don’t have Link Razor Pay account.",
        "What is Razor Pay?",
      ],
      formAction: "",
    },
   
  ];
  const handlePaymentOptionChange = (optionId) => {
    setSelectedPaymentOption(optionId);
  };

  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center">
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">Payment</span>
              <div className="ud-cen-s2">
                <h2>Payment Status</h2>
                <Link to="/plan-change-form" className="db-tit-btn">
                  Change My Plan
                </Link>
                <div className="ud-payment">
                  <div className="pay-lhs">
                    <img src={usr} alt="" />
                  </div>
                  <div className="pay-rhs">
                    <ul>
                      <li>
                        <b>Name : </b> Rn53 Themes
                      </li>
                      <li>
                        <b>Plan name : </b> Premium Plus
                      </li>
                      <li>
                        <b>Start date : </b> 26, Mar 2021
                      </li>
                      <li>
                        <b>Expiry date : </b> 26, Mar 2031
                      </li>
                      <li>
                        <b>Duration : </b> 10 year
                      </li>
                      <li>
                        <b>Remaining days : </b> 3638
                      </li>
                      <li>
                        <span className="ud-stat-pay-btn">
                          Checkout amount: $20
                        </span>
                      </li>
                      <li>
                        <span className="ud-stat-pay-btn">
                          Payment Status: PENDING
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ud-pay-op">
                  <h4>Select your payment option</h4>
                  <ul>
                    {paymentOptions.map((option) => (
                      <li key={option.id}>
                        <div className="pay-full">
                          <div className="rbbox">
                            <input
                              type="radio"
                              id={option.id}
                              name="payment"
                              checked={selectedPaymentOption === option.id}
                              onChange={() =>
                                handlePaymentOptionChange(option.id)
                              }
                            />
                            <label htmlFor={option.id}>{option.name}</label>
                            <div
                              className="pay-note"
                              style={{
                                display:
                                  selectedPaymentOption === option.id
                                    ? "block"
                                    : "none",
                                    
                              }}
                            >
                              {option.note.map((note, index) => (
                                <span key={index}>
                                  <RiStarFill /> {note}
                                </span>
                              ))}
                              <form
                                name={`${option.id}_form`}
                                id={`${option.id}_form`}
                                method="post"
                                action={option.formAction}
                              >
                                <h4>Billing details</h4>
                                <ul>
                                  <li
                                    style={{
                                      display:
                                        selectedPaymentOption === option.id
                                          ? "block"
                                          : "none",
                                    }}
                                  >
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            readOnly
                                            className="form-control"
                                            value="Rn53 Themes"
                                            placeholder="Full name *"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="user_country"
                                            className="form-control"
                                            value="Australia"
                                            placeholder="Country"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="user_state"
                                            className="form-control"
                                            value="Sydney"
                                            placeholder="State"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="user_city"
                                            className="form-control"
                                            value="Sydney"
                                            placeholder="City *"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="user_address"
                                            className="form-control"
                                            value="No 27, Pointing street, Sydney, Australia"
                                            placeholder="Village & Street name"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            name="user_zip_code"
                                            onKeyPress={(e) => {
                                              if (isNaN(Number(e.key))) {
                                                e.preventDefault();
                                              }
                                            }}
                                            className="form-control"
                                            value="65448811"
                                            placeholder="Postcode/ZIP"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="user_contact_name"
                                            value="John smth"
                                            placeholder="Contact person *"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="user_contact_mobile"
                                            onKeyPress={(e) => {
                                              if (isNaN(Number(e.key))) {
                                                e.preventDefault();
                                              }
                                            }}
                                            value="2211446688"
                                            placeholder="Contact number"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                          <input
                                            type="text"
                                            className="form-control"
                                            name="user_contact_email"
                                            value="rn53hemes@gmail.com"
                                            placeholder="Contact email"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                                <button
                                  type="submit"
                                  name={`${option.id}_form_submit`}
                                  className="db-pro-bot-btn"
                                  style={{
                                    display:
                                      selectedPaymentOption === option.id
                                        ? "block"
                                        : "none",
                                  }}
                                >
                                  Start Payment
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            <Right />
          </div>
        </div>
        <MenuComponent />
      </div>
    </>
  );
};

export default Payment;
