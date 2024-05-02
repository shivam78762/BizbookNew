import React, { useState } from 'react';
import { RiUpload2Fill } from 'react-icons/ri';
import { useParams } from 'react-router';

function BlogForm() {
  const {edit} = useParams()
  const [blogName, setBlogName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [blogDescription, setBlogDescription] = useState('');
  const [blogImage, setBlogImage] = useState('');
  const [isEnquiry, setIsEnquiry] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission
  };
  

  return (
    <section className="login-reg">
      <div className="container">
        <div className="row">
          <div className="login-main add-list">
            <div className="log-bor">&nbsp;</div>
            <span className="steps"> {edit ? "EDIT BLOG POST" : "Add new Blog post"}</span>
            <div className="log">
              <div className="login add-list-off">
                <h4> {edit ? "Edit this Blog Post" : "Create Blog Post"}</h4>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="blog_name"
                          value={blogName}
                          onChange={(e) => setBlogName(e.target.value)}
                          className="form-control"
                          placeholder="Post Name*"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <select
                          name="category_id"
                          value={categoryId}
                          onChange={(e) => setCategoryId(e.target.value)}
                          className="chosen-select form-control"
                          required
                        >
                          <option value="">Select Category</option>
                          <option value="23">Health</option>
                          <option value="22">Mens</option>
                          <option value="21">Fruits</option>
                          <option value="20">Baby care</option>
                          <option value="19">Toys</option>
                          <option value="18">Jewellery</option>
                          <option value="17">Shoes</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="blog_description"
                          value={blogDescription}
                          onChange={(e) => setBlogDescription(e.target.value)}
                          className="form-control"
                          placeholder="Post Details"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Choose banner image</label>
                        <div className="fil-img-uplo">
                          <span className="dumfil">Upload a file</span>
                          <RiUpload2Fill />
                          <input
                            type="file"
                            name="blog_image"
                            accept="image/*,.jpg,.jpeg,.png"
                            onChange={(e) => setBlogImage(e.target.files[0])}
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                        <div className="chbox ">
                          <input
                            type="checkbox"
                            name="isenquiry"
                            id="evefmenab"
                            checked={isEnquiry}
                            onChange={(e) => setIsEnquiry(e.target.checked)}
                            className='enquiry-label'
                          />
                          <label >Enquiry or Registration form enable</label>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button type="submit" name="blog_submit" className="btn btn-primary">
                {edit ? "Save Changes" : "Submit"}       
                      </button>
                    </div>
                    <div className="col-md-12">
                      <a href="dashboard" className="skip">
                        Go to user dashboard &gt;&gt;
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogForm;
