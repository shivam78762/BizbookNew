import React from "react";
import images from "../Assets/ads/ad-size.webp";
import { Link } from "react-router-dom";
const AdsDetails = () => {
  // Array of ad details
  const ads = [
    {
      id: 1,
      name: "Home page Bottom",
      preview: images,
      size: "728 X 90 px",
      cost: "70$",
      link: "/ads-form",
    },
    {
      id: 2,
      name: "All listing page Top",
      preview: images,
      size: "728 X 90 px",
      cost: "50$",
      link: "/ads-form",
    },
    {
      id: 3,
      name: "All listing page Bottom",
      preview: images,
      size: "728 X 90 px",
      cost: "20$",
      link: "/ads-form",
    },
    {
      id: 4,
      name: "All listing page Left",
      preview: images,
      size: "300 X 300 px",
      cost: "70$",
      link: "/ads-form",
    },
    {
      id: 5,
      name: "Listing detail page Right",
      preview: images,
      size: "300 X 300 px",
      cost: "20$",
      link: "/ads-form",
    },
    {
      id: 6,
      name: "Listing detail page Bottom",
      preview:images,
      size: "728 X 90 px",
      cost: "40$",
      link: "/ads-form",
    },
  ];

  return (
    <section className="login-reg">
      <div className="container">
        <div className="row">
          <div className="login-main add-list ad-table">
            <div className="log-bor">&nbsp;</div>
            <span className="steps">Ad details</span>
            <div className="ad-table-inn ud-cen-s2">
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Ads Name</th>
                    <th>Ads Preview</th>
                    <th>Ads Size</th>
                    <th>Cost P/Day</th>
                    <th>Start Ads</th>
                  </tr>
                </thead>
                <tbody>
                  {ads.map((ad) => (
                    <tr key={ad.id}>
                      <td>{ad.id}</td>
                      <td>{ad.name}</td>
                      <td>
                        <img src={ad.preview} alt="" />
                      </td>
                      <td>{ad.size}</td>
                      <td>{ad.cost}</td>
                      <td>
                        <Link to={ad.link} className="db-list-rat">
                          Post your Ads
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsDetails;
