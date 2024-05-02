import React from "react";
import Left from "./Left";
import Right from "./right";
import { Link } from "react-router-dom";

const Summary = () => {
  const summaryData = [
    {
      id: 1,
      position: "Home page Bottom",
      startDate: "31, Mar 2021",
      endDate: "29, Apr 2021",
      duration: "0 Days",
      status: "InActive",
      views: "1k",
      clicks: "642",
    },
    {
      id: 2,
      position: "All listing page Top",
      startDate: "17, Jun 2020",
      endDate: "30, Jun 2022",
      duration: "743 Days",
      status: "Active",
      views: "1k",
      clicks: "642",
    },
    {
      id: 3,
      position: "Listing detail page Bottom",
      startDate: "03, Jun 2020",
      endDate: "23, Jul 2020",
      duration: "50 Days",
      status: "Active",
      views: "1k",
      clicks: "642",
    },
  ];

  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center">
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">Paid ads</span>
              <div className="ud-cen-s2">
                <h2>Your Banner Ads</h2>
                <Link
                  to="/ads-form"
                  className="db-tit-btn db-tit-btn-2-ads"
                >
                  Post your Ads
                </Link>
                <Link to="/ads-pricing" className="db-tit-btn">
                  Pricing and other details
                </Link>
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Ads Position</th>
                      <th>Start date</th>
                      <th>End date</th>
                      <th>Duration</th>
                      <th>Status</th>
                      <th>Views</th>
                      <th>Clicks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summaryData.map((ad) => (
                      <tr key={ad.id}>
                        <td>{ad.id}</td>
                        <td>{ad.position}</td>
                        <td>{ad.startDate}</td>
                        <td>{ad.endDate}</td>
                        <td>{ad.duration}</td>
                        <td>
                          <span className="db-list-ststus">{ad.status}</span>
                        </td>
                        <td>
                          <span className="db-list-rat">{ad.views}</span>
                        </td>
                        <td>
                          <span className="db-list-rat">{ad.clicks}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="ud-notes">
                  <p>
                    <b>Notes:</b> Hi, Before start "Ads Payment" you must know
                    the pricing details and positions and all. You just click
                    the "Pricing and other details" button in this same page and
                    you know the all details. If your payment done means your
                    invoice automatically received your "Payment invoice" page
                    and you never stop your Ads till the end date.
                  </p>
                </div>
              </div>
            </div>
            </div>
            <div className="dashboard-right">
              <Right />
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Summary;
