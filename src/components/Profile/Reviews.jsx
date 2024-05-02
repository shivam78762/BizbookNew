import React, { useState } from "react";
import { Link } from "react-router-dom";
import Left from "./Left";
import Right from "./right";

import { RiStarSFill } from '@remixicon/react';


const Reviews = () => {
  const [activeTab, setActiveTab] = useState("received");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [reviewData, setReviewData] = useState({
    received: [
      {
        id: 1,
        listingName: "Ocha Thai Cuisine",
        user: "Loki",
        email: "thedirectoryfinder@gmail.com",
        phone: "87654567",
        city: "Bangkok",
        ratings: 5,
        message: "Perfect service",
      },
      {
        id: 2,
        listingName: "Titan Wedding Hall",
        user: "Loki",
        email: "thedirectoryfinder@gmail.com",
        phone: "87654567",
        city: "New York",
        ratings: 5,
        message:
          "Best service provider in wedding hall field... I personally recommend Titan Wedding Hall.",
      },
      {
        id: 3,
        listingName: "Smith Luxury Villas",
        user: "Leland K Cotter",
        email: "cotter@business.com",
        phone: "9255886632",
        city: "Los Angeles",
        ratings: 3,
        message: "Good experience overall.",
      },
      // Add more received reviews here
    ],
    sent: [
      {
        id: 4,
        listingName: "Rolexo Villas in California",
        user: "Rn53 Themes",
        email: "rn53themes@gmail.com",
        phone: "5522114422",
        city: "Los Angeles",
        ratings: 5,
        message:
          "Rolexo Villas is well-known as a premier builder of villas and apartments...",
      },
      {
        id: 5,
        listingName: "The Royal Spa Center for Women",
        user: "Rn53 Themes",
        email: "rn53themes@gmail.com",
        phone: "5522114422",
        city: "Sydney",
        ratings: 4,
        message:
          "Perfect facial.. I strongly recommend. Writing great reviews may help others discover the places that are just apt for them...",
      },
      // Add more sent reviews here
    ],
  });
  
   
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    reviewId: null,
  });

  const handleDelete = (id) => {
    // Open confirmation dialog
    setDeleteConfirmation({
      isOpen: true,
      reviewId: id,
    });
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      // Proceed with deletion
      const updatedReceivedReviews = reviewData.received.filter(
        (item) => item.id !== deleteConfirmation.reviewId
      );
      const updatedSentReviews = reviewData.sent.filter(
        (item) => item.id !== deleteConfirmation.reviewId
      );
      setReviewData({
        received: updatedReceivedReviews,
        sent: updatedSentReviews,
      });
    }
    // Close confirmation dialog
    setDeleteConfirmation({
      isOpen: false,
      reviewId: null,
    });
  };
  
  return (
    <>
     {deleteConfirmation.isOpen && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this Review?</p>
          <button className="yes-btn" onClick={() => handleConfirmation(true)}>Yes</button>
          <button className="no-btn" onClick={() => handleConfirmation(false)}>No</button>
        </div>
      )}
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center">
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">Reviews</span>
              <div className="ud-cen-s2">
                <h2>All Listings - Received review details</h2>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "received" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("received")}
                      to="#received"
                    >
                      All Received Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        activeTab === "sent" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("sent")}
                      to="#sent"
                    >
                      All Sent Reviews
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    id="received"
                    className={`container tab-pane ${
                      activeTab === "received" ? "active" : "fade"
                    }`}
                  >
                    <br />
                    <table className="responsive-table bordered">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Listing Name</th>
                          <th>User</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Ratings</th>
                          <th>Message</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviewData.received.map((review, index) => (
                          <tr key={review.id}>
                            <td>{index + 1}</td>
                            <td>{review.listingName}</td>
                            <td>{review.user}</td>
                            <td>{review.email}</td>
                            <td>{review.phone}</td>
                            <td>
                              <label className="rat">
                                {[...Array(review.ratings)].map((_, i) => (
                                  <RiStarSFill 
                                  key={i}
                                  className="material-icons"
                                />
                                ))}
                              </label>
                            </td>
                            <td>{review.message}</td>
                            <td>
                            <Link
                            
                            className="db-list-edit"
                            onClick={() => handleDelete(review.id)}
                          >
                            Delete
                          </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div
                    id="sent"
                    className={`container tab-pane ${
                      activeTab === "sent" ? "active" : "fade"
                    }`}
                  >
                    <br />
                    <table className="responsive-table bordered">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Listing Name</th>
                          <th>User</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>City</th>
                          <th>Ratings</th>
                          <th>Message</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviewData.sent.map((review, index) => (
                          <tr key={review.id}>
                            <td>{index + 1}</td>
                            <td>{review.listingName}</td>
                            <td>{review.user}</td>
                            <td>{review.email}</td>
                            <td>{review.phone}</td>
                            <td>{review.city}</td>
                            <td>
                              <label className="rat">
                                {[...Array(review.ratings)].map((_, i) => (
                                
                                  <RiStarSFill 
                                    key={i}
                                    className="material-icons"
                                  />
                                ))}
                              </label>
                            </td>
                            <td>{review.message}</td>
                            <td>
                            <Link
                            
                            className="db-list-edit"
                            onClick={() => handleDelete(review.id)}
                          >
                            Delete
                          </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-right">
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
