import React , {useState} from 'react'
import "./Form.css"

const Form = () => {
    const [formData, setFormData] = useState({
        enquiry_name: '',
        enquiry_email: '',
        enquiry_mobile: '',
        enquiry_category: '',
        enquiry_message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Perform submission logic here
        console.log('Form submitted:', formData);
        // Reset form fields after submission if needed
        setFormData({
          enquiry_name: '',
          enquiry_email: '',
          enquiry_mobile: '',
          enquiry_category: '',
          enquiry_message: ''
        });
      };
    
      return (
        <div className="hom-col-req text-center">
          <h4>What you looking for?</h4>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="enquiry_name"
                value={formData.enquiry_name}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter name*"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="enquiry_email"
                value={formData.enquiry_email}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter email*"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
                title="Invalid email address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="enquiry_mobile"
                value={formData.enquiry_mobile}
                onChange={handleChange}
                required
                className="form-control"
                placeholder="Enter mobile number *"
                pattern="{1}[0-9]{9}"
                title="Phone number starting with 7-9 and remaining 9 digits with 0-9"
              />
            </div>
            <div className="form-group">
              <select
                name="enquiry_category"
                id="enquiry_category"
                value={formData.enquiry_category}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Category</option>
                <option value="19">Wedding halls</option>
                <option value="18">Hotel &amp; Food</option>
                {/* Other options */}
              </select>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                name="enquiry_message"
                value={formData.enquiry_message}
                onChange={handleChange}
                placeholder="Enter your query or message"
              ></textarea>
            </div>
            <div className="btn">
          <button type="submit">Submit Requirements</button>
            </div>
          </form>
        </div>
      );
    };


export default Form
