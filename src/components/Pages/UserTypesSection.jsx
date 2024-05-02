import React from 'react';
import { Link } from 'react-router-dom';
import user from  "../Assets/user-type.webp"

const UserTypesSection = () => {
    return (
        <section className="login-reg user-type">
            <div className="container">
                <div className="row">
                    <div className="user-tcon">
                        <div className="user-tc-img">
                            <img loading="lazy" src={user} alt="" />
                        </div>
                        <div className="user-tc-diff">
                            <ul>
                                <li>
                                    <div className="pri-box">
                                        <div className="c6">
                                            <img loading="lazy" src="images/icon/service.webp" alt="" />
                                            <h4>SERVICE PROVIDER CAN</h4>
                                        </div>
                                        <div className="c4">
                                            <ol>
                                                <li>User dashboard</li>
                                                <li>Profile page</li>
                                                <li>Reviews</li>
                                                <li>Like listings</li>
                                                <li>Get quote &amp; send enquiry</li>
                                                <li>Followings</li>
                                                <li>Notifications</li>
                                                <li>Create new listing</li>
                                            </ol>
                                        </div>
                                        <div className="c5">
                                            <Link to="login">Get Start</Link>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="pri-box">
                                        <div className="c6">
                                            <img loading="lazy" src="images/icon/general.webp" alt="" />
                                            <h4>GENERAL USERS CAN</h4>
                                        </div>
                                        <div className="c4">
                                            <ol>
                                                <li>User dashboard</li>
                                                <li>Profile page</li>
                                                <li>Reviews</li>
                                                <li>Followings</li>
                                                <li>Post your Ads</li>
                                                <li className="no">Lead management</li>
                                                <li className="no">Payment invoices</li>
                                                <li className="no">Manage listing, event &amp; blogs</li>
                                            </ol>
                                        </div>
                                        <div className="c5">
                                            <Link to="login">Get Start</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserTypesSection;
