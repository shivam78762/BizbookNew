import React from "react";
import Left from "./Left";
import Right from "./right";
import { Link } from "react-router-dom";

const Notification = () => {
  const invoiceData = [
    {
      type: 'enquiry',
      name: 'John Doe',
      action: ' Send you an enquiry from your listing',
      listing: ' Sample Listing 1',
      time: '7:27 AM on 26, Apr 2020'
    },
    {
      type: 'review',
      name: 'Jane Smith',
      action: ' Write Link review on your listing',
      listing: ' Sample Listing 2',
      review: 'Great experience, highly recommended!',
      time: '10:58 PM on 12, Mar 2021'
    },
    {
      type: 'like',
      name: ' Alice Johnson',
      action: ' like your listing',
      time: '11:24 AM on 07, Jan 2020'
    },
    {
      type: 'enquiry',
      name: 'Bob Brown',
      action: ' Send you an enquiry from your listing',
      listing: '  Sample Listing 3',
      time: '9:15 AM on 15, Jul 2020'
    },
    {
      type: 'review',
      name: 'Eve Williams',
      action: ' Write Link review on your listing',
      listing: ' Sample Listing 4',
      review: 'Excellent service, will come back again!',
      time: '3:30 PM on 21, Sep 2020'
    },
    {
      type: 'like',
      name: 'Charlie Davis',
      action: ' like your listing',
      time: '5:45 PM on 03, Feb 2021'
    },
    {
      type: 'enquiry',
      name: 'Grace Garcia',
      action: ' Send you an enquiry from your listing',
      listing: ' Sample Listing 5',
      time: '10:10 AM on 19, Dec 2020'
    },
    {
      type: 'review',
      name: 'Alex Martinez',
      action: ' Write Link review on your listing',
      listing: ' Sample Listing 6',
      review: 'Fantastic service, exceeded my expectations!',
      time: '8:20 PM on 05, May 2021'
    },
    {
      type: 'like',
      name: 'Sophia Rodriguez',
      action: ' like your listing',
      time: '2:55 PM on 30, Nov 2020'
    },
    {
      type: 'enquiry',
      name: 'Michael Lee',
      action: ' Send you an enquiry from your listing',
      listing: ' Sample Listing 7',
      time: '4:45 PM on 10, Oct 2020'
    }
  ];
  
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left" >
            <Left />
          </div>
          <div className="dashboard-center"  >
          <div className="ud-cen">
      <div className="log-bor">&nbsp;</div> 
      <span className="udb-inst">Notifications</span>
      <div className="ud-cen-s2">
        <h2>All Notifications</h2>
        <div className="db-noti">
          <ul>
            {invoiceData.map((item, index) => (
              <li key={index}>
                <div>
                  {item.type === 'like' ? (
                    <Link to={`profile/${item.name}`}>{item.name}</Link>
                  ) : (
                    <Link target="_blank" to={`profile/${item.name}`}>{item.name}</Link>
                  )}
                  {item.action}
                  {item.type !== 'like' && (
                    <Link to={`listing/${item.listing}`}>{item.listing}</Link>
                  )}
                </div>
                {item.review && <p>{item.review}</p>}
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
            </div>
            <div className="dashboard-right" >
              <Right />
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Notification;
