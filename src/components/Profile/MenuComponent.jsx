import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "../Assets/icon/home.webp";
import shop from "../Assets/icon/db20.webp";
import calender from "../Assets/icon/tick.webp";
import cart from "../Assets/icon/db22.webp";
import blog1 from "../Assets/icon/db24.webp";

function MenuComponent() {
  const [loc, setLoc] = useState();
  const [sessions, setsessions] = useState(false);
  useEffect(() => {
    const username = localStorage.getItem("userName");

    if (username) {
      console.log("fff");
      setsessions(false);
    } else {
      setsessions(true);
    }
  }, []);

  useEffect(() => {
    const loc = localStorage.getItem("location");
    console.log(JSON.parse(loc));
    //  setLoc = JSON.parse(loc);
    setLoc(JSON.parse(loc));
    console.log(JSON.parse(loc));
  }, []);

  return (
    <div className="fqui-menu">
      <ul>
        <li>
          <Link to="/">
            <img src={home} alt="Home" />
            Home
          </Link>
        </li>

        <li>
          <Link
            to={`${
              (loc?.county == ""
                ? loc?.city
                : loc?.county?.replace(/\s+/g, "")) ||
              (loc?.Name == "NA" ? loc?.State : loc?.Name?.replace(/\s+/g, ""))
            }/services`}
          >
            <img src={shop} alt="Services" />
            Services
          </Link>
        </li>
        <li>
        {sessions ? (
  <>
  
     <Link
            to={`/${
              (loc?.county == ""
                ? loc?.city
                : loc?.county?.replace(/\s+/g, "")) ||
              (loc?.Name == "NA"
                ? loc?.State
                : loc?.Name?.replace(/\s+/g, ""))
            }/user-login/sign`}
          >
            <img src={calender} alt="Events" />
            Leads
          </Link>
  </>
) : (
  <>
     <Link
            to={`${
              (loc?.county == ""
                ? loc?.city
                : loc?.county?.replace(/\s+/g, "")) ||
              (loc?.Name == "NA" ? loc?.State : loc?.Name?.replace(/\s+/g, ""))
            }/lead`}
          >
            <img src={calender} alt="Events" />
            Leads
          </Link>
  </>
)}
        </li>
        <li>
          <Link
            to={`${
              (loc?.county == ""
                ? loc?.city
                : loc?.county?.replace(/\s+/g, "")) ||
              (loc?.Name == "NA" ? loc?.State : loc?.Name?.replace(/\s+/g, ""))
            }/products`}
          >
            <img src={cart} alt="Products" />
            Products
          </Link>
        </li>
       
        <li>
          <Link
            to={`${
              (loc?.county == ""
                ? loc?.city
                : loc?.county?.replace(/\s+/g, "")) ||
              (loc?.Name == "NA" ? loc?.State : loc?.Name?.replace(/\s+/g, ""))
            }/blogs`}
          >
            <img src={blog1} alt="Blogs" />
            Blogs
          </Link>
        </li>
      
      </ul>
    </div>
  );
}

export default MenuComponent;


