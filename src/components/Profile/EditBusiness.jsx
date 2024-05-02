import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditBusiness = () => {
  // State variables to manage form data
  const [formData, setFormData] = useState({
    enquiry_name: "",
    enquiry_email: "",
    enquiry_mobile: "",
    enquiry_message: "",
  });

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to handle form submission goes here
    // You can use formData state to access form data
  };

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
    <div className="md-main">
     <div className="modal-main">
     <div className="modal-dialog-main">
        <div className="modal-content-main">
          <div className="log-bor">&nbsp;</div>
          <span className="udb-inst">Claim now</span>
         <Link to='/all'>
         <button type="button" className="close" data-dismiss="modal">
            ×
          </button></Link>
          <div className="quote-pop-main">
            <h4>Claim this business</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="enquiry_name"
                  value={formData.enquiry_name}
                  onChange={handleChange}
                  required
                  placeholder="Enter name*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="enquiry_email"
                  value={formData.enquiry_email}
                  onChange={handleChange}
                  required
                  placeholder="Enter business email id*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="enquiry_mobile"
                  value={formData.enquiry_mobile}
                  onChange={handleChange}
                  required
                  placeholder="Enter mobile number*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <input
                  type="file"
                  name="enquiry_image"
                  required
                  placeholder="Identification Proof*"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="enquiry_message"
                  value={formData.enquiry_message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter your query and why claim this business"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="button btn-primary">
                Log In To Submit
              </button>
            </form>
            <div className="form-notes">
              <p>
                We send you the verification email to your provided email id.
                Once you've done the verification process, you can manage this
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
     </div>
    </>
  );
};

export default EditBusiness;
