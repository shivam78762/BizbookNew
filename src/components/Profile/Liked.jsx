import React from "react";
import { Link } from "react-router-dom";

import Left from "./Left";
import Right from "./right";

const Liked = () => {
  const [likedData, setLikedData] = React.useState([
    {
      id: 1,
      name: "The Royal Spa Center for Women",
      rating: 4,
      date: "08, Dec 2019",
      imageUrl: "images/listings/41073ser6.jpg",
      link: "/all",
    },
    {
      id: 2,
      name: "Wedding Venues viki",
      rating: 0,
      date: "22, Jan 2020",
      imageUrl: "images/listings/4797732622rn53themes.png",
      link: "/all",
    },
    {
      id: 3,
      name: "asjdklfasd",
      rating: 0,
      date: "23, Jan 2020",
      imageUrl: "images/listings/26404cvs-gift-card-476x328.png",
      link: "/all",
    },
    {
      id: 4,
      name: "IPM Business Software",
      rating: 0,
      date: "22, Jan 2020",
      imageUrl: "images/listings/56271pexels-photo-713148.jpeg",
      link: "/all",
    },
    {
      id: 5,
      name: "Forms hospitals",
      rating: 0,
      date: "22, Jan 2020",
      imageUrl:
        "images/listings/20140doctor-sitting-in-front-of-his-desk-2182979.jpg",
      link: "/all",
    },
    {
      id: 6,
      name: "Test mest",
      rating: 0,
      date: "21, Jan 2020",
      imageUrl: "images/listings/46980logo2.png",
      link: "/all",
    },
    {
      id: 7,
      name: "New listing 2",
      rating: 0,
      date: "20, Jan 2020",
      imageUrl: "images/listings/88258blog_off.jpg",
      link: "/all",
    },
    {
      id: 8,
      name: "New listing",
      rating: 0,
      date: "20, Jan 2020",
      imageUrl: "images/listings/138331.jpg",
      link: "/all",
    },
    {
      id: 9,
      name: "Anicuns Online",
      rating: 0,
      date: "17, Jan 2020",
      imageUrl: "images/listings/138331.jpg",
      link: "/all",
    },
    {
      id: 10,
      name: "lll",
      rating: 0,
      date: "16, Jan 2020",
      imageUrl:
        "images/listings/83091accomplishment-ceremony-education-graduation-267885.jpg",
      link: "/all",
    },
    // Add more objects here...
  ]);
  const handleDelete = (id) => {
    const updatedLikedData = likedData.filter((item) => item.id !== id);
    setLikedData(updatedLikedData);
  };
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center">
          <div className="ud-cen">
            <div className="log-bor">&nbsp;</div> 
            <span className="udb-inst">Liked Listings</span>
            <div className="ud-cen-s2">
                <h2>All Liked Listings</h2>
                <table className="responsive-table bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Listing Name</th>
                            <th>Rating</th>
                            <th>Remove</th>
                            <th>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {likedData.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.imageUrl} alt={item.name} />
                                    {item.name} <span>{item.date}</span>
                                </td>
                                <td><span className="db-list-rat">{item.rating}</span></td>
                                <td><Link className="db-list-edit" onClick={() => handleDelete(item.id)}>Remove</Link></td>
                                <td><Link to={item.link} className="db-list-edit">Preview</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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

export default Liked;
