import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";
import navlogo from "../Assets/user/logotwo.webp";
import map from "../Assets/icon/line/map.webp";
import search from "../Assets/icon/search.webp";
import db20 from "../Assets/icon/db20.webp";
import db21 from "../Assets/icon/db21.webp";
import db22 from "../Assets/icon/db22.webp";
import db23 from "../Assets/icon/db23.webp";
import db24 from "../Assets/icon/db24.webp";
import db25 from "../Assets/icon/db25.webp";
import icon from "../Assets/icon/next.webp";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faRectangleAd } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Demo from "../Services/Demo";

function NavBar() {
  const [sessions, setsessions] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState();
  const [loc, setLoc] = useState();
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState("");
  const [newpostcode, setNewPostcode] = useState("");

  const [pin, setPin] = useState("");
  const [city, setCity] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const [isSwapped, setIsSwapped] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwapped((prevState) => !prevState);
    }, 2000); // Interval set to 2 seconds

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);
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
        setError("No city found for the given PIN code");
      }
    } catch (error) {
      setCity("");
      setPostcode("");
      setPin("");
    }
  };

  useEffect(() => {
    const handleLocationDetection = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude);
            console.log(longitude);

            try {
              //  https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
              // https://nominatim.openstreetmap.org/reverse?format=json&lat=37.7749295&lon=-122.4194155
              const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const data = await response.json();
              console.log(data);

              console.log(data.address.county?.replace(/\s+/g, ""));

              const str = JSON.stringify(data.address);
              console.log("dd", str);
              localStorage.setItem("location", str);

              setLocation(data.address.county);

              // setLocation("Location not found");
            } catch (error) {
              console.error("Error fetching location:", error);
            }
          },
          (error) => {
            console.error("Error getting location:", error);
          }
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    handleLocationDetection();
  }, []);

  useEffect(() => {
    const username = localStorage.getItem("userName");

    if (username) {
      console.log("fff");
      setsessions(false);
    } else {
      setsessions(true);
    }
  }, []);

  const categories = [
    { name: "Wedding halls - 03" },
    { name: "Hotel & Food - 01" },
    { name: "Pet shop - 12" },
    { name: "Digital Products - 31" },
    { name: "Spa And Facial - 10" },
    { name: "Real Estate - 23" },
    { name: "Sports - 05" },
    { name: "Education - 05" },
    { name: "Electricals - 06" },
    { name: "Automobiles - 06" },
    { name: "Transportation - 02" },
    { name: "Hospitals" },
    { name: "Hotel And Resorts..." },
  ];
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <Navbar expand="lg" sticky="top" className="bg-color Nav-one">
        <Container className="Nav-one">
          <Link to="/">
            <img src={navlogo} alt="" className="navbar-brand-image" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="All Category"
                id="basic-nav-dropdown"
                onMouseEnter={() => setShowDropdown(true)}
                show={showDropdown}
              >
                <div
                  className="show-hover"
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  <div className="dropdown-main">
                    <div className="dropdown-one">
                      <NavDropdown.Item
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/services`}
                      >
                        <img src={db20} alt="Icon" className="dropdown-icon" />
                        All Services
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/events`}
                      >
                        <img src={db21} alt="Icon" className="dropdown-icon" />
                        Events
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/products`}
                      >
                        <img src={db22} alt="Icon" className="dropdown-icon" />
                        Products
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/deal`}
                      >
                        <img src={db23} alt="Icon" className="dropdown-icon" />
                        Coupon & Deal
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/blogs`}
                      >
                        <img src={db24} alt="Icon" className="dropdown-icon" />
                        Blogs
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/community`}
                      >
                        <img src={db25} alt="Icon" className="dropdown-icon" />
                        Community
                      </NavDropdown.Item>
                    </div>

                    <div className="dropdown-two">
                      <h4>ALL CATEGORY</h4>
                      <div className="search-bar">
                        <input
                          type="search"
                          className="serach-bar-one"
                          placeholder="Search Category"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                      <div className="category-main">
                        <ul className="category-list">
                          {filteredCategories.map((category, index) => (
                            <li key={index} className="category-item">
                              <Dropdown.Item
                                className="dropdown-none"
                                href={`/${
                                  (loc?.county == ""
                                    ? loc?.city
                                    : loc?.county?.replace(/\s+/g, "")) ||
                                  (loc?.Name == "NA"
                                    ? loc?.State
                                    : loc?.Name?.replace(/\s+/g, ""))
                                }/realestate`}
                              >
                                <img src={icon} className="arrow-icon" alt="" />
                                {category.name}
                              </Dropdown.Item>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-second">
                    <div className="dir-home-nav-bot">
                      <h5>
                        A few reasons you’ll love Online Business Directory
                        <p className="call-main">Call us on: +01 6214 6548</p>
                      </h5>
                    </div>

                    <div className="button-main">
                      {sessions ? (
                        <>
                          <a
                            href={`/${
                              (loc?.county == ""
                                ? loc?.city
                                : loc?.county?.replace(/\s+/g, "")) ||
                              (loc?.Name == "NA"
                                ? loc?.State
                                : loc?.Name?.replace(/\s+/g, ""))
                            }/user-login/sign`}
                            className="button-one"
                          >
                            <FontAwesomeIcon icon={faRectangleAd} />
                            Advertise with us
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href={`/${
                              (loc?.county == ""
                                ? loc?.city
                                : loc?.county?.replace(/\s+/g, "")) ||
                              (loc?.Name == "NA"
                                ? loc?.State
                                : loc?.Name?.replace(/\s+/g, ""))
                            }/ads-form`}
                            className="button-one"
                          >
                            <FontAwesomeIcon icon={faRectangleAd} />
                            Advertise with us
                          </a>
                        </>
                      )}
                      <a
                        href={`/${
                          (loc?.county == ""
                            ? loc?.city
                            : loc?.county?.replace(/\s+/g, "")) ||
                          (loc?.Name == "NA"
                            ? loc?.State
                            : loc?.Name?.replace(/\s+/g, ""))
                        }/mybuiness`}
                        className="button-one button-two"
                      >
                        <FontAwesomeIcon icon={faStore} /> Add your business
                      </a>
                    </div>
                  </div>
                  <div className="bg-image"></div>
                </div>
              </NavDropdown>
              <div className="input-container">
                <div className="icon">
                  <img src={map} alt="" width="20" />
                </div>
                {/* <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              /> */}
                <span
                  className="nav-single-line nav-persist-content"
                  id="glow-ingress-single-line"
                  onClick={togglePopup}
                >
                  {/* <RiMapPinLine className="map-icon" /> */}
                  {loc?.county || (loc?.Name == "NA" ? loc?.State : loc?.Name)}
                  &nbsp; {loc?.postcode || loc?.Pincode}{" "}
                  <p>Update location ⌵</p>
                </span>
              </div>
              <Form className="d-flex position-relative ">
              <Form.Control
  placeholder={`${
    isSwapped ? "3.3 Crore+' Products & Services" : "4 Crore+' Business"
  }`}
  className="me-2 search-bar   navbar-mobile-display"
  aria-label="Search"
/>


                <div className="search-icon-container">
                  <img
                    src={search}
                    alt="Search"
                    className="search-icon  navbar-mobile-display"
                  />
                </div>
              </Form>
            </Nav>

            {sessions ? (
              <>
                <ul className="bl">
                  <li>
                    <Link to="/user-login/sign">Sign in</Link>
                  </li>
                  <li>
                    <Link to="/user-login">Create an account</Link>
                  </li>
                </ul>
              </>
            ) : (
              <Demo />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
    </>
  );
}

export default NavBar;
