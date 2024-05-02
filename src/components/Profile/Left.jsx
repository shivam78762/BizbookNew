import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CSS/Profile.css";
import icon21 from "../Assets/icon/db11.webp";
import user12 from "../Assets/user/1.webp";
import icon2 from "../Assets/icon/db20.webp"
import icon3 from "../Assets/icon/db13.webp"
import icon4 from "../Assets/icon/tick.webp"
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



const Left = () => {
  const location = useLocation();
  
  const [loc, setLoc] = useState();

  useEffect(()=>{
    const loc = localStorage.getItem("location")
      console.log(JSON.parse(loc))
    //  setLoc = JSON.parse(loc);
    setLoc( JSON.parse(loc))
    console.log(JSON.parse(loc))

  },[])

  const links = [
    
    { imgSrc: icon21 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/dashboard`, text: "My Dashboard" },
    {imgSrc: icon2, to:`/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/listing`, text: "All Listings" },
    {imgSrc:icon3,  to:`/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/newlisting`, text: "Add New Listing" },
    {imgSrc:icon4,  to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/lead`, text: "Lead enquiry" },
    {imgSrc:icon5 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/blog`, text: "Blog posts" },
    {imgSrc:icon6 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/reviews`, text: "Reviews" },
    {imgSrc:icon7 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/profile`, text: "My Profile" },
    {imgSrc:icon8 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/liked`, text: "Liked Listings" },
    {imgSrc:icon9 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/summary`, text: "Ad Summary" },
    {imgSrc:icon10 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/payment`, text: "Payment & plan" },
    {imgSrc:icon11 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/invoice`, text: "Payment invoice" },
    {imgSrc:icon12 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/notification`, text: "Notifications" },
    {imgSrc:icon13 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/how`, text: "How to's" },
    {imgSrc:icon14 , to: `/${
      (loc?.county == "" ? loc?.city : loc?.county?.replace(/\s+/g, "")) || (loc?.Name == "NA"
      ? loc?.State
      : loc?.Name?.replace(/\s+/g, ""))
      }/setting`, text: "Setting" },
    {imgSrc:icon15 , to: "/logout", text: "Log Out" },
   
  ];
   
  const [selectedpath, setSelectedPath] = useState();
  


  useEffect(() => {
    setSelectedPath(location.pathname);

    console.log(location.pathname, "path name");
  }, [location.pathname, setSelectedPath]);

  // Define an array of links data


  

  const [isLoggedIn, setIsLoggedIn] = useState(false);





  return (
    <div className="ud-lhs">
      <div className="ud-lhs-s1">
        <img src={user12} alt="" />
      <Link to="/gallary">   <h4>Rn53 Themes</h4></Link>
        <b>Join on 26, Mar 2021</b>
        {isLoggedIn && (
        <Link
          className="ud-lhs-view-pro"
        
          to="/gallary"
        >
          My profile
        </Link>
        )}
      </div>
      <div className="ud-lhs-s2">
        <ul>
          
          {links?.map((link, index) => (
            <li key={index}>
              <Link
                to={link.to}
                className={selectedpath === link.to ? "db-lact" : "none"}>
                   <img src={link.imgSrc} alt="icon" /> {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Left;
