import React from 'react'
import { Link } from 'react-router-dom'
import social3 from "../Assets/social/3.webp";
import social2 from "../Assets/social/2.webp";
import social1 from "../Assets/social/1.webp";
import social6 from "../Assets/social/6.webp";

const ShareProfile = () => {
  return (
    <>
          <div className="pro-bot-shar">
                    <h4>Share this profile</h4>
                    <ul>
                      <li>
                        <div className="sh-pro-shar sh-pro-face">
                          <Link target="_blank" to="">
                            <img src={social3} alt="" />
                            Facebook
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="sh-pro-shar sh-pro-twi">
                          <Link target="_blank" to="">
                            <img src={social2} alt="" />
                            Twitter
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="sh-pro-shar sh-pro-what">
                          <Link target="_blank" to="">
                            <img
                              src={social6}
                              style={{ width: "16px" }}
                              alt=""
                            />
                            WhatsApp
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="sh-pro-shar sh-pro-link">
                          <Link target="_blank" to="">
                            <img src={social1} alt="" />
                            Linkedin
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
    </>
  )
}

export default ShareProfile
