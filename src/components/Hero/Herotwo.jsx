import React, { useEffect, useState } from "react";
import hotel from "../Assets/hotel.webp";
import gym from "../Assets/gym.webp";
import shopping from "../Assets/shopping.webp";
import travel from "../Assets/travel.webp";
import electronics from "../Assets/electronics.webp";
import furniture from "../Assets/furniture.webp";
import resort from "../Assets/resort.webp";
import health from "../Assets/health.webp";
import fitness from "../Assets/fitness.webp";
import education from "../Assets/education.webp";
import real from "../Assets/real.webp";
import menu from "../Assets/icon/ic-4.webp";
import ecommerce from "../Assets/ecommerce.webp";
import { Link } from "react-router-dom";

const initialCategories = [
  { link: "/gym", icon: gym, title: "Gym", count: 1 },
  { link: "/hotel", icon: hotel, title: "Hotel", count: 0 },
  { link: "/shopping", icon: shopping, title: "Shopping", count: 2 },
  { link: "/travel", icon: travel, title: "Travel Agency", count: 2 },
  {
    link: "/electronics",
    icon: electronics,
    title: "Electronics",
    count: 2,
  },
  { link: "/furniture", icon: furniture, title: "Furniture", count: 1 },
  { link: "/resort", icon: resort, title: "Resort", count: 0 },
  { link: "/medical", icon: health, title: "Medical", count: 1 },
  { link: "/fitness", icon: fitness, title: "Fitness", count: 1 },
  { link: "/education", icon: education, title: "Education", count: 1 },
  { link: "/realestate", icon: real, title: "Real State", count: 1 },
  { link: "/ecommerce", icon: ecommerce, title: "E-Commerce", count: 1 },
];

const Herotwo = () => {
  const [categories, setCategories] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(3); // Initially show 3 categories
  const [viewAll, setViewAll] = useState(false);

  const [loc, setLoc] = useState();

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCategories(initialCategories.slice(0, visibleIndex));
  }, [visibleIndex]);

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 767) {
      setVisibleIndex(7); // Mobile, show 3 cards
    } else if (width <= 991) {
      setVisibleIndex(5); // Tablet, show 5 cards
    } else {
      setVisibleIndex(7); // Laptop and above, show 7 cards
    }
  };

  const handleViewAllClick = () => {
    setViewAll(true);
  };

  const visibleCategories = viewAll ? initialCategories : categories;

  return (
    <section className="category-section category-main-hero">
      <div className="container">
        <div className="row g-3 g-lg-4">
          {/* Map over the visible categories */}
          {visibleCategories.map((category, index) => (
            <div key={index} className="col-xl-3 col-md-6 col-3">
              <Link
                to={`${
                  (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
                  ? loc?.State
                  : loc?.Name?.replace(/\s+/g, ""))
                }${category.link}`}
              >
                <div className="category-box">
                  <div className="icon-box">
                    <img src={category.icon} alt="" />
                  </div>
                  <div>
                    <h5>{category.title}</h5>
                    <span>{category.count} Listings</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {/* Show View All button after the third category if not already viewing all */}
          {!viewAll && (
            <div className="col-xl-3 col-md-6 col-3">
              <div className="category-box" onClick={handleViewAllClick}>
                <div className="icon-box">
                  <img src={menu} alt="" />
                </div>
                <div>
                  <h5>View All</h5>
                  <span>Categories</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Herotwo;
