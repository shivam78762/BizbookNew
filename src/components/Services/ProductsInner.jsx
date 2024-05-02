import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import product1 from "../Assets/products/1.webp";
import product4 from "../Assets/products/4.webp";
import product5 from "../Assets/products/5.webp";
import user3 from "../Assets/user/3.webp";
import Slider from 'react-slick';
// import social3 from "../Assets/social/3.png";
// import social2 from "../Assets/social/2.png";
// import social1 from "../Assets/social/1.png";
// import social6 from "../Assets/social/6.png";
import { RiArrowRightSFill } from "react-icons/ri";
import MyBusiness from "./MyBusiness";

const ProductsInner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  const [loc, setLoc] = useState();

  useEffect(()=>{
    const loc = localStorage.getItem("location")
      console.log(JSON.parse(loc))
    //  setLoc = JSON.parse(loc);
    setLoc( JSON.parse(loc))
    console.log(JSON.parse(loc))

  },[])
  return (
    <>
      <section>
        <div className="all-list-bre all-pro-bre">
          <div className="container sec-all-list-bre">
            <div className="row">
              <div className="product-text">
                <h1>Electronics</h1>
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
      }/products`}>All category</Link>
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
     
      <section className="biz-pro">
        <div className="container">
          <div className="biz-pro-row">
          <div className="row">

            <div className="col-md-5 lhs">
              <div className="bpro-sli">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  {/* The slideshow */}
                  <div className="carousel-inner">
                        <Slider {...settings}>
                    <div className="carousel-item active">
                      <img src={product5} alt="" />
                    </div>
                    <div className="carousel-item">
                      <img src={product4} alt="" />
                    </div>
                    <div className="carousel-item">
                      <img src={product1} alt="" />
                    </div>
                  </Slider>
                  </div>
                  {/* Left and right controls */}
                  <Link
                    className="carousel-control-prev"
                    to="#demo"
                    data-slide="prev"
                  >
                    <span className="carousel-control-prev-icon"></span>
                  </Link>
                  <Link
                    className="carousel-control-next"
                    to="#demo"
                    data-slide="next"
                  >
                    <span className="carousel-control-next-icon"></span>
                  </Link>
                </div>
              </div>
              <div className="biz-pro-btn">
                <Link
                  to="#"
                  data-toggle="modal"
                  data-target="#quote"
                  className="btn1"
                >
                  Get quote
                </Link>
                <Link
                
                  to="#"
                  className="btn2"
                >
                  Buy now
                </Link>
              </div>
            </div>
            <div className="col-md-7 rhs">
              <div className="pro-pri-box">
                <div className="pro-pbox-2">
                  <span className="veri">Verified</span>
                  <h1>Weight loss digital products</h1>
                  <span className="rat">4.0</span>
                  <span className="pro-cost">
                    $52 <b className="pro-off">20% off</b>
                  </span>
                </div>
                <div className="pro-pbox-3 pro-pbox-com">
                  <h4>Highlights</h4>
                  <ul>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Money back policy
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />1 day delivery
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Best chosen for weight loss
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Loss 10 kg in 7 days
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Improve immunity
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Carry It Along 2 in 1 Laptop
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      12.3 inch Quad HD LED Backlit PixelSense
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      10 Point Multi-touch, 3:2 Aspect Ratio, 267 ppi
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Light Laptop without Optical Disk Drive
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      Windows 10 OS
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />
                      EMI starting from $50/month
                    </li>
                    <li>
                      {" "}
                      <RiArrowRightSFill className="arrow-icon" />1 Year Onsite
                      Warranty
                    </li>
                  </ul>
                </div>
                <div className="pro-pbox-4 pro-pbox-com">
                  <h4>Descriptions</h4>
                  <p>
                    It is Link long-established fact that Link reader will be
                    distracted by the readable content of Link page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    Link more-or-less normal distribution of letters, as opposed
                    to using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and Link search for 'lorem ipsum' will uncover many
                    websites still in their infancy. Various versions have
                    evolved over the years, sometimes by accident, sometimes on
                    purpose (injected humor and the like).
                  </p>
                </div>
                <div className="pro-pbox-5 pro-pbox-com">
                  <h4>Specifications</h4>
                  <ul>
                    <li>
                      <span className="pro-spe-li">Published year</span>:{" "}
                      <span className="pro-spe-po">&nbsp;2020</span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Available</span>:{" "}
                      <span className="pro-spe-po">&nbsp;Yes</span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Sales Package</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp;2 in 1 Laptop, Power Adaptor, User Guide,
                        Warranty Documents
                      </span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Model Number</span>:
                      <span className="pro-spe-po">&nbsp;&nbsp;M1866</span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Part Number</span>:
                      <span className="pro-spe-po">&nbsp;&nbsp;PUV-00028</span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Series</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp;Surface Pro 7
                      </span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Color</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp;Matte Black
                      </span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Type</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp;2 in 1 Laptop
                      </span>
                    </li>
                    <li>
                      <span className="pro-spe-li">Battery Backup</span>:
                      <span className="pro-spe-po">
                        &nbsp;&nbsp;Upto 10.5 hours
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pro-pbox-7 pro-pbox-com">
                  <h4>Tags</h4>
                  <Link to="#">Laptops</Link>
                  <Link to="#">Electronic items</Link>
                  <Link to="#">Products</Link>
                  <Link to="#">Microsoft</Link>
                  <Link to="#">Offers</Link>
                  <Link to="#">Surface</Link>
                </div>
                <div className="pro-pbox-6 pro-pbox-com">
                  <h4>Created by</h4>
                  <div className="ud-lhs-s1">
                    <img src={user3} alt="" />
                    <h4>Claude D Dial</h4>
                    <b>Join on Jan 2020</b>
                    <Link to="/profile"  className="fclick">
                      &nbsp;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      </section>



   
       
<MyBusiness />
    </>
  );
};

export default ProductsInner;
