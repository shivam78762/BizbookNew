import React, { useEffect, useState } from "react";
import "./Page.css";
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [activeTab, setActiveTab] = useState(2);
  
  const { sign } = useParams();


  useEffect(()=>{


   setActiveTab(sign ? 1 : 2 )
    

  },[sign])

  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");


    localStorage.setItem("userName","manshu")
  
    window.location.href = '/dashboard';
  };
  

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    console.log("Registration form submitted");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Forgot password form submitted");
  };

  return (
    <section className="login-reg">
      <div className="container">
        <div className="row">
          <div className="login-main-form">
            <div className="log-bor">&nbsp;</div>
            {activeTab === 2 && (
              <div className="log log-2">
                <div className="login login-new">
                  <h4>Create an account</h4>
                  <form onSubmit={handleRegistrationSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        autoComplete="off"
                        name="first_name"
                        id="first_name"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        autoComplete="off"
                        name="email_id"
                        id="email_id"
                        className="form-control"
                        placeholder="Email id*"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Password*"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        autoComplete="off"
                        name="mobile_number"
                        id="mobile_number"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="form-group ca-sh-user">
                      <select
                        name="user_type"
                        id="user_type"
                        className="form-control ca-check-plan"
                      >
                        <option value="">User type</option>
                        <option value="General">General user</option>
                        <option value="Service provider">
                          Service provider
                        </option>
                      </select>
                      <Link to="/user-type" className="frmtip">
                        User options
                      </Link>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Register Now
                    </button>
                  </form>
                </div>
              </div>
            )}
            {activeTab === 1 && (
              <div className="log log-1">
                <div className="login login-new">
                  <h4>Member Login</h4>
                  <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        autoComplete="off"
                        name="email_id"
                        id="email_id"
                        className="form-control"
                        placeholder="Enter email*"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter password*"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            )}
            {activeTab === 3 && (
              <div className="log log-3">
                <div className="login login-new">
                  <h4>Forgot password</h4>
                  <form onSubmit={handleForgotPasswordSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        autoComplete="off"
                        name="email_id"
                        id="email_id"
                        className="form-control"
                        placeholder="Enter email*"
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}

            <div className="log-bot">
              <ul>
                <li onClick={() => handleTabChange(1)}>
                  <span className="ll-1">Login?</span>
                </li>
                <li onClick={() => handleTabChange(2)}>
                  <span className="ll-2">Create an account?</span>
                </li>
                <li onClick={() => handleTabChange(3)}>
                  <span className="ll-3">Forgot password?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
