import React, { useEffect, useState } from "react";
import { RiUserFill, RiPhoneFill, RiMailFill } from "react-icons/ri";
import blog2 from "../Assets/blogs/blog2.webp";
import user3 from "../Assets/user/7.webp";
import ShareProfile from "../Profile/ShareProfile";
import icon from "../Assets/icon/next.webp";
import { Link } from "react-router-dom";

const BlogInner = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const posts = [
    "SPA and facial for free",
    "Full body massage",
    "50% offer today",
    "Benefits of massage",
    "Advantages of daily workout",
    "SPA and facial for free",
    "Full body massage",
    "50% offer today",
    "Benefits of massage",
    "Advantages of daily workout",
    "SPA and facial for free",
    "Full body massage",
    "50% offer today",
    "Benefits of massage",
    "Advantages of daily workout",
    "Advantages of daily workout",
    "Advantages of daily workout",
    "Advantages of daily workout",
    "Advantages of daily workout",
    "Advantages of daily workout",
  ];

  const [loc, setLoc] = useState();

  useEffect(()=>{
    const loc = localStorage.getItem("location")
      console.log(JSON.parse(loc))
    //  setLoc = JSON.parse(loc);
    setLoc( JSON.parse(loc))
    console.log(JSON.parse(loc))

  },[])
  const filteredPosts = posts.filter((post) =>
    post.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };
  return (
    <>
      <section className="eve-deta-pg">
        <div className="container">
          <div className="eve-deta-pg-main">
            <div className="lhs">
              <div className="img">
                <img src={blog2} alt="" />
              </div>
              <div className="head">
                <span className="dat">
                  <b>Jan</b> 07
                </span>
                <h1>12 Days Fitness Chanllege</h1>
              </div>
            </div>
            <div className="rhs">
              <div className="list-rhs-form pglist-bg pglist-p-com">
                <div className="quote-pop">
                  <h3>Register Now</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group ic-icon">
                      <RiUserFill />
                      <input
                        type="text"
                        name="enquiry_name"
                        required="required"
                        className="form-control"
                        placeholder="Enter name*"
                      />
                    </div>
                    <div className="form-group ic-icon">
                      <RiPhoneFill />
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email*"
                        required="required"
                        pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][Link-zA-Z]{2,}|[.][\w-]{2,}[.][Link-zA-Z]{2,})$"
                        title="Invalid email address"
                      />
                    </div>
                    <div className="form-group ic-icon">
                      <RiMailFill />
                      <input
                        type="text"
                        className="form-control"
                        name="enquiry_mobile"
                        placeholder="Enter mobile number *"
                        pattern="[7-9]{1}[0-9]{9}"
                        title="Phone number starting with 7-9 and remaing 9 digit with 0-9"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="3"
                        name="enquiry_message"
                        placeholder="Enter your query or message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      name="enquiry_submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="eve-deta-body">
        <div className="container">
          <div className="eve-deta-body-main">
          <div class="lhs">
					<p>Celebrate as the sights, sounds and aromas of Asia come alive during this local San Diego festival thatâ€™s fit for the whole family happening weekends January 11, 2020 - February 2, 2020 (to include Monday, January 20, 2020.)</p>
					<p>You wonâ€™t want to miss SeaWorld San Diegoâ€™s one-of-a-kind Lunar New Year celebration, featuring an incredible Chinese acrobats show, local performers, and delicious culinary delights. Dig into the Asian-inspired offerings of Ramen, Lo Mein, Bao Buns, Dim Sum, rice dishes and more.</p>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
				</div>
            <div className="rhs">
              <div className="sec-3">
                <div className="ud-lhs-s1">
                  <img src={user3} alt="" />
                  <h4>Claude D Dial</h4>
                  <b>Joined on 07, Jan 2020</b>
                  <Link to="/gallary" className="fclick">
                    &nbsp;
                  </Link>
                </div>
              </div>
              <div className="sec-5">
                <h4>Other posts</h4>
                <input
                  type="text"
                  id="pg-sear"
                  placeholder="Search all posts.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul id="pg-resu">
                  {filteredPosts.map((post, index) => (
                    <li key={index}>
                      <Link to="#"><img className="arrow-right" src={icon} alt="" />{post}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <ShareProfile />
        </div>
      </section>
    </>
  );
};

export default BlogInner;
