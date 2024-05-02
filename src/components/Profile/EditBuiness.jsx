import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const EditBuiness = () => {
    const [formData, setFormData] = useState({
        company_name: 'Rn53 Themes net',
        company_address: 'Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A',
        company_mobile: '8765768675',
        company_email_id: 'rn53themes@gmail.com',
        company_website: 'www.rn53themes.net',
        company_tax: 'TX6543 HYG76',
        company_facebook: 'https://www.facebook.com/53themes',
        company_twitter: 'https://twitter.com/53themes',
        company_linkedin: '',
        company_instagram: '',
        company_youtube: 'https://www.youtube.com/channel/UC3wN3O2GXTt7ZZniIoMZumg',
        company_whatsapp: '98769876987',
        company_description: 'Official website of Rn53 Themes...',
        company_header_photo: null,
        company_banner_photo: null,
        company_logo: null,
        company_products: ['8 x 4 Metal Trailer - Exc Tyres'],
        company_events: ['Digital Marketing Seminar 2020'],
        company_blogs: ['Digital Marketing'],
        company_seo_description: 'Official website of Rn53 Themes, Affiliated to Themeforest...',
        company_seo_keywords: 'rn53 themes, html templates bootstrap...',
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Your form submission logic here
        console.log(formData); // Example: you can log form data to the console
      };
    
      const handleChange = (e) => {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
      };
  return (
    <>
      <section className="login-reg edit-comp-pro">
      <div className="container">
        <div className="row">
          <div className="login-main add-list">
            <div className="log-bor">&nbsp;</div> <span className="steps">Company profile</span>
            <div className="log">
              <div className="login add-list-off comp-pro-edit">
                <h4>Edit company profile</h4>
                <form onSubmit={handleSubmit} className="company_profile_form" id="company_profile_form" name="company_profile_form" encType="multipart/form-data">
                  <div className="form-group">
                    <input type="text" name="company_name" value={formData.company_name} onChange={handleChange} required className="form-control" placeholder="Company name" />
                  </div>
                  <div className="form-group">
                    <input type="text" name="company_address" value={formData.company_address} onChange={handleChange} required className="form-control" placeholder="Address" />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_mobile" value={formData.company_mobile} onChange={handleChange} required className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_email_id" value={formData.company_email_id} onChange={handleChange} required className="form-control" placeholder="Email id" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_website" value={formData.company_website} onChange={handleChange} className="form-control" placeholder="Website" />
                      </div>
                    </div>
                  </div>
                  <h6>Tax Details:</h6>
                  <div className="form-group">
                    <input type="text" name="company_tax" value={formData.company_tax} onChange={handleChange} className="form-control" placeholder="Tax No./ GST No." />
                  </div>
                  <h6>Social media:</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_facebook" value={formData.company_facebook} onChange={handleChange} className="form-control" placeholder="Facebook profile" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_twitter" value={formData.company_twitter} onChange={handleChange} className="form-control" placeholder="Twitter profile" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_linkedin" value={formData.company_linkedin} onChange={handleChange} className="form-control" placeholder="Linkedin profile" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_instagram" value={formData.company_instagram} onChange={handleChange} className="form-control" placeholder="Instagram profile" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_youtube" value={formData.company_youtube} onChange={handleChange} className="form-control" placeholder="Youtube profile" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="company_whatsapp" value={formData.company_whatsapp} onChange={handleChange} className="form-control" placeholder="WhatsApp No" />
                      </div>
                    </div>
                  </div>
                  <h6>About company:</h6>
                  <div className="form-group">
                    <textarea name="company_description" value={formData.company_description} onChange={handleChange} className="form-control" placeholder="Product Details" />
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Header top logo(size 200X35):</label>
                      <div className="form-group">
                        <input type="file" name="company_header_photo" onChange={handleChange} className="form-control" accept="image/png, image/jpeg" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Banner logo(size 200X35):</label>
                      <div className="form-group">
                        <input type="file" name="company_banner_photo" onChange={handleChange} className="form-control" accept="image/png, image/jpeg" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label>Banner background(size 250X250):</label>
                      <div className="form-group">
                        <input type="file" name="company_logo" onChange={handleChange} className="form-control" accept="image/png, image/jpeg" />
                      </div>
                    </div>
                  </div>
                  <h6>Choose Products:</h6>
                  <div className="form-group">
                    <select multiple name="company_products" value={formData.company_products} onChange={handleChange} className="form-control">
                      <option value="36">Audi q3</option>
                      <option value="34">WHIRLPOOL FRIDGE</option>
                      <option value="33">DELL</option>
                      {/* Add other options */}
                    </select>
                  </div>
                  <h6>Choose events:</h6>
                  <div className="form-group">
                    <select multiple name="company_events" value={formData.company_events} onChange={handleChange} className="form-control">
                      <option value="48">CHAMPIONS OF INDIA RUN-RIDE-WALK</option>
                      <option value="45">INDIA VS ENGLAND</option>
                      <option value="43">IPL 2021</option>
                      {/* Add other options */}
                    </select>
                  </div>
                  <h6>Choose blog posts:</h6>
                  <div className="form-group">
                    <select multiple name="company_blogs" value={formData.company_blogs} onChange={handleChange} className="form-control">
                      <option value="52">INCEPTION</option>
                      <option value="49">AVENGERS INFINTY WAR</option>
                      <option value="45">AVENGERS END GAME</option>
                      {/* Add other options */}
                    </select>
                  </div>
                  <h6>SEO Settings</h6>
                  <div className="form-group">
                    <textarea name="company_seo_description" value={formData.company_seo_description} onChange={handleChange} className="form-control" placeholder="Meta descriptions" />
                  </div>
                  <div className="form-group">
                    <textarea name="company_seo_keywords" value={formData.company_seo_keywords} onChange={handleChange} className="form-control" placeholder="Meta keywords" />
                  </div>
                  <button type="submit" name="company_profile_submit" className="btn btn-primary">Submit</button>
                  <Link to="/dashboard" className="skip">Go to user dashboard &gt;&gt;</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default EditBuiness
