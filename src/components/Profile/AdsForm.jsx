import React, { useState } from "react";
import { Link } from "react-router-dom";
const AdsForm = () => {
  // Define state variables for form inputs
  const [adPosition, setAdPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adLink, setAdLink] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
  };

  return (
    <section className="login-reg">
      <div className="container">
        <div className="row">
          <div className="login-main add-list">
            <div className="log-bor">&nbsp;</div>
            <span className="steps">Create new Ads</span>
            <div className="log">
              <div className="login">
                <h4>Submit your Ads</h4>
                <form
                  name="create_ads_form"
                  id="create_ads_form"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  noValidate
                >
                  <input
                    type="hidden"
                    value=""
                    name="ad_total_days"
                    id="ad_total_days"
                    className="validate"
                  />
                  <input
                    type="hidden"
                    value=""
                    name="ad_cost_per_day"
                    id="ad_cost_per_day"
                    className="validate"
                  />
                  <input
                    type="hidden"
                    value=""
                    name="ad_total_cost"
                    id="ad_total_cost"
                    className="validate"
                  />
                  <ul>
                    <li>
                      {/* FILED START */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group ca-sh-user">
                            <select
                              name="all_ads_price_id"
                              required
                              className="form-control"
                              id="adposi"
                              value={adPosition}
                              onChange={(e) => setAdPosition(e.target.value)}
                            >
                              <option value="">Choose Ads Position *</option>
                              <option mytag="70" value="1">
                                Home page Bottom (70$ /per day)
                              </option>
                              <option mytag="50" value="2">
                                All listing page Top (50$ /per day)
                              </option>
                              <option mytag="20" value="3">
                                All listing page Bottom (20$ /per day)
                              </option>
                              <option mytag="70" value="4">
                                All listing page Left (70$ /per day)
                              </option>
                              <option mytag="20" value="5">
                                Listing detail page Right (20$ /per day)
                              </option>
                              <option mytag="40" value="6">
                                Listing detail page Bottom (40$ /per day)
                              </option>
                            </select>
                            <Link
                              to="/ads-pricing  "
                              className="frmtip"
                           
                            >
                              Pricing details
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* FILED END */}
                      {/* FILED START */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="date"
                              autoComplete="off"
                              name="ad_start_date"
                              className="form-control error"
                              placeholder="Ad start date (MM/DD/YYYY)"
                              required
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                           
                          </div>
                        </div>
                      </div>
                      {/* FILED END */}
                      {/* FILED START */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="date"
                              autoComplete="off"
                              name="ad_end_date"
                              className="form-control"
                              placeholder="Ad end date (MM/DD/YYYY)"
                              required
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      {/* FILED END */}
                      {/* FILED START */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label>Choose Ad image</label>
                            <input
                              type="file"
                              name="ad_enquiry_photo"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* FILED END */}
                      {/* FILED START */}
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              id="ad_link"
                              name="ad_link"
                              className="form-control"
                              placeholder="Advertisement External link"
                              required
                              value={adLink}
                              onChange={(e) => setAdLink(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* FILED START */}
                  <div className="row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        name="create_ad_submit"
                        className="btn-form-ads"
                      >
                        Publish this Ad
                      </button>
                    </div>
                    <div className="col-md-12">
                      <Link to="/dashboard" className="skip">
                        Go to User Dashboard &gt;&gt;
                      </Link>
                    </div>
                  </div>
                  {/* FILED END */}
                </form>
                <div className="ud-notes">
                  <p>
                    <b>Notes:</b> Once you submit your Ad then Admin or support
                    team will contact you shortly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsForm;
