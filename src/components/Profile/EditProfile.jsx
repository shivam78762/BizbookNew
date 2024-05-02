import React,{useState} from 'react'
import Left from './Left';
import Right from './right';
import { Link } from 'react-router-dom';



const EditProfile = () => {
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('5522114422');
    const [city, setCity] = useState('Sydney');
    const [facebook, setFacebook] = useState('https://www.facebook.com/53themes');
    const [twitter, setTwitter] = useState('https://twitter.com/53themes');
    const [youtube, setYoutube] = useState('https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg');
    const [website, setWebsite] = useState('www.rn53themes.net');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add logic here to handle form submission, such as sending data to server
    };
  
  return (
    <>
          <div className="dashboard-main">
        <div className="dashboard-container">
            <div className="dashboard-left" >
              <Left />
            </div>
            <div className="dashboard-center">
            <div className="ud-cen">
      <div className="log-bor">&nbsp;</div>
      <span className="udb-inst">Edit User Profile</span>
      <div className="ud-cen-s2 ud-pro-edit">
        <h2>Profile Details</h2>
        <form onSubmit={handleSubmit} id="profile_update" name="profile_update" action="" method="post" encType="multipart/form-data">
          <input type="hidden" value="62736rn53themes.png" autoComplete="off" name="profile_image_old" id="profile_image_old" required className="validate" />
          <input type="hidden" value="5f4dcc3b5aa765d61d8327deb882cf99" autoComplete="off" name="password_old" id="password_old" required className="validate" />
          <table className="responsive-table bordered">
            <tbody>
              <tr>
                <td>Name</td>
                <td>Rn53 Themes</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>rn53themes@gmail.com</td>
              </tr>
              <tr>
                <td>Profile Password</td>
                <td>
                  <div className="form-group">
                    <input type="text" className="form-control" name="password" placeholder="Change password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>
                  <div className="form-group">
                    <input type="text" name="mobile_number" className="form-control" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Profile Picture</td>
                <td>
                  <div className="form-group">
                    <input type="file" name="profile_image" className="form-control" />
                  </div>
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <div className="form-group">
                    <input type="text" id="select-city" className="autocomplete form-control" name="user_city" value={city} onChange={(e) => setCity(e.target.value)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Join date</td>
                <td>26, Mar 2021</td>
              </tr>
              <tr>
                <td>Verified</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Premium service provider</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>
                  <div className="form-group">
                    <input type="text" className="form-control" name="user_facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>
                  <div className="form-group">
                    <input type="text" className="form-control" name="user_twitter" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Youtube</td>
                <td>
                  <div className="form-group">
                    <input type="text" className="form-control" name="user_youtube" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                  </div>
                </td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <div className="form-group">
                    <input type="text" className="form-control" name="user_website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                  </div>
                </td>
              </tr>
             
              
            </tbody>
          </table>
                  <button type="submit" name="profile_update_submit" className="db-pro-bot-btn">Save Changes</button> <Link to="db-payment" className="db-pro-bot-btn">Upgrade</Link>
        </form>
      </div>
    </div>
            </div>
              <div className="dashboard-right">
                <Right />
              </div>
          </div>
        </div>
    </>
  )
}

export default EditProfile
