import React from 'react';

import user10 from"../Assets/user/10.webp"
import user2 from"../Assets/user/2.webp"
import user4 from"../Assets/user/4.webp"
import user6 from"../Assets/user/6.webp"
import MyBusiness from '../Services/MyBusiness';
import CommonComponent from './CommonComponent';


const About = () => {
  return (
    <>
    <section className="abou-pg">
      <div className="about-ban">
        <h1>About us</h1>
        <p>Injected humourThere are many variations of passages of Lorem Ipsum available</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="about-us">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available.</p>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available.</p>
          </div>
         <CommonComponent />
          <div className="how-wrks how-wrks-2">
            <div className="home-tit-contact">
              <h2><span>Our Team</span></h2>
              <p>Explore some of the best tips from around the world from our<br />partners and friends.lacinia viverra lectus.</p>
            </div>
            <div className="how-wrks-inn abo-memb">
              <ul>
                <li>
                  <div>
                    <img src={user10} alt="" />
                    <h4>John Smith</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={user2} alt="" />
                    <h4>Lusia Ann</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={user4} alt="" />
                    <h4>Mark Luberk</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={user6} alt="" />
                    <h4>Anjalena Juley</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <MyBusiness />
    </>
  );
}

export default About;
