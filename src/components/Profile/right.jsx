import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Right = () => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        const timer = setInterval(() => {
            if (count < 60) {
                setCount(prevCount => prevCount + 1);
            } else {
                clearInterval(timer);
            }
        }, 60); // Increment every second
    
        return () => clearInterval(timer); // Cleanup on unmount
    }, [count]); // Only re-run the effect if count changes
    return (
        <div className="ud-rhs">
            <div className="ud-rhs-promo">
                <h3>Promote my business</h3>
                <p>Your listing show on the top of the respective category page</p>
                <Link to="/start-now">Start now</Link>
            </div>

            <div className="ud-rhs-poin">
            <div className="ud-rhs-poin1">
            <h4>Your points</h4>
            <span className="count1">{count}</span>
        </div>
                <div className="ud-rhs-poin2">
                    <h3>Earn more credit points</h3>
                    <p>Use this poins to promote your listing. <Link to="#">Click here</Link> for demo</p>
                    <Link to="/buy-point" className="cta">Buy Points</Link>
                </div>
            </div>

            <div className="ud-rhs-pay">
                <div className="ud-rhs-pay-inn">
                    <h3>Payment Information</h3>
                    <ul>
                        <li><b>Plan name : </b> Premium Plus</li>
                        <li><b>Start date : </b> 26, Mar 2021</li>
                        <li><b>Expiry date : </b> 26, Mar 2031</li>
                        <li><b>Duration : </b> 10 year</li>
                        <li><b>Remaining Days: </b> 3638</li>
                        <li><span className="ud-stat-pay-btn"><b>Checkout cost:</b> $20</span></li>
                        <li><span className="ud-stat-pay-btn"><b>Payment Status:</b> PENDING</span></li>
                    </ul>
                    <Link to="/payment" className="btn btn2">Pay Now</Link>
                </div>
            </div>

            <div className="ud-rhs-pay ud-rhs-repo">
                <div className="ud-rhs-pay-inn">
                    <h3>Last week report</h3>
                    <ul>
                        <li><span className="view">Enquiry</span><span className="cout">00</span><span className="name">Leads</span></li>
                        <li><span className="view">Views</span><span className="cout">02</span><span className="name">Listings</span></li>
                        <li><span className="view">Views</span><span className="cout">00</span><span className="name">Events</span></li>
                        <li><span className="view">Views</span><span className="cout">01</span><span className="name">Blogs</span></li>
                        <li><span className="view">Views</span><span className="cout">00</span><span className="name">Products</span></li>
                        <li><span className="cout">00</span><span className="name">Messages</span></li>
                    </ul>
                </div>
            </div>

    
            <div className="ud-rhs-promo ud-rhs-promo-1">
                <h3>Community members</h3>
                <p>Follow your favorite business users and grow your online business now.</p>
                <Link to="/community">Community</Link>
            </div>

        </div>
    );
}

export default Right;
