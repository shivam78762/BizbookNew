import React, { useEffect, useState } from "react";
import "./CSS/Services.css";
import { Link } from "react-router-dom";
import MyBusiness from "./MyBusiness";
import product1 from "../Assets/products/1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faList,
  faHandHoldingDollar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { RiCloseFill } from "@remixicon/react";
import { RiFilter2Fill } from "react-icons/ri";

const Products = () => {
  const [isPopupOpen, setIsPopupOpen] = useState("-400px");
  const [formData, setFormData] = useState({
    priceRating: "3",
    reviewName: "Rn53 Themes",
    reviewMobile: "5522114422",
    reviewEmail: "rn53themes@gmail.com",
    reviewCity: "",
    reviewMessage: "",
  });
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
  const productList = [
    {
      id: 1,
      image: product1,
      name: "Clothing1 ",
      price: "$1000",
      discount: "0% off",

      categorie: "cloth",
      subCate: "krishna",
    },
    {
      id: 2,
      image: product1,
      name: "Shoes",
      price: "$1000",
      discount: "0% off",
      categorie: "shoes",
      subCate: "eltoy",
    },
    {
      id: 3,
      image: product1,
      name: "Audi q3",
      price: "$1000",
      discount: "0% off",
      categorie: "foot",
      subCate: "softtoy",
    },
    {
      id: 4,
      image: product1,
      name: "Audi q3",
      price: "$1000",
      discount: "0% off",
      categorie: "jewel",
      subCate: "softtoy",
    },
    {
      id: 5,
      image: product1,
      name: "baby q3",
      price: "$1000",
      discount: "0% off",
      categorie: "baby",
      subCate: "krishna",
    },
    {
      id: 6,
      image: product1,
      name: "fruit q3",
      price: "$1000",
      discount: "10% off",
      categorie: "fruit",
      subCate: "krishna",
    },
    {
      id: 7,
      image: product1,
      name: "mens q3",
      price: "$1000",
      discount: "20% off",
      categorie: "mens",
      subCate: "softtoy",
    },
    {
      id: 8,
      image: product1,
      name: "health q3",
      price: "$500",
      discount: "10% off",
      categorie: "health",
      subCate: "krishna",
    },
    {
      id: 9,
      image: product1,
      name: "sports q3",
      price: "$500",
      discount: "20% off",
      categorie: "sports",
      subCate: "krishna",
    },
    {
      id: 10,
      image: product1,
      name: "education q3",
      price: "$250",
      discount: "40% off",
      categorie: "education",
      subCate: "krishna",
    },
    {
      id: 11,
      image: product1,
      name: "electricals q3",
      price: "$100",
      discount: "30% off",
      categorie: "electricals",
      subCate: "krishna",
    },
    {
      id: 12,
      image: product1,
      name: "auto q3",
      price: "$100",
      discount: "40% off",
      categorie: "auto",
      subCate: "krishna",
    },
    {
      id: 13,
      image: product1,
      name: "Audi q3",
      price: "$150",
      categorie: "cloth",
      discount: "30% off",
      discountRange: "30 - 40",
      subCate: "krishna",
    },
    {
      id: 14,
      image: product1,
      name: "Audi q3",
      price: "$100",
      discount: "30% off",
      discountRange: "20 - 30",
      categorie: "cloth",
      subCate: "krishna",
    },
    {
      id: 15,
      image: product1,
      name: "Audi q3",
      price: "$100",

      discount: "10% off",
      discountRange: "0 - 20",
      categorie: "cloth",
      subCate: "krishna",
    },
    {
      id: 16,
      image: product1,
      name: "Audi q3",
      price: "$100",
      discount: "10% off",
      discountRange: "0 - 10",
      categorie: "cloth",
      subCate: "krishna",
    },
  ];

  const [filterDat, setFilterDatas] = useState(productList);

  const [showForm, setShowForm] = useState(true);

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

  const checkboxData = [
    { id: "KRISHNA", value: "44", label: "KRISHNA", subcate: "krishna" },
    {
      id: "Electric toys",
      value: "43",
      label: "Electric toys",
      subcate: "eletoys",
    },
    { id: "Soft toys", value: "42", label: "Soft toys", subcate: "softtoy" },
    { id: "Diet food", value: "41", label: "Diet food", subcate: "dietfood" },
    {
      id: "Health products",
      value: "40",
      label: "Health products",
      subcate: "healthproduct",
    },
  ];

  const priceData = [
    {
      id: "price_check5",
      range: "$5000 - $10000",
      value: "10000",
      label: "Above $1000",
    },
    {
      id: "price_check4",
      range: "$500 - $1000",
      value: "1000",
      label: "$501 - $1000",
    },
    {
      id: "price_check3",
      range: "$251 - $500",
      value: "500",
      label: "$251 - $500",
    },
    {
      id: "price_check2",
      range: "$101 - $250",
      value: "250",
      label: "$101 - $250",
    },
    {
      id: "price_check1",
      range: "$0 - $100",
      value: "100",
      label: "Below $100",
    },
  ];

  const discountData = [
    {
      id: "discount_check5",
      range: "50 - 70",
      value: "70",
      label: "Above 70%",
    },
    {
      id: "discount_check4",
      range: "40 - 50",
      value: "50",
      label: "51% - 70%",
    },
    {
      id: "discount_check3",
      range: "30 - 40",
      value: "40",
      label: "26% - 50%",
    },
    {
      id: "discount_check2",
      range: "20 - 30",
      value: "30",
      label: "11% - 25%",
    },
    {
      id: "discount_check1",
      range: "00 - 20",
      value: "20",
      label: "Below 10%",
    },
  ];
  const [showCategory, setShowCategory] = useState(false);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showRating, setShowRating] = useState(false);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to backend or perform desired action
  };
 const closeFilterPanel = () => {
    const  ProductLeft = document.querySelector(".product-left");
    ProductLeft?.classList.remove("open");
  };

  // Assuming you have a close button with class "close-btn"
  const closeButton = document.querySelector(".close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", closeFilterPanel);
  }
  // Function to handle input changes
  const handleChange = (rating) => {
    setFormData({
      ...formData,
      priceRating: rating,
    });
  };

  const toggleFilterPanel = () => {
    const ProductLeft = document.querySelector(".product-left");
    if (ProductLeft?.classList.contains("open")) {
      ProductLeft?.classList.remove("open");
    } else {
      ProductLeft?.classList.add("open");
    }
  };
  const filterByCategory = (category) => {
    if (!category) {
      setFilterDatas(productList);
    } else {
      const filteredData = productList.filter(
        (product) => product.categorie === category
      );
      setFilterDatas(filteredData);
    }
  };

  const filterBySubCategory = (category) => {
    if (!category) {
      setFilterDatas(productList);
    } else {
      const filteredData = productList.filter(
        (product) => product.subCate === category
      );
      console.log(filteredData);
      setFilterDatas(filteredData);
    }
  };
  const filterByPrice = (range) => {
    console.log(range);
    if (!range) {
      setFilterDatas(productList);
    } else {
      const [minPrice, maxPrice] = range
        .split(" - ")
        .map((price) => parseInt(price.replace("$", "").trim()));
      const filteredData = productList.filter((product) => {
        const productPrice = parseInt(product.price.replace("$", ""));
        return productPrice >= minPrice && productPrice <= maxPrice;
      });
      setFilterDatas(filteredData);
    }
  };
  const filterByDiscount = (range) => {
    console.log(range);
    if (!range) {
      setFilterDatas(productList);
    } else {
      const [minDiscount, maxDiscount] = range
        .split(" - ")
        .map((discount) => parseInt(discount.replace("%", "").trim()));
      const filteredData = productList.filter((product) => {
        const productDiscount = parseInt(product.discount.replace("%", ""));
        return productDiscount >= minDiscount && productDiscount <= maxDiscount;
      });
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
                <h1>All Categories</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>&#10095;</li>
                  <li>
                    <Link to="#">All category</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="product-main">
            <div className="row">
              <div className="col-md-3">
                <div className="product-left">
                  <div className="category-section">
                    <div className="category-container">
                    <span className="close-location close-btn">
                          &times;
                        </span> 
                      <h4>
                        <span>
                          <FontAwesomeIcon
                            className="icon-product"
                            icon={faList}
                          />
                        </span>
                        Categories
                      </h4>
                      <div className="dropdown-container">
                        <select
                          className="category-select"
                          onChange={(e) => filterByCategory(e.target.value)}
                        >
                          <option value="">Select Category</option>
                          <option value="cloth">Clothings</option>
                          <option value="foot">Footwear</option>
                          <option value="shoes">Shoes</option>
                          <option value="jewel">Jewellery</option>
                          <option value="toys">Toys</option>
                          <option value="baby">Baby care</option>
                          <option value="fruit">Fruits</option>
                          <option value="mens">Mens</option>
                          <option value="health">Health</option>
                          <option value="sports">Sports</option>
                          <option value="education">Education</option>
                          <option value="electricals">Electricals</option>
                          <option value="auto">Automobilers</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="pro-fil-sub">
                    <h4>
                      <span>
                        <FontAwesomeIcon
                          className="icon-product"
                          icon={faLayerGroup}
                        />
                      </span>
                      Sub category
                    </h4>
                    <div className="filt-com sub_cat_section ">
                      <ul className="checkbox-list">
                        {checkboxData.map(({ id, subcate, label }) => (
                          <li key={id}>
                            <div className="chbox">
                              <input
                                type="checkbox"
                                className="sub_cat_check"
                                name={subcate}
                                value={subcate}
                                id={id}
                                onChange={(event) =>
                                  filterBySubCategory(event.target.value)
                                }
                              />
                              <label htmlFor={id}>{label}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pro-fil-sub">
                    <h4>
                      <span>
                        <FontAwesomeIcon
                          className="icon-product"
                          icon={faHandHoldingDollar}
                        />
                      </span>
                      Price
                    </h4>
                    <div className="filt-com sub_cat_section ">
                      <ul className="checkbox-list">
                        {/* Render price checkboxes dynamically */}
                        {priceData.map(({ id, range, label }) => (
                          <li key={id}>
                            <div className="chbox">
                              <input
                                type="checkbox"
                                className="price_check"
                                name={id}
                                value={range}
                                id={id}
                                onChange={(event) => {
                                  if (event.target.value === "custom") {
                                    const customRange = prompt(
                                      "Enter custom price range (e.g., 100 - 200)"
                                    );
                                    if (customRange) {
                                      filterByPrice(customRange);
                                    }
                                  } else {
                                    filterByPrice(event.target.value);
                                  }
                                }}
                              />

                              <label htmlFor={id}>{label}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pro-fil-sub">
                    <h4>
                      <span>
                        <FontAwesomeIcon
                          className="icon-product"
                          icon={faTag}
                        />
                      </span>
                      Discounts
                    </h4>
                    <div className="filt-com sub_cat_section ">
                      <ul className="checkbox-list">
                        {discountData.map(({ id, range, label }) => (
                          <li key={id}>
                            <div className="chbox">
                              <input
                                type="checkbox"
                                className="discount_check"
                                name={id}
                                value={range}
                                id={id}
                                onChange={(event) => {
                                  filterByDiscount(event.target.value);
                                }}
                              />

                              <label htmlFor={id}>{label}</label>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
               <div className="class">
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
                          <label htmlFor="lfv2-tru" onClick={handleShowFeature}>
                            Price
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
                          <label htmlFor="lfv2-near" onClick={handleShowRating}>
                            Discount
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="all-list-sh all-product-total">
                  <ul>
                    {filterDat.map((product) => (
                      <li key={product.id}>
                        <div className="all-pro-box">
                          <Link to="/products-inner" className="pro-view-full">
                            <div className="all-pro-img">
                              <img src={product.image} alt={product.name} />
                            </div>
                            <div className="all-pro-txt">
                              <h4>{product.name}</h4>
                              <span className="pri">
                                <b className="pro-off">{product.price}</b>
                                {product.discount}
                              </span>
                              <div className="links">
                                <Link onClick={() => togglePopup()}>
                                  Get quote
                                </Link>
                              </div>
                            </div>
                          </Link>
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
          <div className="category-container">
            <h4>
              <span>
                <FontAwesomeIcon className="icon-product" icon={faList} />
              </span>
              Categories
            </h4>
            <div className="dropdown-container">
              <select
                className="category-select"
                onChange={(e) => filterByCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="cloth">Clothings</option>
                <option value="foot">Footwear</option>
                <option value="shoes">Shoes</option>
                <option value="jewel">Jewellery</option>
                <option value="toys">Toys</option>
                <option value="baby">Baby care</option>
                <option value="fruit">Fruits</option>
                <option value="mens">Mens</option>
                <option value="health">Health</option>
                <option value="sports">Sports</option>
                <option value="education">Education</option>
                <option value="electricals">Electricals</option>
                <option value="auto">Automobilers</option>
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
          <div className="pro-fil-sub">
            <h4>
              <span>
                <FontAwesomeIcon className="icon-product" icon={faLayerGroup} />
              </span>
              Sub category
            </h4>
            <div className="filt-com sub_cat_section ">
              <ul className="checkbox-list">
                {checkboxData.map(({ id, subcate, label }) => (
                  <li key={id}>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="sub_cat_check"
                        name={subcate}
                        value={subcate}
                        id={id}
                        onChange={(event) =>
                          filterBySubCategory(event.target.value)
                        }
                      />
                      <label htmlFor={id}>{label}</label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
          <div className="pro-fil-sub">
            <h4>
              <span>
                <FontAwesomeIcon
                  className="icon-product"
                  icon={faHandHoldingDollar}
                />
              </span>
              Price
            </h4>
            <div className="filt-com sub_cat_section ">
              <ul className="checkbox-list">
                {/* Render price checkboxes dynamically */}
                {priceData.map(({ id, range, label }) => (
                  <li key={id}>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="price_check"
                        name={id}
                        value={range}
                        id={id}
                        onChange={(event) => {
                          if (event.target.value === "custom") {
                            const customRange = prompt(
                              "Enter custom price range (e.g., 100 - 200)"
                            );
                            if (customRange) {
                              filterByPrice(customRange);
                            }
                          } else {
                            filterByPrice(event.target.value);
                          }
                        }}
                      />

                      <label htmlFor={id}>{label}</label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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
          <div className="pro-fil-sub">
            <h4>
              <span>
                <FontAwesomeIcon className="icon-product" icon={faTag} />
              </span>
              Discounts
            </h4>
            <div className="filt-com sub_cat_section ">
              <ul className="checkbox-list">
                {discountData.map(({ id, range, label }) => (
                  <li key={id}>
                    <div className="chbox">
                      <input
                        type="checkbox"
                        className="discount_check"
                        name={id}
                        value={range}
                        id={id}
                        onChange={(event) => {
                          filterByDiscount(event.target.value);
                        }}
                      />

                      <label htmlFor={id}>{label}</label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      <MyBusiness />
    </>
  );
};

export default Products;
