import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FaTimes } from "react-icons/fa"; // Importing icons from react-icons
import { Offcanvas } from "react-bootstrap";
import { Container } from "react-bootstrap";
import navlogo from "../Assets/user/logotwo.webp";
import { FaBell } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom";
import "./Navbar.css";
import imageSrc from "../Assets/user/84037unnamed.webp";
import {
  RiMenuFill,
  RiChatDeleteFill,
  RiDeleteBack2Fill,
  RiMapPinLine,
} from "@remixicon/react";
import icon21 from "../Assets/icon/db11.webp";
import icon2 from "../Assets/icon/db20.webp";
import icon3 from "../Assets/icon/db13.webp";
import icon4 from "../Assets/icon/tick.webp";
import icon5 from "../Assets/icon/db24.webp";
import icon6 from "../Assets/icon/db17.webp";
import icon7 from "../Assets/icon/db18.webp";
import icon8 from "../Assets/icon/dbl15.webp";
import icon9 from "../Assets/icon/dbl11.webp";
import icon10 from "../Assets/icon/dbl9.webp";
import icon11 from "../Assets/icon/dbl16.webp";
import icon12 from "../Assets/icon/dbl19.webp";
import icon13 from "../Assets/icon/dbl17.webp";
import icon14 from "../Assets/icon/dbl210.webp";
import icon15 from "../Assets/icon/db19.webp";
// Update the image source
const joinDate = "Joined on 16, Apr 2024";

