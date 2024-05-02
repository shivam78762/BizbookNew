import React, { useEffect, useState } from "react";
import { RiShieldCheckFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const MyBusinessInner = () => {
  const [sessions, setsessions] = useState(false);
  useEffect(() => {
    const username = localStorage.getItem("userName");

    if (username) {
     
      setsessions(false);
    } else {
      setsessions(true);
    }
  }, []);

  const pricingPlans = [
    {
      name: "Free plan",
      description: "For getting started",
      price: "FREE",
      userType: "Single user",
      features: [
        "1 listings",
        "1 year(s) (duration)",
        "1 events",
        "1 blog posts",
        "User dashboard",
        "1 photos",
        "1 videos",
        "Create duplicate listings",
        "Social media share",
        "Admin tips",
      ],
      buttonText: "Get Start",
    },
    {
      name: "Standard plan",
      description: "Perfect for small teams",
      price: "$9",
      userType: "Startup business",
      features: [
        "5 listings",
        "1 year(s) (duration)",
        "5 events",
        "5 blog posts",
        "Get direct leads",
        "Email notification(leads)",
        "Verified listing",
        "Trusted listing",
        "Special offers",
        "User dashboard",
        "2 photos",
        "1 videos",
        "Create duplicate listings",
        "Social media share",
        "Review control",
        "Admin tips",
      ],
      buttonText: "Get Start",
    },
    {
      name: "Premium plan",
      description: "Best value for large teams",
      price: "$19",
      userType: "Medium business",
      features: [
        "25 listings",
        "5 year(s) (duration)",
        "25 events",
        "25 blog posts",
        "Get direct leads",
        "Email notification(leads)",
        "Verified listing",
        "Trusted listing",
        "Special offers",
        "User dashboard",
        "5 photos",
        "2 videos",
        "Create duplicate listings",
        "Social media share",
        "Review control",
        "Admin tips",
      ],
      buttonText: "Get Start",
    },
    {
      name: "Premium Plus plan",
      description: "Made for enterprises",
      price: "$20",
      userType: "Global business",
      features: [
        "Unlimited listings",
        "10 year(s) (duration)",
        "Unlimited events",
        "Unlimited blog posts",
        "Get direct leads",
        "Email notification(leads)",
        "Verified listing",
        "Trusted listing",
        "Special offers",
        "User dashboard",
        "10 photos",
        "1 videos",
        "Create duplicate listings",
        "Social media share",
        "Review control",
        "Admin tips",
      ],
      buttonText: "Get Start",
    },
  ];

  return (
    <section className="pri">
      <div className="container">
        <div className="row">
          <div className="tit">
            <h2>
              World's Top 100+ country most<span>Choose your pricing plan</span>
            </h2>
            <p>
              Cras nulla nulla, pulvinar sit amet nunc at, lacinia viverra
              lectus. Fusce imperdiet ullamcorper metus eu fringilla.
            </p>
          </div>
        
            <ul>
              {/* Map over the pricingPlans array and generate JSX for each plan */}
              {pricingPlans.map((plan, index) => (
                <li  key={index}>
                  <div className="pri-box">
                    <div className="c2">
                      <h4>{plan.name}</h4>
                      <p>{plan.description}</p>
                    </div>
                    {sessions ? (
                      // If user is logged in
                      <div>
                      <div className="c3">
                        <h2>
                          <span></span>
                          {plan.price}
                        </h2>
                        <p>{plan.userType}</p>
                        <Link to="/user-login/sign">Add listing</Link>
                      </div>
                      <div className="c4">
                        <ul>
                          {plan.features.map((feature, i) => (
                            <li className="mb-3" key={i}>
                              <RiShieldCheckFill />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="c5">
                        <Link to="/user-login/sign">{plan.buttonText}</Link>
                      </div>
                    </div>
                    ) : (
                      // If user is not logged in
                      <>
                       
                        <div className="c3">
                          <h2>
                            <span></span>
                            {plan.price}
                          </h2>
                          <p>{plan.userType}</p>
                          <Link to="/plan-change-form">Add listing</Link>
                        </div>
                        <div className="c4">
                          <ul>
                            {plan.features.map((feature, i) => (
                              <li key={i}>
                                <RiShieldCheckFill />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="c5">
                          <Link to="/plan-change-form">{plan.buttonText}</Link>
                        </div>
                      </>
                    
                    )}
                  </div>
                </li>
              ))}
            </ul>
          
        </div>
      </div>
    </section>
  );
};

export default MyBusinessInner;
