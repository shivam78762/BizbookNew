import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import service1 from "../Assets/services/1.webp";
import service12 from "../Assets/services/12.webp";
import {
  RiMailFill,
  RiPhoneFill,
  RiShieldCheckFill,
  RiShieldStarFill,
  RiStackFill,
  RiStarFill,
  RiStarLine,
  RiMapPin2Fill,
  RiFilter2Fill,
  RiCloseFill,
} from "react-icons/ri";
import svg from "../Assets/icon/svg/like.svg";
import svg2 from "../Assets/icon/svg/verified.webp";
import MyBusiness from "./MyBusiness";

const RealEstate = () => {
  const [isPopupOpen, setIsPopupOpen] = useState("-400px");
  const [formData, setFormData] = useState({
    enquiry_name: "",
    enquiry_email: "",
    enquiry_mobile: "",
    enquiry_category: "",
    enquiry_message: "",
  });
  const [showcategory, setShowcategory] = useState("all");
  const [showForm, setShowForm] = useState(true);
  const [mobiledata, setMobiledata] = useState();

  useEffect(() => {
    const handleResize = () => {
      setMobiledata(window.innerWidth <= 768); // Adjust the width as needed for mobile devices
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showRating, setShowRating] = useState(false);

  // Function to handle setting showCategory
  const handleShowCategory = () => {
    setShowCategory(true);
    setShowSubCategory(false);
    setShowFeature(false);
    setShowRating(false);
  };
  const handleShowSubCategory = () => {
    setShowCategory(false);
    setShowSubCategory(true);
    setShowFeature(false);
    setShowRating(false);
  };
  const handleShowFeature = () => {
    setShowCategory(false);
    setShowSubCategory(false);
    setShowFeature(true);
    setShowRating(false);
  };
  const handleShowRating = () => {
    setShowCategory(false);
    setShowSubCategory(false);
    setShowFeature(false);
    setShowRating(true);
  };
  // const handleClose = ()=> {
  //   setShowCategory(false);
  //   setShowSubCategory(false);
  //   setShowFeature(false);
  //   setShowRating(false);
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // For demonstration, logging form data to console
  };

  const handleClose = () => {
    setShowCategory(false);
    setShowSubCategory(false);
    setShowFeature(false);
    setShowRating(false);
    setIsPopupOpen("-400px");
  };
  const togglePopup = () => {
    if (isPopupOpen === "20px") {
      setIsPopupOpen("-400px");
    } else {
      if (window.innerWidth <= 767) {
        setIsPopupOpen("8px");
      } else {
        setIsPopupOpen("20px");
      }
    }
  };
  const toggleFilterPanel = () => {
    const filMobView = document.querySelector(".fil-mob-view");

    if (filMobView?.classList.contains("open")) {
      filMobView?.classList.remove("open");
    } else {
      filMobView?.classList.add("open");
    }
  };

  const closeFilterPanel = () => {
    const filMobView = document.querySelector(".fil-mob-view");
    filMobView?.classList.remove("open");
  };

  // Assuming you have a close button with class "close-btn"
  const closeButton = document.querySelector(".close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", closeFilterPanel);
  }

  const [loc, setLoc] = useState();

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
  }, []);

  const realstateCard = [
    {
      id: 1,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,
      userRating: 2,
      categorie: "hotels",
      subCate: "indpen",
      feature: "verified",
      rate: "1",

      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 2,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,
      userRating: 3,
      categorie: "spa",
      subCate: "indpen",
      feature: "likes",
      rate: "3",

      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 3,
      image: service1,
      categorie: "spa",
      subCate: "indpen",
      feature: "likes",
      rate: "4",

      name: "Rolexo Villas in California",
      rating: 5,
      userRating: 5,
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 4,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,
      categorie: "spa",
      subCate: "indpen",
      feature: "premium",

      rate: "4",

      userRating: 4,
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 5,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,
      userRating: 3,
      categorie: "hotels",
      subCate: "villa",
      feature: "premium",

      rate: "4",

      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 6,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,

      rate: "5",
      categorie: "hotels",
      subCate: "indpen",

      userRating: 5,
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 7,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,
      categorie: "hotels",
      subCate: "indpen",
      feature: "primum",
      rate: "5",

      userRating: 4,
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    {
      id: 8,
      image: service1,
      name: "Rolexo Villas in California",
      rating: 5,
      categorie: "spa",
      subCate: "verified",
      feature: "primum",
      rate: "2",

      userRating: 1,
      address: "28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      phoneNumber: "7904462944",
      email: "thedirectoryfinder@gmail.com",
      whatsappLink: "https://wa.me/7904462944",
    },
    // Add more objects for additional cards using similar structure
  ];
  const serviceProvidersData = [
    {
      id: 1,
      imgSrc: service1,
      altText: "Service Provider 1",
      title: "Core real estates",
      location: "City: No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "5.0",
    },
    {
      id: 2,
      imgSrc: service12,
      altText: "Service Provider 2",
      title: "Rolexo Villas in California",
      location:
        "City: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.",
      rating: "4.0",
    },
    {
      id: 3,
      imgSrc: service12,
      altText: "Service Provider 3",
      title: "Orange pet shop",
      location: "City: No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "5.0",
    },
    {
      id: 4,
      imgSrc: service12,
      altText: "Service Provider 4",
      title: "Best villas near you",
      location: "City: No:2, 4th Avenue, Newyork, USA, Near to Airport",
      rating: "5.0",
    },
    {
      id: 5,
      imgSrc: service12,
      altText: "Service Provider 5",
      title: "Ac services near you",
      location: "City: testapro 456",
      rating: " 4.0",
    },
  ];
  const [filterDat, setFilterDatas] = useState(realstateCard);

  const filterByCategory = (category) => {
    console.log(category);
    if (!category) {
      setFilterDatas(realstateCard);
    } else {
      const filteredData = realstateCard.filter(
        (product) => product.categorie === category
      );
      setFilterDatas(filteredData);
    }
  };

  const filterBySubCategory = (category) => {
    console.log(category);
    if (!category) {
      setFilterDatas(realstateCard);
    } else {
      const filteredData = realstateCard.filter(
        (product) => product.subCate === category
      );
      console.log(filteredData);
      setFilterDatas(filteredData);
    }
  };

  const filterByFeature = (category) => {
    console.log(category);
    if (!category) {
      setFilterDatas(realstateCard);
    } else {
      const filteredData = realstateCard.filter(
        (product) => product.feature === category
      );
      console.log(filteredData);
      setFilterDatas(filteredData);
    }
  };

  const filterByRating = (category) => {
    console.log(category);
    if (!category) {
      setFilterDatas(realstateCard);
    } else {
      const filteredData = realstateCard.filter(
        (product) => product.userRating == category
      );
      console.log(filteredData);
      setFilterDatas(filteredData);
    }
  };

  return (
    <>
      <div
        className="ani-quo-form ani-quo-form-act"
        style={{ right: showForm ? isPopupOpen : "-400px" }}
      >
        <button onClick={handleClose} className="button-close-form">
          <RiCloseFill />
        </button>
        <div className="tit-footer">
          <h3>
            What service do you need? <span>BizBook will help you</span>
          </h3>
        </div>
        <div className="hom-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="enquiry_name"
                value={formData.enquiry_name}
                onChange={handleChange}
                required
                placeholder="Enter name*"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="enquiry_email"
                value={formData.enquiry_email}
                onChange={handleChange}
                required
                placeholder="Enter email*"
                className="form-control"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="enquiry_mobile"
                value={formData.enquiry_mobile}
                onChange={handleChange}
                required
                placeholder="Enter mobile number *"
                className="form-control"
                pattern="[7-9]{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digits with 0-9"
              />
            </div>
            <div className="form-group">
              <select
                name="enquiry_category"
                id="enquiry_category"
                value={formData.enquiry_category}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Category</option>
                <option value="19">Wedding halls</option>
                <option value="18">Hotel & Food</option>
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
            <div className="form-group">
              <textarea
                name="enquiry_message"
                value={formData.enquiry_message}
                onChange={handleChange}
                placeholder="Enter your query or message"
                className="form-control"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="button-submit">
              Submit Requirements
            </button>
          </form>
        </div>
      </div>

      <section>
        <div className="all-list-bre all-pro-bre">
          <div className="container sec-all-list-bre">
            <div className="row">
              <div className="product-text">
                <h1 className="m-0">Real Estate</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>&#10095;</li>
                  <li>
                    <Link to={`${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/services`}>All category</Link>
                  </li>
                  <li>&#10095;</li>
                  <li>
                    <Link to="#">Washing Machines</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="all-estate">
            <div className="row">
              <div className="col-md-3">
                <div className="fil-mob-view">
                  <div className="all-filt">
                    <div className="filt-alist-near">
                      <div className="tit-text">
                        <h4>Top Service Providers</h4>

                        <span className="close-location close-btn">
                          &times;
                        </span>
                      </div>
                      <div className="near-ser-list top-ser-secti-prov">
                        <ul>
                          {serviceProvidersData.map((provider) => (
                            <li key={provider.id}>
                              <div className="near-bx">
                                <div className="ne-1">
                                  <img
                                    src={provider.imgSrc}
                                    alt={provider.altText}
                                  />
                                </div>
                                <div className="ne-2">
                                  <h5>{provider.title}</h5>
                                  <p>{provider.location}</p>
                                </div>
                                <div className="ne-3">
                                  <span>{provider.rating}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {console.log()}
                    <div className="">
                      {showcategory === "all" && (
                        <div className="all-filt">
                          <div className="filt-alist-near"></div>
                          <div className="filt-com lhs-cate">
                            <h4>
                              <RiStackFill className="svg-real" />
                              Categories
                            </h4>

                            <div className="dropdown">
                              <select
                                className="chosen-select"
                                onChange={(e) =>
                                  filterByCategory(e.target.value)
                                }
                              >
                                <option value="">Select Category</option>
                                <option value="hotels">
                                  Hotels And Resorts
                                </option>
                                <option value="spa">Spa and Facial</option>
                                <option value="digital">
                                  Digital Products
                                </option>
                                <option value="pet">Pet shop</option>
                                <option value="Hotelandfood">
                                  Hotel & Food
                                </option>
                                <option value="wedd">Wedding halls</option>
                                <option selected value="realest">
                                  Real Estate
                                </option>
                                <option value="sports">Sports</option>
                                <option value="education">Education</option>
                                <option value="transportation">
                                  Transportation
                                </option>
                                <option value="elec">Electricals</option>
                                <option value="auto">Automobiles</option>
                                <option value="hospi">Hospitals</option>
                              </select>
                            </div>
                          </div>

                          <div className="sub_cat_section filt-com lhs-sub">
                            <h4>
                              <RiShieldCheckFill className="svg-real" />
                              Sub category
                            </h4>
                            <ul>
                              <li>
                                <div className="chbox">
                                  <input
                                    type="checkbox"
                                    className="sub_cat_check"
                                    name="sub_cat_check"
                                    value="villa"
                                    id="Villas"
                                    onChange={(e) =>
                                      filterBySubCategory(e.target.value)
                                    }
                                  />
                                  <label htmlFor="Villas">Villas</label>
                                </div>
                              </li>
                              <li>
                                <div className="chbox">
                                  <input
                                    type="checkbox"
                                    className="sub_cat_check"
                                    name="sub_cat_check"
                                    value="indpen"
                                    id="IndependentHouse"
                                    onChange={(e) =>
                                      filterBySubCategory(e.target.value)
                                    }
                                  />
                                  <label htmlFor="IndependentHouse">
                                    Independent House
                                  </label>
                                </div>
                              </li>
                              <li>
                                <div className="chbox">
                                  <input
                                    type="checkbox"
                                    className="sub_cat_check"
                                    name="sub_cat_check"
                                    value="plot"
                                    id="PlotsandLands"
                                    onChange={(e) =>
                                      filterBySubCategory(e.target.value)
                                    }
                                  />
                                  <label htmlFor="PlotsandLands">
                                    Plots and Lands
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>

                          <div className="sticky-rating-feature sticky-nav">
                            <div className="filt-com lhs-featu ">
                              <h4>
                                <RiShieldCheckFill className="svg-real" />{" "}
                                Features
                              </h4>
                              <ul>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="trusted"
                                      className="feature_check"
                                      id="trusted"
                                    />
                                    <label htmlFor="trusted">
                                      Trusted services provider
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="premium"
                                      className="feature_check"
                                      id="premium"
                                      onChange={(e) =>
                                        filterByFeature(e.target.value)
                                      }
                                    />
                                    <label htmlFor="premium">
                                      Premium services
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="verified"
                                      className="feature_check"
                                      id="verified"
                                      onChange={(e) =>
                                        filterByFeature(e.target.value)
                                      }
                                    />
                                    <label htmlFor="verified">
                                      Verified services
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="trending"
                                      className="feature_check"
                                      id="trending"
                                      onChange={(e) =>
                                        filterByFeature(e.target.value)
                                      }
                                    />
                                    <label htmlFor="trending">
                                      Trending services
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="offers"
                                      className="feature_check"
                                      id="offers"
                                      onChange={(e) =>
                                        filterByFeature(e.target.value)
                                      }
                                    />
                                    <label htmlFor="offers">
                                      Offers and discounts
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="latest"
                                      className="feature_check"
                                      onChange={(e) =>
                                        filterByFeature(e.target.value)
                                      }
                                      id="latest"
                                    />
                                    <label htmlFor="latest">
                                      Latest updated
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="chbox">
                                    <input
                                      type="checkbox"
                                      value="likes"
                                      className="feature_check"
                                      id="likes"
                                      onChange={(e) =>
                                        filterByFeature(e.target.value)
                                      }
                                    />
                                    <label htmlFor="likes">Most likes</label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="filt-com lhs-rati ">
                              <h4>
                                <RiShieldStarFill className="svg-real" />{" "}
                                Ratings
                              </h4>
                              <ul>
                                <li>
                                  <div className="rbbox">
                                    <input
                                      type="radio"
                                      value="5"
                                      name="rating_check"
                                      className="rating_check"
                                      id="rb1"
                                      onChange={(e) =>
                                        filterByRating(e.target.value)
                                      }
                                    />
                                    <label htmlFor="rb1">
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarFill />
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="rbbox">
                                    <input
                                      type="radio"
                                      value="4"
                                      name="rating_check"
                                      className="rating_check"
                                      onChange={(e) =>
                                        filterByRating(e.target.value)
                                      }
                                      id="rb2"
                                    />
                                    <label htmlFor="rb2">
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarLine />
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="rbbox">
                                    <input
                                      type="radio"
                                      value="3"
                                      name="rating_check"
                                      className="rating_check"
                                      onChange={(e) =>
                                        filterByRating(e.target.value)
                                      }
                                      id="rb3"
                                    />
                                    <label htmlFor="rb3">
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarLine />
                                      <RiStarLine />
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="rbbox">
                                    <input
                                      type="radio"
                                      value="2"
                                      name="rating_check"
                                      className="rating_check"
                                      onChange={(e) =>
                                        filterByRating(e.target.value)
                                      }
                                      id="rb4"
                                    />
                                    <label htmlFor="rb4">
                                      <RiStarFill />
                                      <RiStarFill />
                                      <RiStarLine />
                                      <RiStarLine />
                                      <RiStarLine />
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div className="rbbox">
                                    <input
                                      type="radio"
                                      value="1"
                                      name="rating_check"
                                      className="rating_check"
                                      onChange={(e) =>
                                        filterByRating(e.target.value)
                                      }
                                      id="rb5"
                                    />
                                    <label htmlFor="rb5">
                                      <RiStarLine />
                                      <RiStarLine />
                                      <RiStarLine />
                                      <RiStarLine />
                                      <RiStarLine />
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {showcategory === "category" ? (
                      <div className="filt-com lhs-cate">
                        <h4>
                          <RiStackFill className="svg-real" />
                          Categories
                        </h4>

                        <div className="dropdown">
                          <select
                            className="chosen-select"
                            onChange={(e) => filterByCategory(e.target.value)}
                          >
                            <option value="">Select Category</option>
                            <option value="hotels">Hotels And Resorts</option>
                            <option value="spa">Spa and Facial</option>
                            <option value="digital">Digital Products</option>
                            <option value="pet">Pet shop</option>
                            <option value="Hotelandfood">Hotel & Food</option>
                            <option value="wedd">Wedding halls</option>
                            <option selected value="realest">
                              Real Estate
                            </option>
                            <option value="sports">Sports</option>
                            <option value="education">Education</option>
                            <option value="transportation">
                              Transportation
                            </option>
                            <option value="elec">Electricals</option>
                            <option value="auto">Automobiles</option>
                            <option value="hospi">Hospitals</option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {showcategory === "subcategory" ? (
                      <div className="sub_cat_section filt-com lhs-sub">
                        <h4>
                          {" "}
                          <RiShieldCheckFill className="svg-real" />
                          Sub category
                        </h4>
                        <ul>
                          <li>
                            <div className="chbox">
                              <input
                                type="checkbox"
                                className="sub_cat_check"
                                name="sub_cat_check"
                                value="villa"
                                id="Villas"
                                onChange={(e) =>
                                  filterBySubCategory(e.target.value)
                                }
                              />
                              <label htmlFor="Villas">Villas</label>
                            </div>
                          </li>
                          <li>
                            <div className="chbox">
                              <input
                                type="checkbox"
                                className="sub_cat_check"
                                name="sub_cat_check"
                                value="indpen"
                                id="IndependentHouse"
                                onChange={(e) =>
                                  filterBySubCategory(e.target.value)
                                }
                              />
                              <label htmlFor="IndependentHouse">
                                Independent House
                              </label>
                            </div>
                          </li>
                          <li>
                            <div className="chbox">
                              <input
                                type="checkbox"
                                className="sub_cat_check"
                                name="sub_cat_check"
                                value="plot"
                                id="PlotsandLands"
                                onChange={(e) =>
                                  filterBySubCategory(e.target.value)
                                }
                              />
                              <label htmlFor="PlotsandLands">
                                Plots and Lands
                              </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="sticky-rating-feature sticky-nav">
                      {showcategory === "featred" ? (
                        <div className="filt-com lhs-featu ">
                          <h4>
                            <RiShieldCheckFill className="svg-real" /> Features
                          </h4>
                          <ul>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="trusted"
                                  className="feature_check"
                                  id="trusted"
                                />
                                <label htmlFor="trusted">
                                  Trusted services provider
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="premium"
                                  className="feature_check"
                                  id="premium"
                                  onChange={(e) =>
                                    filterByFeature(e.target.value)
                                  }
                                />
                                <label htmlFor="premium">
                                  Premium services
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="verified"
                                  className="feature_check"
                                  id="verified"
                                  onChange={(e) =>
                                    filterByFeature(e.target.value)
                                  }
                                />
                                <label htmlFor="verified">
                                  Verified services
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="trending"
                                  className="feature_check"
                                  id="trending"
                                  onChange={(e) =>
                                    filterByFeature(e.target.value)
                                  }
                                />
                                <label htmlFor="trending">
                                  Trending services
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="offers"
                                  className="feature_check"
                                  id="offers"
                                  onChange={(e) =>
                                    filterByFeature(e.target.value)
                                  }
                                />
                                <label htmlFor="offers">
                                  Offers and discounts
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="latest"
                                  className="feature_check"
                                  onChange={(e) =>
                                    filterByFeature(e.target.value)
                                  }
                                  id="latest"
                                />
                                <label htmlFor="latest">Latest updated</label>
                              </div>
                            </li>
                            <li>
                              <div className="chbox">
                                <input
                                  type="checkbox"
                                  value="likes"
                                  className="feature_check"
                                  id="likes"
                                  onChange={(e) =>
                                    filterByFeature(e.target.value)
                                  }
                                />
                                <label htmlFor="likes">Most likes</label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}

                      {showcategory === "rating" ? (
                        <div className="filt-com lhs-rati ">
                          <h4>
                            <RiShieldStarFill className="svg-real" /> Ratings
                          </h4>
                          <ul>
                            <li>
                              <div className="rbbox">
                                <input
                                  type="radio"
                                  value="5"
                                  name="rating_check"
                                  className="rating_check"
                                  id="rb1"
                                  onChange={(e) =>
                                    filterByRating(e.target.value)
                                  }
                                />
                                <label htmlFor="rb1">
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarFill />
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="rbbox">
                                <input
                                  type="radio"
                                  value="4"
                                  name="rating_check"
                                  className="rating_check"
                                  onChange={(e) =>
                                    filterByRating(e.target.value)
                                  }
                                  id="rb2"
                                />
                                <label htmlFor="rb2">
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarLine />
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="rbbox">
                                <input
                                  type="radio"
                                  value="3"
                                  name="rating_check"
                                  className="rating_check"
                                  onChange={(e) =>
                                    filterByRating(e.target.value)
                                  }
                                  id="rb3"
                                />
                                <label htmlFor="rb3">
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarLine />
                                  <RiStarLine />
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="rbbox">
                                <input
                                  type="radio"
                                  value="2"
                                  name="rating_check"
                                  className="rating_check"
                                  onChange={(e) =>
                                    filterByRating(e.target.value)
                                  }
                                  id="rb4"
                                />
                                <label htmlFor="rb4">
                                  <RiStarFill />
                                  <RiStarFill />
                                  <RiStarLine />
                                  <RiStarLine />
                                  <RiStarLine />
                                </label>
                              </div>
                            </li>
                            <li>
                              <div className="rbbox">
                                <input
                                  type="radio"
                                  value="1"
                                  name="rating_check"
                                  className="rating_check"
                                  onChange={(e) =>
                                    filterByRating(e.target.value)
                                  }
                                  id="rb5"
                                />
                                <label htmlFor="rb5">
                                  <RiStarLine />
                                  <RiStarLine />
                                  <RiStarLine />
                                  <RiStarLine />
                                  <RiStarLine />
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="f2">
                  {mobiledata ? (
                      <div style={{ maxHeight: '200px', overflowY: 'auto',scrollbarWidth :'none' }}>
                  <div className="list-filt-v2 list-filt-v3">
                  <ul>
                    <li>
                      <div className="chbox-second">
                        <input
                          type="checkbox"
                          name="lfv2-all"
                          className="lfv2-all"
                          value="1"
                          id="lfv2-all"
                        />
                        <label
                          htmlFor="lfv2-all"
                          onClick={() => {
                            toggleFilterPanel();
                          }}
                        >
                          <RiFilter2Fill /> Filter
                        </label>
                      </div>
                    </li>
                
                    <li>
                      <div className="chbox-second">
                        <input
                          type="checkbox"
                          name="lfv2-pop"
                          className="lfv2-pop"
                          id="lfv2-pop"
                        />
                        <label
                          htmlFor="lfv2-pop"
                          onClick={handleShowCategory}
                        >
                          Categories
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox-second">
                        <input
                          type="checkbox"
                          name="lfv2-op"
                          className="lfv2-op"
                          id="lfv2-op"
                        />
                        <label
                          htmlFor="lfv2-op"
                          onClick={handleShowSubCategory}
                        >
                          Sub-categories
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox-second">
                        <input
                          type="checkbox"
                          name="lfv2-tru"
                          className="lfv2-tru"
                          id="lfv2-tru"
                        />
                        <label
                          htmlFor="lfv2-tru"
                          onClick={handleShowFeature}
                        >
                          Features
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="chbox-second">
                        <input
                          type="checkbox"
                          name="lfv2-near"
                          className="lfv2-near"
                          id="lfv2-near"
                        />
                        <label
                          htmlFor="lfv2-near"
                          onClick={handleShowRating}
                        >
                          Rating
                        </label>
                      </div>
                    </li>
                  </ul>
                 
          
                  </div>
                </div>
                
                  ) : (
                    <div className="list-filt-v2">
                      <ul>
                        <li>
                          <div className="chbox-second">
                            <input
                              type="checkbox"
                              name="lfv2-all"
                              className="lfv2-all"
                              value="1"
                              id="lfv2-all"
                            />
                            <label
                              htmlFor="lfv2-all"
                              onClick={() => {
                                setShowcategory("all");
                                console.log();
                                toggleFilterPanel();
                              }}
                            >
                              <RiFilter2Fill /> Filter
                            </label>
                          </div>
                        </li>

                        <li>
                          <div className="chbox-second">
                            <input
                              type="checkbox"
                              name="lfv2-pop"
                              className="lfv2-pop"
                              id="lfv2-pop"
                            />
                            <label
                              htmlFor="lfv2-pop"
                              onClick={() => setShowcategory("category")}
                            >
                              Categories
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox-second">
                            <input
                              type="checkbox"
                              name="lfv2-op"
                              className="lfv2-op"
                              id="lfv2-op"
                            />
                            <label
                              htmlFor="lfv2-op"
                              onClick={() => setShowcategory("subcategory")}
                            >
                              Sub-categories
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox-second">
                            <input
                              type="checkbox"
                              name="lfv2-tru"
                              className="lfv2-tru"
                              id="lfv2-tru"
                            />
                            <label
                              htmlFor="lfv2-tru"
                              onClick={() => setShowcategory("featred")}
                            >
                              Features
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="chbox-second">
                            <input
                              type="checkbox"
                              name="lfv2-near"
                              className="lfv2-near"
                              id="lfv2-near"
                            />
                            <label
                              htmlFor="lfv2-near"
                              onClick={() => setShowcategory("rating")}
                            >
                              Rating
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                  <div className="all-list-sh all-listing-total">
                    <ul>
                      {filterDat.map((card) => (
                        <li key={card.id}>
                          <div className="eve-box">
                            {/* LISTING IMAGE */}
                            <div className="al-img">
                              <span className="open-stat">open</span>
                              <Link
                                to={`/${loc?.county?.replace(/\s+/g, "")}/all`}
                              >
                                <img src={card.image} alt="" />
                              </Link>
                            </div>
                            {/* END LISTING IMAGE */}
                            {/* LISTING NAME */}
                            <div>
                              <h4>
                                <Link
                                  to={`/${loc?.county?.replace(
                                    /\s+/g,
                                    ""
                                  )}/all`}
                                >
                                  {card.name}
                                </Link>
                                <i className="li-veri">
                                  <img src={svg2} alt="" />
                                </i>
                              </h4>
                              <label className="rat">
                                {[...Array(5)].map((_, index) => (
                                  <span
                                    key={index}
                                    style={{
                                      color:
                                        index < card.userRating
                                          ? "orange"
                                          : "grey",
                                    }}
                                  >
                                    {index < card.userRating ? (
                                      <RiStarFill />
                                    ) : (
                                      <RiStarLine />
                                    )}
                                  </span>
                                ))}
                              </label>
                              <span className="addr">
                                <RiMapPin2Fill className="svg-realestate" />
                                {card.address}
                              </span>
                              <span className="pho">
                                <RiPhoneFill className="svg-realestate" />
                                {card.phoneNumber}
                              </span>
                              <span className="mail">
                                <RiMailFill className="svg-realestate" />
                                {card.email}
                              </span>
                              <div className="links">
                                <Link
                                  to=""
                                  data-toggle="modal"
                                  data-target="#quote"
                                  className="quo"
                                  onClick={() => togglePopup()}
                                >
                                  Get quote
                                </Link>
                                <Link to="#" className="view-more">
                                  View more
                                </Link>
                                <Link to={`Tel:${card.phoneNumber}`}>
                                  Call Now
                                </Link>
                                <Link
                                  to={card.whatsappLink}
                                  className="what"
                                  target="_blank"
                                >
                                  WhatsApp
                                </Link>
                              </div>
                            </div>
                            {/* END LISTING NAME */}
                            {/* SAVE */}
                            <span
                              className="enq-sav"
                              data-toggle="tooltip"
                              title=" Click to like this listing"
                            >
                              <i className="l-like sav-act">
                                <img src={svg} alt="" />
                              </i>
                            </span>
                            {/* END SAVE */}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showCategory && (
        <div className="popup-form">
          <span
            className="close-location close-btn"
            onClick={() => handleClose()}
          >
            &times;
          </span>
          <div className="filt-com lhs-cate">
            <h4>
              <RiStackFill className="svg-real" />
              Categories
            </h4>

            <div className="dropdown">
              <select
                className="chosen-select"
                onChange={(e) => filterByCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="hotels">Hotels And Resorts</option>
                <option value="spa">Spa and Facial</option>
                <option value="digital">Digital Products</option>
                <option value="pet">Pet shop</option>
                <option value="Hotelandfood">Hotel & Food</option>
                <option value="wedd">Wedding halls</option>
                <option selected value="realest">
                  Real Estate
                </option>
                <option value="sports">Sports</option>
                <option value="education">Education</option>
                <option value="transportation">Transportation</option>
                <option value="elec">Electricals</option>
                <option value="auto">Automobiles</option>
                <option value="hospi">Hospitals</option>
              </select>
            </div>
          </div>
        </div>
      )}
      {showSubCategory && (
        <div className="popup-form">
          <span
            className="close-location close-btn"
            onClick={() => handleClose()}
          >
            &times;
          </span>
          <div className="sub_cat_section filt-com lhs-sub">
            <h4>
              <RiShieldCheckFill className="svg-real" />
              Sub category
            </h4>
            <ul>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    className="sub_cat_check"
                    name="sub_cat_check"
                    value="villa"
                    id="Villas"
                    onChange={(e) => filterBySubCategory(e.target.value)}
                  />
                  <label htmlFor="Villas">Villas</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    className="sub_cat_check"
                    name="sub_cat_check"
                    value="indpen"
                    id="IndependentHouse"
                    onChange={(e) => filterBySubCategory(e.target.value)}
                  />
                  <label htmlFor="IndependentHouse">Independent House</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    className="sub_cat_check"
                    name="sub_cat_check"
                    value="plot"
                    id="PlotsandLands"
                    onChange={(e) => filterBySubCategory(e.target.value)}
                  />
                  <label htmlFor="PlotsandLands">Plots and Lands</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showFeature && (
        <div className="popup-form">
          <span
            className="close-location close-btn"
            onClick={() => handleClose()}
          >
            &times;
          </span>
          <div className="filt-com lhs-featu ">
            <h4>
              <RiShieldCheckFill className="svg-real" /> Features
            </h4>
            <ul>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="trusted"
                    className="feature_check"
                    id="trusted"
                  />
                  <label htmlFor="trusted">Trusted services provider</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="premium"
                    className="feature_check"
                    id="premium"
                    onChange={(e) => filterByFeature(e.target.value)}
                  />
                  <label htmlFor="premium">Premium services</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="verified"
                    className="feature_check"
                    id="verified"
                    onChange={(e) => filterByFeature(e.target.value)}
                  />
                  <label htmlFor="verified">Verified services</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="trending"
                    className="feature_check"
                    id="trending"
                    onChange={(e) => filterByFeature(e.target.value)}
                  />
                  <label htmlFor="trending">Trending services</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="offers"
                    className="feature_check"
                    id="offers"
                    onChange={(e) => filterByFeature(e.target.value)}
                  />
                  <label htmlFor="offers">Offers and discounts</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="latest"
                    className="feature_check"
                    onChange={(e) => filterByFeature(e.target.value)}
                    id="latest"
                  />
                  <label htmlFor="latest">Latest updated</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input
                    type="checkbox"
                    value="likes"
                    className="feature_check"
                    id="likes"
                    onChange={(e) => filterByFeature(e.target.value)}
                  />
                  <label htmlFor="likes">Most likes</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      {showRating && (
        <div className="popup-form">
          <span
            className="close-location close-btn"
            onClick={() => handleClose()}
          >
            &times;
          </span>
          <div className="filt-com lhs-rati ">
            <h4>
              <RiShieldStarFill className="svg-real" /> Ratings
            </h4>
            <ul>
              <li>
                <div className="rbbox">
                  <input
                    type="radio"
                    value="5"
                    name="rating_check"
                    className="rating_check"
                    id="rb1"
                    onChange={(e) => filterByRating(e.target.value)}
                  />
                  <label htmlFor="rb1">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                  </label>
                </div>
              </li>
              <li>
                <div className="rbbox">
                  <input
                    type="radio"
                    value="4"
                    name="rating_check"
                    className="rating_check"
                    onChange={(e) => filterByRating(e.target.value)}
                    id="rb2"
                  />
                  <label htmlFor="rb2">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarLine />
                  </label>
                </div>
              </li>
              <li>
                <div className="rbbox">
                  <input
                    type="radio"
                    value="3"
                    name="rating_check"
                    className="rating_check"
                    onChange={(e) => filterByRating(e.target.value)}
                    id="rb3"
                  />
                  <label htmlFor="rb3">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarLine />
                    <RiStarLine />
                  </label>
                </div>
              </li>
              <li>
                <div className="rbbox">
                  <input
                    type="radio"
                    value="2"
                    name="rating_check"
                    className="rating_check"
                    onChange={(e) => filterByRating(e.target.value)}
                    id="rb4"
                  />
                  <label htmlFor="rb4">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                  </label>
                </div>
              </li>
              <li>
                <div className="rbbox">
                  <input
                    type="radio"
                    value="1"
                    name="rating_check"
                    className="rating_check"
                    onChange={(e) => filterByRating(e.target.value)}
                    id="rb5"
                  />
                  <label htmlFor="rb5">
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                    <RiStarLine />
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
      <MyBusiness />
    </>
  );
};

export default RealEstate;
