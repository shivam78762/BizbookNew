import React, { useState } from "react";
import MyBusiness from "../Services/MyBusiness";

const BuyPoint = () => {
  // State to manage input value
  const [newPoints, setNewPoints] = useState("");

  // Handler function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission
    console.log("Form submitted");
  };

  // Handler function to handle input change
  const handleInputChange = (event) => {
    setNewPoints(event.target.value);
  };

  return (
    <>
      <section className="login-reg">
        <div className="container">
          <div className="row">
            <div className="login-main add-list  buy-poin">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Buy Points</span>
              <div className="log">
                <div className="login">
                  <h4>Hi, Rn53 Themes!!!</h4>
                  <form
                    name="buy_points_form"
                    id="buy_points_form"
                    onSubmit={handleSubmit}
                    encType="multipart/form-data"
                    noValidate
                  >
                    <input
                      id="all_cost"
                      name="all_cost"
                      type="hidden"
                      className="form-control"
                    />
                    <input
                      id="cost_per_point"
                      name="cost_per_point"
                      value="1"
                      type="hidden"
                      className="form-control"
                    />
                    <input
                      id="cost_symbol"
                      name="cost_symbol"
                      value="$"
                      type="hidden"
                      className="form-control"
                    />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <p className="notes">
                            Your Existing Points - 60 | Cost of 1 point = $1
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Please Enter Points:</label>
                          <input
                            id="new_points"
                            name="new_points"
                            autoComplete="off"
                            required
                            minLength="1"
                            type="text"
                            onChange={handleInputChange}
                            value={newPoints}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <h5>Payment Mode</h5>
                          <div className="radi-v4">
                            <input
                              type="radio"
                              id="paymentpaypal"
                              value="1"
                              name="payment"
                              defaultChecked
                            />
                            <label htmlFor="paymentpaypal">PayPal</label>
                          </div>
                          <div className="radi-v4">
                            <input
                              type="radio"
                              id="paymentstripe"
                              value="2"
                              name="payment"
                            />
                            <label htmlFor="paymentstripe">Stripe</label>
                          </div>
                          <div className="radi-v4">
                            <input
                              type="radio"
                              id="payment_razor_pay"
                              value="3"
                              name="payment"
                            />
                            <label htmlFor="payment_razor_pay">Razor Pay</label>
                          </div>
                          <div className="radi-v4">
                            <input
                              type="radio"
                              id="payment_paytm"
                              value="4"
                              name="payment"
                            />
                            <label htmlFor="payment_paytm">Paytm</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="buy_points_submit"
                      name="buy_points_submit"
                      className="btn btn-primary"
                    >
                      Pay Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MyBusiness />
    </>
  );
};

export default BuyPoint;