function DemoNav() {
  const [showDashboard, setshowDashboard] = useState(false);
  const [selectedpath, setSelectedPath] = useState();
  const [notifications, setNotifications] = useState(["sxj", "di"]);
  const [userName, setusername] = useState(false);
  const [loc, setLoc] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postcode, setPostcode] = useState("");

  const [newpostcode, setNewPostcode] = useState("");

  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`
      );
      if (!response.ok) {
        throw new Error("City not found for the given PIN code");
      }
      const data = await response.json();
      if (
        data &&
        data.length > 0 &&
        data[0].PostOffice &&
        data[0].PostOffice.length > 0
      ) {
        const postOfficeData = data[0].PostOffice[0];
        const cityName = postOfficeData.Name;
        const postcode = postOfficeData.Pincode;

        setNewPostcode(postOfficeData);

        setPostcode(postcode);

        localStorage.setItem("location", JSON.stringify(postOfficeData));

        setIsPopupOpen(false);
        setPin("");
        window.location.reload();
      } else {
        setError("No city found for the given PIN code")
      }
    } catch (error) {
      setCity("");
      setPostcode("");
      setPin("");
    }
  };

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);

  const handleDashboardToggle = () => setshowDashboard(!showDashboard);
  const [error, setError] = useState('');
  const closeDashboard = () => setshowDashboard(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const handleToggle = () => setShowNotifications(!showNotifications);
  const closeNotifications = () => setShowNotifications(false);

  useEffect(() => {
    const userName = localStorage.getItem("userName");

    if (!userName) {
      setusername(true);
    } else {
      setusername(false);
    }
  }, []);

  const clearNotification = (index) => {
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };
 
  const menuItems = [
    {
      to: `/${
       (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/dashboard`,
      text: "My Dashboard",
      iconSrc: icon21,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/listing`,
      text: "All Listings",
      iconSrc: icon2,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/newlisting`,
      text: "Add New Listing",
      iconSrc: icon3,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/lead`,
      text: "Lead enquiry",
      iconSrc: icon4,
    },

    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/blog`,
      text: "Blog posts",
      iconSrc: icon5,
    },

    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/reviews`,
      text: "Rewiews",
      iconSrc: icon6,
    },

    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/profile`,
      text: "My Profile",
      iconSrc: icon7,
    },

    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/liked`,
      text: "Liked Listings",
      iconSrc: icon8,
    },

    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/summary`,
      text: "Ad Summary",
      iconSrc: icon9,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/payment`,
      text: "Payment & plan",
      iconSrc: icon10,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/invoice`,
      text: "Payment invoice",
      iconSrc: icon11,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/notification`,
      text: "Notifications",
      iconSrc: icon12,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/how`,
      text: "How to's",
      iconSrc: icon13,
    },
    {
      to: `/${
        (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
        ? loc?.State
        : loc?.Name?.replace(/\s+/g, ""))
      }/setting`,
      text: "Setting",
      iconSrc: icon14,
    },
    { to: "/logout", text: "Log Out", iconSrc: icon15 },
  ];
  const categories = [
    {
      title: "Automobiles",
      to: "/automobiles",
    },
    {
      title: "Technology",
      to: "/technology",
    },
    {
      title: "Electricals",
      to: "/electricals",
    },
    {
      title: "Education",
      to: "/education",
    },
    {
      title: "Sports",
      to: "/sports",
    },
    {
      title: "Real Estate",
      to: "/realestate",
    },
    {
      title: "Wedding halls",
      to: "/weddinghalls",
    },
    {
      title: "Hospitals",
      to: "/hospitals",
    },
    {
      title: "Pet shop",
      to: "/petshop",
    },
    {
      title: "Restaurants",
      to: "/restaurants",
    },
    {
      title: "Spa and Facial",
      to: "/spafacial",
    },
    {
      title: "Transportation",
      to: "/transportation",
    },
  ];

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary nav-two">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={navlogo} alt="" className="navbar-brand-image" />
          </Navbar.Brand>

          {!userName && (
            <div className="top-noti">
              <span className="db-menu-noti" onClick={handleToggle}>
                <FaBell className="db-menu-noti-main" />
                <i id="noti-count">{notifications.length}</i>{" "}
              </span>
              <Offcanvas
                show={showNotifications}
                onHide={closeNotifications}
                placement="end"
                className="offcanvas-one-body"
              >
                <div className="db-noti top-noti-win">
                  <span onClick={closeNotifications}>
                    <FaTimes className="db-menu-clo" />
                  </span>
                  <h4>Notifications</h4>
                  <Offcanvas.Body className="offcanvas-one-body">
                    <ul id="all-notif-ul">
                      {notifications.map((notification, index) => (
                        <li key={index}>
                          {notification}
                          <span
                            className="delete-btn-one"
                            onClick={() => clearNotification(index)}
                          >
                            <RiDeleteBack2Fill />
                          </span>
                        </li>
                      ))}
                    </ul>
                    {notifications.length > 0 ? (
                      <span
                        id="noti-clr-noti"
                        className="noti-clr-noti"
                        onClick={() => setNotifications([])}
                      >
                        <RiChatDeleteFill className="delete-btn" />
                        Clear all notifications
                      </span>
                    ) : (
                      <span id="no-noti-clr-noti" className="no-noti-clr-noti">
                        No Notifications to Show
                      </span>
                    )}
                  </Offcanvas.Body>
                </div>
              </Offcanvas>
            </div>
          )}

          <div className="al">
            <div className="head-pro" onClick={handleDashboardToggle}>
              <RiMenuFill className="menu-icon" />
              <span className="fclick near-pro-cta"></span>
              <Offcanvas
                show={showDashboard}
                onHide={closeDashboard}
                placement="end"
                className="offcanvas-two"
              >
                <div className="db-noti-in">
                  <Offcanvas.Body className="offcanvas-two-body">
                    <span onClick={closeDashboard}>
                      <FaTimes className="db-menu-clo close" />
                    </span>
                    {!userName && (
                      <div className="mv-pro ud-lhs-s1">
                        <img src={imageSrc} alt="User Profile" />
                        <div className="ud-lhs-pro-bio">
                          <Link to="/gallary">
                            {" "}
                            <h4>Rn53</h4>
                          </Link>
                          <b>{joinDate}</b>
                        </div>
                      </div>
                    )}
                    <div className="mv-pro-menu ud-lhs-s2">
                      <ul>
                        {menuItems?.map(
                          (item, index) =>
                            !userName && (
                              <li key={index}>
                                <Link
                                  to={item.to}
                                  className={
                                    selectedpath === item.to
                                      ? "db-lact"
                                      : "none"
                                  }
                                >
                                  <img src={item.iconSrc} alt={item.text} />{" "}
                                  {item.text}
                                </Link>
                              </li>
                            )
                        )}
                      </ul>
                    </div>

                    <div className="mv-cate">
                      {userName && (
                        <ul>
                          <li>
                            <Link to="/user-login/sign">Sign in</Link>
                          </li>
                          <li>
                            <Link to="/user-login">Create an account</Link>
                          </li>
                        </ul>
                      )}
                      <h4>All Categories</h4>
                      <ul>
                        {categories?.map((category, index) => (
                          <li key={index}>
                            <Link
                              to={`${
                                loc?.county?.replace(/\s+/g, "") || (loc?.Name == "NA"
                                  ? loc?.State
                                  : loc?.Name?.replace(/\s+/g, ""))
                              }${category.to}`}
                            > {category.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Offcanvas.Body>
                </div>
              </Offcanvas>
            </div>
          </div>
        </Container>
      </Navbar>

      <div
        className="glow-subnav-template glow-mobile-subnav nav-bluebeacon"
        id="nav-subnav-container"
      >
        <div
          className="a-declarative nav-global-location-slot-upsell-false"
          data-action="glow-sheet-trigger"
          id="nav-global-location-slot"
          tabIndex="0"
        >
          <div id="glow-ingress-block">
            <span
              className="nav-single-line nav-persist-content"
              id="glow-ingress-single-line"
              onClick={togglePopup}
            >
              <RiMapPinLine className="map-icon" />
              {(loc?.county == "" ? loc?.city : loc?.county) || (loc?.Name == "NA" ? loc?.State : loc?.Name)}
              &nbsp; {loc?.postcode || loc?.Pincode} - Update location ⌵
            </span>
          </div>

          {/* <input data-addnewaddress="new" id="unifiedLocation1ClickAddress" name="addressID" type="hidden" className="nav-progressive-attribute" value="" />
        <input id="glowValidationToken" name="glow-validation-token" type="hidden" value="hEUIHN355oY9Wv+W2po7sMtjM0hne1VuKO+kEfczDLlcAAAAAGYnQ4QAAAAB" className="nav-progressive-attribute" /> 
        <input id="glowDestinationType" name="glow-destination-type" type="hidden" value="IP2LOCATION" className="nav-progressive-attribute" />        */}
        </div>

        {/* Popup */}
        {isPopupOpen && (
          <div className="popup-location">
            <div className="popup-content-location">
              <form onSubmit={handleSubmit}>
                <h4 className="mb-3">
                  <span className="close-location" onClick={togglePopup}>
                    &times;
                  </span>
                  Enter an Indian Pincode
                </h4>
                <input
                  type="text"
                  className="input-location"
                  placeholder="Enter your location"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                />
                <button type="submit" className="update-btn">
                  Apply
                </button>
                {error && <p className="error-message">{error}</p>}
              </form>
            </div>
          </div>
        )}
      </div>
      
    </>
  );
}

export default DemoNav;
