import React from "react";
import Left from "./Left";
import Right from "./right";

const Setting = () => {
 
    const settingData = [
        { label: 'Account status', name: 'setting_user_status', options: ['Active', 'In-Active', 'Close account'] },
        { label: 'Listing reviews', name: 'setting_review', options: ['Active', 'In-Active'] },
        { label: 'Listing share', name: 'setting_share', options: ['Active', 'In-Active'] },
        { label: 'Show my profile on listing page', name: 'setting_profile_show', options: ['Active', 'In-Active'] }
      ];
  return (
    <>
      <div className="dashboard-main">
        <div className="dashboard-container">
            <div className="dashboard-left"  >
              <Left />
            </div>
            <div className="dashboard-center">
            <div className="ud-cen">
        <div className="log-bor">&nbsp;</div>
        <span className="udb-inst">Setting</span>
        <div className="ud-cen-s2 ud-sett">
          <h2>Profile Setting</h2>
          <form id="setting_update" name="setting_update" action="" method="post" encType="multipart/form-data">
            <div className="log-error">
              <p style={{ display: 'none' }} className="delete-message-box">Close Account will Delete your account permanently!! Think before submitting!!</p>
            </div>
            <table className="responsive-table bordered">
              <tbody>
                {settingData.map((setting, index) => (
                  <tr key={index}>
                    <td>{setting.label}</td>
                    <td>:</td>
                    <td>
                        <select name={setting.name} className="form-class">
                          {setting.options.map((option, index) => (
                            <option key={index} value={index}>{option}</option>
                          ))}
                        </select>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <button type="submit" name="setting_update_submit" className="sub-btn">Save changes</button>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </form>
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

export default Setting;
