import React from "react";
import { Link } from "react-router-dom";
import Left from "./Left";
import Right from "./right";


const Profile = () => {

const profileData = [
    { label: 'Profile Expiry(Listing exp)', value: '8 June 2025' },
    { label: 'Name', value: 'Rn53 Themes' },
    { label: 'Email Id', value: 'rn53themes@gmail.com' },
    { label: 'Profile Password', value: '*********' },
    { label: 'Mobile Number', value: '5522114422' },
    { label: 'Profile Picture', value: <img src="images/user/62736rn53themes.png" alt="" /> },
    { label: 'City', value: 'Sydney' },
    { label: 'Join date', value: '26, Mar 2021' },
    { label: 'Verified', value: 'Yes' },
    { label: 'Premium service provider', value: 'Yes' },
    { label: 'Profile Link', value: <Link to="#">profile.html</Link> },
    { label: 'Facebook', value: <Link to="https://www.facebook.com/53themes" target="_blank">https://www.facebook.com/53themes</Link> },
    { label: 'Twitter', value: <Link to="https://twitter.com/53themes" target="_blank">https://twitter.com/53themes</Link> },
    { label: 'Youtube', value: <Link to="https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg" target="_blank">https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg</Link> },
    { label: 'Website', value: 'www.rn53themes.net' }
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
            <span className="udb-inst">User Profile</span>
            <div className="ud-cen-s2">
                <h2>Profile Details</h2>
                <Link to="/edit-profile" className="db-tit-btn">Edit profile page</Link>
                <Link to="/payment" className="db-tit-btn db-tit-btn-1">Upgrade</Link>
                <table className="responsive-table bordered">
                    <tbody>
                        {profileData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.label}</td>
                                <td>{item.value}</td>
                            </tr>
                        ))}
                      
                            
                    </tbody>
                </table>
                                <Link to="/edit-profile" className="db-pro-bot-btn">Edit profile page</Link>
                                <Link to="/payment" className="db-pro-bot-btn">Upgrade</Link>
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

export default Profile;

