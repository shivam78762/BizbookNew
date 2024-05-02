import { RiCheckFill } from "@remixicon/react";
import React, { useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const AddNewListing = () => {
  const [formData, setFormData] = useState({
    listing_name: "",
    listing_mobile: "",
    listing_email: "",
    listing_whatsapp: "",
    listing_website: "",
    listing_address: "",
    listing_lat: "",
    listing_lng: "",
    country_id: "",
    city_id: [],
    category_id: "",
    sub_category_id: [],
    service_locations: "",
    profile_image: null,
    cover_image: null,
  });
  const [activeStep, setActiveStep] = useState("step1");
  const [formFields, setFormFields] = useState([
    {
      serviceName: "",
      servicePrice: "",
      serviceDetail: "",
      serviceImage: "",
      serviceViewMore: "",
    },
  ]);
  const [infoFields, setInfoFields] = useState([{ question: "", answer: "" }]);
  const [serviceFields, setServiceFields] = useState([
    { serviceName: "", serviceImage: "" },
    { serviceName: "", serviceImage: "" },
  ]);

  const handleAddField = () => {
    setFormFields([
      ...formFields,
      {
        serviceName: "",
        servicePrice: "",
        serviceDetail: "",
        serviceImage: "",
        serviceViewMore: "",
      },
    ]);
    setInfoFields([...infoFields, { question: "", answer: "" }]);
    setServiceFields([...serviceFields, { serviceName: "", serviceImage: "" }]);
  };

  const handleRemoveField = (index) => {
    if (infoFields.length > 1) {
      const updatedFields = [...infoFields];
      updatedFields.pop();
      setInfoFields(updatedFields);

      if (serviceFields.length > 1) {
        const updatedFields = [...serviceFields];
        updatedFields.pop();
        setServiceFields(updatedFields);
      }
      if (updateFields.length > 1) {
        const updatedFields = [...formFields];
        updatedFields.pop();
        setFormFields(updatedFields);
      }
    }
  };
  const handleFieldChange = (type, index, fieldName, value) => {
    let updatedFields = [];

    switch (type) {
      case "info":
        updatedFields = [...infoFields];
        setInfoFields(updateFields(infoFields, index, fieldName, value));
        break;
      case "form":
        updatedFields = [...formFields];
        setFormFields(updateFields(formFields, index, fieldName, value));
        break;
      case "service":
        updatedFields = [...serviceFields];
        setServiceFields(updateFields(serviceFields, index, fieldName, value));
        break;
      default:
        console.error("Invalid type specified");
    }
  };
  const updateFields = (fields, index, fieldName, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldName] = value;
    return updatedFields;
  };

  const handleSubmit = (event) => {
    // Handle form submission here
    event.preventDefault();
    console.log(formFields);
    console.log(serviceFields);
    console.log(infoFields);
  };

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handlePrevious = () => {
    // Add functionality for navigating to the previous step
  };

  return (
    <section className="login-reg">
      <div className="container">
        <div className="row">
          <div className="add-list-ste">
            <div className="add-list-ste-inn">
              <ul>
                <li>
                  <Link
                    to="#"
                    className={activeStep === "step1" ? "act" : ""}
                    onClick={() => handleStepClick("step1")}
                  >
                    <span>Step 1</span>
                    <b>Basic Info</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className={activeStep === "step2" ? "act" : ""}
                    onClick={() => handleStepClick("step2")}
                  >
                    <span>Step 2</span>
                    <b>Services</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className={activeStep === "step3" ? "act" : ""}
                    onClick={() => handleStepClick("step3")}
                  >
                    <span>Step 3</span>
                    <b>Offers</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className={activeStep === "step4" ? "act" : ""}
                    onClick={() => handleStepClick("step4")}
                  >
                    <span>Step 4</span>
                    <b>Map</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className={activeStep === "step5" ? "act" : ""}
                    onClick={() => handleStepClick("step5")}
                  >
                    <span>Step 5</span>
                    <b>Other</b>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className={activeStep === "step6" ? "act" : ""}
                    onClick={() => handleStepClick("step6")}
                  >
                    <span>Step 6</span>
                    <b>Done</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="step-content"
          style={{ display: activeStep === "step1" ? "block" : "none" }}
        >
          <div className="row">
            <div className="login-main add-list">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Step 1</span>
              <div className="log">
                <div className="login">
                  <h4>Listing Details</h4>
                  <form
                    onSubmit={handleSubmit}
                    className="listing_form_1"
                    id="listing_form_1"
                    name="listing_form_1"
                    method="post"
                    encType="multipart/form-data"
                    noValidate
                  >
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            id="listing_name"
                            name="listing_name"
                            type="text"
                            required
                            className="form-control"
                            value={formData.listing_name}
                            placeholder="Listing Name*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_mobile"
                            className="form-control"
                            value={formData.listing_mobile}
                            placeholder="Phone number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_email"
                            className="form-control"
                            value={formData.listing_email}
                            placeholder="Email Id"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_whatsapp"
                            className="form-control"
                            value={formData.listing_whatsapp}
                            placeholder="Whatsapp Number (e.g. +919876543210)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_website"
                            className="form-control"
                            value={formData.listing_website}
                            placeholder="Website(www.rn53themes.net)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_address"
                            className="form-control"
                            value={formData.listing_address}
                            placeholder="Shop address"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_lat"
                            className="form-control"
                            value={formData.listing_lat}
                            placeholder="Latitude i.e 40.730610"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            onChange={handleChange}
                            type="text"
                            name="listing_lng"
                            className="form-control"
                            value={formData.listing_lng}
                            placeholder="Longitude i.e -73.935242"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            onChange={handleChange}
                            name="country_id"
                            required
                            id="country_id"
                            className="chosen-select form-control"
                          >
                            <option value="">Select your Country</option>
                            <option value="101">India</option>
                            <option value="230">United Kingdom</option>
                            <option value="231">United States</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            onChange={handleChange}
                            name="city_id[]"
                            id="city_id"
                            multiple
                            required
                            className="chosen-select form-control"
                          >
                            <option value="">Select your Cities</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            onChange={handleChange}
                            name="category_id"
                            id="category_id"
                            className="chosen-select form-control"
                          >
                            <option value="">Select Category</option>
                            <option value="19">Wedding halls</option>
                            <option value="18">Hotel &amp; Food</option>
                            <option value="17">Pet shop</option>
                            <option value="16">Digital Products</option>
                            <option value="15">Spa and Facial</option>
                            <option value="10">Real Estate</option>
                            <option value="8">Sports</option>
                            <option value="7">Education</option>
                            <option value="6">Electricals</option>
                            <option value="5">Automobiles</option>
                            <option value="3">Transportation</option>
                            <option value="2">Hospitals</option>
                            <option value="1">Hotels And Resorts</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <select
                            onChange={handleChange}
                            name="sub_category_id[]"
                            id="sub_category_id"
                            multiple
                            className="chosen-select form-control"
                          >
                            <option value="">Select Sub Category</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Choose profile image</label>
                          <input
                            onChange={handleFileChange}
                            type="file"
                            required
                            name="profile_image"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Choose cover image</label>
                          <input
                            onChange={handleFileChange}
                            type="file"
                            required
                            name="cover_image"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            onChange={handleChange}
                            className="form-control"
                            id="service_locations"
                            name="service_locations"
                            value={formData.service_locations}
                            placeholder="Enter your service locations... (i.e) London, Dallas, Wall Street, Opera House"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <Link
                    to="#"
                    className={activeStep === "step2" ? "act" : ""}
                    onClick={() => handleStepClick("step2")}
                  >
                    <button
                      type="submit"
                      name="listing_submit"
                      className="btn btn-primary"
                    >
                      Next
                    </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="step-content"
          style={{ display: activeStep === "step2" ? "block" : "none" }}
        >
          <div className="row">
            <div className="login-main add-list add-list-ser">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Step 2</span>
              <div className="log">
                <div className="login">
                  <h4>Services provide</h4>
                  <span
                    className="add-list-add-btn lis-ser-add-btn"
                    title="add new offer"
                    onClick={handleAddField}
                  >
                    +
                  </span>
                  <span
                    className="add-list-rem-btn lis-ser-rem-btn"
                    title="remove offer"
                    onClick={handleRemoveField}
                  >
                    -
                  </span>
                  <form
                    action="add-listing-step-3"
                    className="listing_form_2"
                    id="listing_form_2"
                    name="listing_form_2"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <input
                      id="listing_name"
                      name="listing_name"
                      type="hidden"
                      value="qwerqw"
                      required
                      className="validate"
                    />
                    {/* Other hidden fields */}
                    <ul>
                      {serviceFields.map((field, index) => (
                        <li key={index}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Service name:</label>
                                <input
                                  type="text"
                                  value={field.serviceName}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "serviceName",
                                      e.target.value
                                    )
                                  }
                                  name={`service_id[${index}]`}
                                  className="form-control"
                                  placeholder="Ex: Plumbile"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Choose profile image</label>
                                <input
                                  type="file"
                                  name={`service_image[${index}]`}
                                  className="form-control"
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "serviceImage",
                                      e.target.files[0]
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="row">
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step1" ? "act" : ""}
                    onClick={() => handleStepClick("step1")}
                  >
                          <button type="button" className="btn btn-primary">
                            Previous
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step3" ? "act" : ""}
                    onClick={() => handleStepClick("step3")}
                  >
                        <button
                          type="submit"
                          name="listing_submit"
                          className="btn btn-primary"
                        >
                          Next
                        </button>
                        </Link>
                      </div>
                      <div className="col-md-12">
                        <Link to="add-listing-step-3" className="skip">
                          Skip this &gt;&gt;
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="step-content"
          style={{ display: activeStep === "step3" ? "block" : "none" }}
        >
          <div className="row">
            <div className="login-main add-list">
              <div className="log-bor">&nbsp;</div>{" "}
              <span className="steps">Step 3</span>
              <div className="log">
                <div className="login add-list-off">
                  <h4>Special offers</h4>
                  <span
                    className="add-list-add-btn lis-add-off"
                    title="add new offer"
                    onClick={handleAddField}
                  >
                    +
                  </span>
                  <span
                    className="add-list-rem-btn lis-add-rem"
                    title="remove offer"
                    onClick={() => handleRemoveField(formFields.length - 1)}
                  >
                    -
                  </span>
                  <form
                    action="add-listing-step-4"
                    className="listing_form_3"
                    id="listing_form_3"
                    name="listing_form_3"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <ul>
                      {formFields.map((field, index) => (
                        <li key={index}>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  value={field.serviceName}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "serviceName",
                                      e.target.value
                                    )
                                  }
                                  name={`service_${index}_name`}
                                  className="form-control"
                                  placeholder="Offer name*"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  type="text"
                                  value={field.servicePrice}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "servicePrice",
                                      e.target.value
                                    )
                                  }
                                  onKeyPress={(event) =>
                                    event.charCode >= 48 && event.charCode <= 57
                                  }
                                  className="form-control"
                                  placeholder="Price"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  value={field.serviceDetail}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "serviceDetail",
                                      e.target.value
                                    )
                                  }
                                  name={`service_${index}_detail`}
                                  className="form-control"
                                  placeholder="Details about this offer"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <label>Choose offer image</label>
                                <input
                                  type="file"
                                  name={`service_${index}_image`}
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="text"
                                  value={field.serviceViewMore}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "serviceViewMore",
                                      e.target.value
                                    )
                                  }
                                  name={`service_${index}_view_more`}
                                  className="form-control"
                                  placeholder="View More Link"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="row">
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step2" ? "act" : ""}
                    onClick={() => handleStepClick("step2")}
                  >  <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handlePrevious}
                        >
                          Previous
                        </button>
                        </Link>
                      </div>
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step4" ? "act" : ""}
                    onClick={() => handleStepClick("step4")}
                  >
                        <button

                          type="submit"
                          name="listing_submit"
                          className="btn btn-primary"
                        >
                          Next
                        </button>
                        </Link>
                      </div>
                      <div className="col-md-12">
                        <Link to="add-listing-step-4" className="skip">
                          Skip this &gt;&gt;
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="step-content"
          style={{ display: activeStep === "step4" ? "block" : "none" }}
        >
          <div className="row">
            <div className="login-main add-list">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Step 4</span>
              <div className="log add-list-map">
                <div className="login add-list-map">
                  <form
                    action="add-listing-step-5"
                    className="listing_form_4"
                    id="listing_form_4"
                    name="listing_form_4"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <h4>Video Gallery</h4>

                    <ul>
                      <li>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                id="listing_video"
                                name="listing_video[]"
                                className="form-control"
                                placeholder="Paste Your Youtube iframe Code here"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <h4>Map and 360 view</h4>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            id="google_map"
                            name="google_map"
                            className="form-control"
                            placeholder="Shop location"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            id="360_view"
                            name="360_view"
                            className="form-control"
                            placeholder="360 view"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <h4 className="pt30">Photo gallery</h4>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="file"
                            name="gallery_image[]"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="file"
                            name="gallery_image[]"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* Repeat similar block for other file inputs */}
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step3" ? "act" : ""}
                    onClick={() => handleStepClick("step3")}
                  >
                          <button type="button" className="btn btn-primary">
                            Previous
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step5" ? "act" : ""}
                    onClick={() => handleStepClick("step5")}
                  >
                        <button
                          type="submit"
                          name="listing_submit"
                          className="btn btn-primary"
                        >
                          Next
                        </button>
                        </Link>
                      </div>
                      <div className="col-md-12">
                        <Link to="add-listing-step-5" className="skip">
                          Skip this &gt;&gt;
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="step-content"
          style={{ display: activeStep === "step5" ? "block" : "none" }}
        >
          <div className="row">
            <div className="login-main add-list">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Step 5</span>
              <div className="log">
                <div className="login add-lis-oth">
                  <h4>Other informations</h4>
                  <span
                    className="add-list-add-btn lis-add-oad"
                    title="add new offer"
                    onClick={handleAddField}
                  >
                    +
                  </span>
                  <span
                    className="add-list-rem-btn lis-add-ore"
                    title="remove offer"
                    onClick={handleRemoveField}
                  >
                    -
                  </span>
                  <form
                    action="listing_insert"
                    className="listing_form"
                    id="listing_form_5"
                    name="listing_form_5"
                    method="post"
                    encType="multipart/form-data"
                    onSubmit={handleSubmit}
                  >
                    <ul>
                      {infoFields.map((field, index) => (
                        <li key={index}>
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <input
                                  type="text"
                                  value={field.question}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "question",
                                      e.target.value
                                    )
                                  }
                                  name={`listing_info_question[${index}]`}
                                  className="form-control"
                                  placeholder="Experience"
                                />
                              </div>
                            </div>
                            <div className="col-md-2">
                              <div className="form-group">
                                <RiArrowRightLine className="add-icon-svg" />
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="form-group">
                                <input
                                  type="text"
                                  value={field.answer}
                                  onChange={(e) =>
                                    handleFieldChange(
                                      index,
                                      "answer",
                                      e.target.value
                                    )
                                  }
                                  name={`listing_info_answer[${index}]`}
                                  className="form-control"
                                  placeholder="20 years"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="row">
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step4" ? "act" : ""}
                    onClick={() => handleStepClick("step4")}
                  >
                          <button type="button" className="btn btn-primary">
                            Previous
                          </button>
                        </Link>
                      </div>
                      <div className="col-md-6">
                      <Link
                    to="#"
                    className={activeStep === "step6" ? "act" : ""}
                    onClick={() => handleStepClick("step6")}
                  >
                        <button
                          type="submit"
                          name="listing_submit"
                          className="btn btn-primary"
                        >
                          Finish
                        </button>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="step-content"
          style={{ display: activeStep === "step6" ? "block" : "none" }}
        >
          <div className="row">
            <div className="login-main add-list">
              <div className="log-bor">&nbsp;</div>
              <span className="steps">Step 6</span>
              <div className="log">
                <div className="login add-lis-done">
                  <h4>Success</h4>
                  <p>Your listing has been submitted successfully.</p>
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <RiCheckFill className="add-lis-done-succ" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <Link to="/dashboard" className="btn btn-primary">
                          Go to user dashboard
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link
                         
                          to="/all"
                          className="btn btn-primary"
                        >
                          Listing preview
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNewListing;
