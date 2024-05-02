import React, { useState } from 'react';

const StatusComponent = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Define state variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [comment, setComment] = useState('');
 // Define state variables for form inputs
 const [selectedOptionsStep1, setSelectedOptionsStep1] = useState([]);
 const [selectedOptionsStep2, setSelectedOptionsStep2] = useState([]);
 const [selectedOptionsStep3, setSelectedOptionsStep3] = useState([]);
  const handleNextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };
  // Function to handle previous step
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    switch (currentStep) {
      case 1:
        setSelectedOptionsStep1(checked ? [value] : []);
        break;
      case 2:
        setSelectedOptionsStep2(checked ? [value] : []);
        break;
      case 3:
        setSelectedOptionsStep3(checked ? [value] : []);
        break;
      default:
        break;
    }
    setTimeout(handleNextStep, 500); // Move to next step after 2 seconds
  };


  return (
    <div className="col-md-5 offset-md-1" id="col-derecha">
      {/* Step indicator */}
      <div className="row" id="step-indicator-container">
        <div className="col-12 col-md-9 text-center">
          <p id="step-indicator">Step {currentStep} of 6</p>
        </div>
      </div>

      {currentStep === 1 && (
        <div id="step-solutions" data-order="0" className="">
          <h3>1. What are you looking for?</h3>
          <p>Select the option that applies</p>
          <div className="row align-items-center justify-content-start">
            <ul className="row opciones col-md-12">
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-solutions-option-1">
                  <input
                    type="checkbox"
                    name="soluciones"
                    id="step-solutions-option-1"
                    value="option1"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep1.includes("option1")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Complete kitchen refurbishment</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-solutions-option-2">
                  <input
                    type="checkbox"
                    name="soluciones"
                    id="step-solutions-option-2"
                    value="option2"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep1.includes("option2")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Kitchen units and worktop</span>
                </label>
              </li>
           
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-solutions-option-3">
                  <input
                    type="checkbox"
                    name="soluciones"
                    id="step-solutions-option-2"
                    value="option3"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep1.includes("option3")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Kitchen worktop only</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-solutions-option-4">
                  <input
                    type="checkbox"
                    name="soluciones"
                    id="step-solutions-option-4"
                    value="option4"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep1.includes("option4")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Bathrooms: Furniture, sinks, shower tray</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-solutions-option-5">
                  <input
                    type="checkbox"
                    name="soluciones"
                    id="step-solutions-option-5"
                    value="option5"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep1.includes("option5")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Complete bathroom refurbishment</span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div id="step-start-time" data-order="1" className="">
          <h3>2. When do you plan to start your project?</h3>
          <p>Select the option that applies</p>
          <div className="row">
            <ul className="opciones col-md-12">
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-start-time-option-1">
                  <input
                    type="checkbox"
                    name="start-time"
                    id="step-start-time-option-1"
                    value="option1"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep2.includes("option1")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">In less than three months</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-start-time-option-2">
                  <input
                    type="checkbox"
                    name="start-time"
                    id="step-start-time-option-2"
                    value="option2"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep2.includes("option2")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">In more than three months</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-start-time-option-3">
                  <input
                    type="checkbox"
                    name="start-time"
                    id="step-start-time-option-3"
                    value="option3"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep2.includes("option3")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Currently at planning stage. No scheduled date</span>
                </label>
              </li>
              {/* Add more checkbox options for step 2 */}
            </ul>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div id="step-budget" data-order="2" className="">
          <h3>3. What is your budget?</h3>
          <div className="row">
            <ul className="opciones col-md-12">
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-budget-option-1">
                  <input
                    type="checkbox"
                    name="budget"
                    id="step-budget-option-1"
                    value="option1"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep3.includes("option1")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Up to £7,500</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-budget-option-2">
                  <input
                    type="checkbox"
                    name="budget"
                    id="step-budget-option-2"
                    value="option2"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep3.includes("option2")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Between £7,500 and £15,000</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-budget-option-3">
                  <input
                    type="checkbox"
                    name="budget"
                    id="step-budget-option-3"
                    value="option3"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep3.includes("option3")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">Between £15,000 and £25,000</span>
                </label>
              </li>
              <li className="col-6 col-sm-4 col-md-12">
                <label htmlFor="step-budget-option-4">
                  <input
                    type="checkbox"
                    name="budget"
                    id="step-budget-option-4"
                    value="option4"
                    onChange={handleCheckboxChange}
                    checked={selectedOptionsStep3.includes("option4")}
                  />
                  <span className="checkmark"></span>
                  <span className="solution-name">More than £25,000</span>
                </label>
              </li>
             
            </ul>
          </div>
        </div>
      )}


      {currentStep === 4 && (
        <div id="step-form" data-order="3" className="">
          {/* Form */}
          <h3>4. Complete your details</h3>
          <div className="row">
            <div className="col-md-12 formulario">
              <form id="budget-form" onSubmit={handleSubmit} autoComplete="off" noValidate>
                {/* Form fields */}
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Name *" required />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Surname(s) *" required />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telephone  *" required />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" required />
                <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} placeholder="Post Code*" required />
                <p className="checkbox">
                  <label htmlFor="opt-in">
                    <input type="checkbox" checked={optIn} onChange={() => setOptIn(!optIn)} required />
                    <span className="checkmark"></span>
                    <span className="label">By sending the form I declare that I have read and accepted the data protection information. *</span>
                  </label>
                  <label>*Required field</label>
                </p>
                {/* Other form fields */}
              </form>
            </div>
          </div>
        </div>
      )}

      {currentStep === 5 && (
        <div id="step-comentario" data-order="4" className="">
          {/* Comment */}
          <h3>5. Tell us some details about your project for a more personalised attention</h3>
          <div className="row">
            <div className="col-md-12">
              <textarea value={comment} onChange={(e) => setComment(e.target.value)} cols="30" rows="10" placeholder=""></textarea>
            </div>
          </div>
        </div>
      )}

      {currentStep === 6 && (
        <div id="step-stores" data-order="5" className="">
          {/* Stores */}
          <h3>6. Select up to three showrooms to request a quote</h3>
          <div id="stores-list">
            {/* Showroom list */}
          </div>
        </div>
      )}

      {/* Buttons for navigation */}
      <div className="buttons visible">
        <div className="buttons-navigation">
          <div className="row">
            <div className="col-md-12">
              {currentStep > 1 && (
                <button className="btn-back" onClick={handlePreviousStep}>Back</button>
              )}
              <button id="btn-step-solutions" onClick={handleNextStep}>Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusComponent;
