import React from 'react'
import image1 from "../Assets/icon/how1.webp"
import image2 from "../Assets/icon/how2.webp"
import image3 from "../Assets/icon/how3.webp"
import image4 from "../Assets/icon/how4.webp"

const CommonComponent = () => {
  return (
    <>
       <div className="how-wrks">
            <div className="home-tit-contact">
              <h2><span>Why Choose Us</span></h2>
              <p>Explore some of the best tips from around the world from our<br />partners and friends.lacinia viverra lectus.</p>
            </div>
            <div className="how-wrks-inn">
              <ul>
                <li>
                  <div>
                    <span>1</span>
                    <img src={image1} alt="" />
                    <h4>Google indexing</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span>2</span>
                    <img src={image2} alt="" />
                    <h4>More popular</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span>3</span>
                    <img src={image3} alt="" />
                    <h4>Get more leads</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
                <li>
                  <div>
                    <span>4</span>
                    <img src={image4} alt="" />
                    <h4>Archive goles</h4>
                    <p>Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
    </>
  )
}

export default CommonComponent
