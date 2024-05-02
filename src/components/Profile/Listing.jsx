import React, { useState } from "react";
import Left from "./Left";
import Right from "./right";
import listing1 from "../Assets/listings/7.webp"
import { Link } from "react-router-dom";


const Listing = () => {
  const [listingData, setListingData] = useState( [
    {
      id: 1,
      name: "test",
      imageSrc: listing1,
      date: "28, Mar 2021",
      rating: 0,
      views: 1,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 2,
      name: "dfzhfhd",
      imageSrc: listing1,
      date: "25, Mar 2021",
      rating: 0,
      views: 7,
      status: "Inactive",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 3,
      name: "Iei",
      imageSrc: listing1,
      date: "25, Mar 2021",
      rating: 0,
      views: 15,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 4,
      name: "Phoenix Mall",
      imageSrc:
      listing1,
      date: "13, Mar 2021",
      rating: 0,
      views: 10,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 5,
      name: "Ocha Thai Cuisine",
      imageSrc: listing1,
      date: "12, Mar 2021",
      rating: 5,
      views: 9,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 6,
      name: "Core Real Estates",
      imageSrc:listing1,listing1,
      date: "11, Mar 2021",
      rating: 0,
      views: 18,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 7,
      name: "Gill Automobiles and Services",
      imageSrc:listing1,
      date: "20, Feb 2021",
      rating: 0,
      views: 30,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 8,
      name: "Titan Wedding Hall",
      imageSrc: listing1,
      date: "07, Feb 2021",
      rating: 5,
      views: 27,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
    {
      id: 9,
      name: "Taj Hotels",
      imageSrc: listing1,
      date: "24, Dec 2020",
      rating: 0,
      views: 16,
      status: "Active",
      editLink: "/addnewlisting",
      deleteLink: "",
      previewLink: "/all",
    },
  ]);
  
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    listingId: null,
  });

  const handleDelete = (id) => {
    // Open confirmation dialog
    setDeleteConfirmation({
      isOpen: true,
      listingId: id,
    });
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      // Proceed with deletion
      const updatedListingData = listingData.filter((item) => item.id !== deleteConfirmation.listingId);
      setListingData(updatedListingData);
    }
    // Close confirmation dialog
    setDeleteConfirmation({
      isOpen: false,
      listingId: null,
    });
  };

  return (
    <>
        {deleteConfirmation.isOpen && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this listing?</p>
          <button className="yes-btn" onClick={() => handleConfirmation(true)}>Yes</button>
          <button className="no-btn" onClick={() => handleConfirmation(false)}>No</button>
        </div>
      )}
      <div className="dashboard-main">
        <div className="dashboard-container">
        <div className="dashboard-left">
            <Left />
          </div>

          <div className="dashboard-center " >
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">All Listings</span>
              <div className="ud-cen-s2">
                <h2>Listing Details</h2>
                <Link to="/newlisting" className="db-tit-btn">
                  Add New Listing
                </Link>
                <div className="table">
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Listing Name</th>
                        <th>Rating</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Preview</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listingData.map((listing, index) => (
                        <tr key={listing.id}>
                          <td>{index + 1}</td>
                          <td>
                            <img src={listing.imageSrc} alt={listing.name} />{" "}
                            {listing.name} <span>{listing.date}</span>
                          </td>
                          <td>
                            <span className="db-list-rat">
                              {listing.rating}
                            </span>
                          </td>
                          <td>
                            <span className="db-list-rat">{listing.views}</span>
                          </td>
                          <td>
                            <span className="db-list-ststus">
                              {listing.status}
                            </span>
                          </td>
                          <td>
                            <Link to={listing.editLink} className="db-list-edit">
                              Edit
                            </Link>
                          </td>
                          <td>
                            <Link
                              className="db-list-edit"
                              onClick={() => handleDelete(listing.id)}
                            >
                              Delete
                            </Link>
                           
                          </td>
                          <td>
                            <Link
                              to={listing.previewLink}
                              className="db-list-edit"
                              
                            >
                              Preview
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
          
          <div className="dashboard-right">
            <Right />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Listing;
