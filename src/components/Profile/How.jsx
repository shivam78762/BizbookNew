import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyBusiness from "../Services/MyBusiness";
import { RiArrowDownSFill } from "react-icons/ri";
import { useParams } from 'react-router-dom';
const How = () => {
  const { faqText } = useParams();

  


  const [expandedIndex, setExpandedIndex] = useState(-1); // State to manage which item is expanded

  const howData = [
    {
      title: "How to create new listing?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
    },
    {
      title: "How to change free listing to premium listing?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      steps: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      title: "How can i change my user type?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      steps: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      title: "How to make Payment?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      steps: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      title: "How to create Ads?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      steps: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
    {
      title: "What is user type?",
      content: (
        <>
          <h5>General User</h5>
          <p>
            Taj Luxury Hotels & Resorts presents award winning luxury hotels and
            resorts in India, Indonesia
          </p>
          <h5>Service provider</h5>
          <p>
            Taj Luxury Hotels & Resorts presents award winning luxury hotels and
            resorts in India, Indonesia
          </p>
        </>
      ),
    },
    {
      title: "How to contact support team?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
    },
    {
      title: "How to create new listing?",
      content:
        "Taj Luxury Hotels & Resorts presents award winning luxury hotels and resorts in India, Indonesia",
      steps: [
        "Readable content of Link page when looking",
        "Readable content of Link page when looking",
      ],
    },
  ];


  // Function to handle click on h4 tag
  const handleH4Click = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index)); // Toggle expandedIndex
  };

  return (
    <>
      <section className="login-reg">
        <div className="container">
          <div className="row">
            <div className="login-main add-list posr">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst"> {faqText ? faqText : "How"}</span>
              <div className="log log-1">
                <div className="login">
                  <h4> {faqText ? faqText : "How"}</h4>
                  <p>
                    Here you can learn about this "Directory Finder Website" and
                    you can
                    <br />
                    find the solution for your doubts.
                  </p>
                  <div className="col-md-12">
                    <div className="how-to-coll">
                      <ul>
                        {howData.map((item, index) => (
                          <li key={index}>
                            <div
                              className="line-one"
                              onClick={() => handleH4Click(index)}
                            >
                              <h4>
                                {item.title}
                                <RiArrowDownSFill
                                  className={
                                    expandedIndex === index ? "rotate1" : ""
                                  }
                                />
                              </h4>
                            </div>
                            <div
                              className={`collapsible ${
                                expandedIndex === index ? "expanded" : ""
                              }`}
                            >
                              {typeof item.content === "string" ? (
                                <p>{item.content}</p>
                              ) : (
                                item.content
                              )}
                              {item.steps && (
                                <ol>
                                  {item.steps.map((step, stepIndex) => (
                                    <li key={stepIndex}>{step}</li>
                                  ))}
                                </ol>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <Link to="/dashboard" className="skip">
                      Go to User Dashboard &gt;&gt;
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

export default How;
