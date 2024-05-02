import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyBusiness from "../Services/MyBusiness";

const NewListing = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    listing_id: '',
    listing_name: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleForm = () => {
    setFormVisible(!formVisible);
  };
  return (
    <>
      <section className="login-reg">
        <div className="container">
          <div className="row">
            <div className="login-main add-list">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Create new</span>
              <div className="log">
                <div className="login">
                  <h4>Add New Listing</h4>
                  <div className="row cre-dup">
                    <div className="col-md-6">
                      <Link to="/addnewlisting">
                        Create listing from scratch
                      </Link>
                    </div>
                    <div className="col-md-6">
                  
                      <span onClick={toggleForm} className="cre-dup-btn">
                        Create duplicate listing
                      </span>
                    </div>
                  </div>
                  {formVisible && (
          <form
          onSubmit={handleSubmit}
          className="cre-dup-form cre-dup-form-show"
          style={{ display: "block" }}
        >
          {/* Listing ID Select */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <select
                  name="listing_id"
                  value={formData.listing_id}
                  onChange={handleChange}
                  className="chosen-select form-control"
                  required
                >
                  <option value="" disabled selected>
                    Listing Name
                  </option>
                  <option value="LIST395">test</option>
                  <option value="LIST394">dfzhfhd</option>
                  <option value="LIST393">Iei</option>
                  <option value="LIST392">phoenix mall</option>
                  <option value="LIST391">Ocha Thai Cuisine</option>
                  <option value="LIST389">Core real estates</option>
                  <option value="LIST384">
                    Gill Automobiles and Services
                  </option>
                  <option value="LIST381">Titan Wedding Hall</option>
                  <option value="LIST380">Taj Hotels</option>
                  <option value="LIST378">ccc</option>
                  <option value="LIST375">Hello</option>
                  <option value="LIST268">Premium gardens</option>
                  <option value="LIST267">
                    Beach luxury villa gardens
                  </option>
                  <option value="LIST266">GOS Villas</option>
                  <option value="LIST247">Super bike showroom</option>
                  <option value="LIST238">Benz cars showroom</option>
                  <option value="LIST207">Smith Luxury Villas</option>
                  <option value="LIST164">
                    Ø§Ø¨Ù†Ù‰ Ù…ÙˆÙ‚Ø¹Ùƒ Ù…Ø¹Ù†Ø§
                  </option>
                  <option value="LIST163">
                    BizBookBusiness Directory Template
                  </option>
                  <option value="LIST130">
                    Tour and Travel html Template
                  </option>
                  <option value="LIST129">
                    Smart Digital Products
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* New Listing Name Input */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="listing_name"
                  value={formData.listing_name}
                  onChange={handleChange}
                  required
                  className="form-control"
                  placeholder="New Listing Name*"
                />
              </div>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            name="listing_submit"
            className="btn btn-primary"
          >
            Create Now
          </button>
        </form>
      )}
               
                  <div className="col-md-12">
                    <Link to="/dashboard" className="skip">
                      Go to user dashboard &gt;&gt;
                    </Link>
                  </div>
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

export default NewListing;
