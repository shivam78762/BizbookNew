import React from "react";
import { Link } from "react-router-dom";
import community1 from "../Assets/user/1.webp"
import community2 from "../Assets/user/2.webp"
import MyBusiness from "./MyBusiness";


const Community = () => {
  const communityData = [
    { name: "Rn53 themes", image: community1 },
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Mickle", image: community2},
    { name: "Joney deep", image: community1},
    { name: "Rachel", image: community1 },
    { name: "Rachel", image: community1 },
    { name: "Rachel", image: community1 },
  ];
  return (
    <>
      <div className="blog-main blog-community-ban">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <div className="service-main-head">
                <h1>Community</h1>
                <p>
                  Here post your events, seminar, webinar, fetivals and more
                </p>
                <input
                  type="text"
                  className="service-search-container"
                  placeholder="Search event in your city.."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="comity-all-user">
            <ul id="tail-re">
              {communityData.map((user, index) => (
                <li key={index}>
                  <div className="pro-fol-gr">
                    <div className="pro-ful-img">
                      <img src={user.image} alt={user.name} />
                      <h4>
                        <b>{user.name}</b>
                      </h4>
                    </div>
                    <div className="pro-pg-msg">
                    
                      <Link to="/gallary">Follow</Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <MyBusiness />
    </>
  );
};

export default Community;
