import React, { useState } from "react";
import Left from "./Left";
import Right from "./right";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "INCEPTION",
      date: "12, Mar 2021",
      views: 15,
      preview: "/blog-inner",
    },
    {
      id: 2,
      title: "AVENGERS INFINTY WAR",
      date: "12, Mar 2021",
      views: 8,
      preview: "/blog-inner",
    },
    {
      id: 3,
      title: "AVENGERS END GAME",
      date: "11, Mar 2021",
      views: 11,
      preview: "/blog-inner",
    },
    {
      id: 4,
      title: "captainamerica the civil war",
      date: "11, Mar 2021",
      views: 7,
      preview: "/blog-inner",
    },
    {
      id: 5,
      title: "Samsung M31 Review",
      date: "22, Feb 2021",
      views: 10,
      preview: "/blog-inner",
    },
    {
      id: 6,
      title: "wizard of oz",
      date: "21, Feb 2021",
      views: 8,
      preview: "/blog-inner",
    },
    {
      id: 7,
      title: "wizard of oz",
      date: "21, Feb 2021",
      views: 7,
      preview: "/blog-inner",
    },
    {
      id: 8,
      title: "Titanic",
      date: "21, Feb 2021",
      views: 7,
      preview: "/blog-inner",
    },
    {
      id: 9,
      title: "Digital Marketing",
      date: "26, Mar 2020",
      views: 8,
      preview: "/blog-inner",
    },
  ]);

  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    blogPostsId: null,
  });
  const handleDelete = (id) => {
    // Open confirmation dialog
    setDeleteConfirmation({
      isOpen: true,
      blogPostsId: id,
    });
  };

  const handleConfirmation = (confirm) => {
    if (confirm) {
      // Proceed with deletion
      // alert('dh')
      const updatedBlogPosts = blogPosts.filter(
        (item) => item.id !== deleteConfirmation.blogPostsId
      );
      setBlogPosts(updatedBlogPosts);
    }
    // Close confirmation dialog
    setDeleteConfirmation({
      isOpen: false,
      blogPostsId: null,
    });
  };

  return (
    <>
      {deleteConfirmation.isOpen && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this Blog Post?</p>
          <button className="yes-btn" onClick={() => handleConfirmation(true)}>
            Yes
          </button>
          <button className="no-btn" onClick={() => handleConfirmation(false)}>
            No
          </button>
        </div>
      )}
      <div className="dashboard-main">
        <div className="dashboard-container">
          <div className="dashboard-left">
            <Left />
          </div>
          <div className="dashboard-center">
            <div className="ud-cen">
              <div className="log-bor">&nbsp;</div>
              <span className="udb-inst">Blog posts</span>
              <div className="ud-cen-s2">
                <h2>Blog Details</h2>
                <Link to="/blog-form" className="db-tit-btn">
                  Add new post
                </Link>
                <table className="responsive-table bordered">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Post Name</th>
                      <th>Views</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      <th>Preview</th>
                    </tr>
                  </thead>
                  <tbody>
                    {blogPosts.map((post, index) => (
                      <tr key={post.id}>
                        <td>{index + 1}</td>
                        <td>
                          {post.title} <span>{post.date}</span>
                        </td>
                        <td>
                          <span className="db-list-rat">{post.views}</span>
                        </td>
                        <td>
                          <Link to="/blog-form/edit" className="db-list-edit">
                            Edit
                          </Link>
                        </td>
                        <td>
                        
                          <Link
                            className="db-list-edit"
                            onClick={() => handleDelete(post.id)}
                          >
                            Delete
                          </Link>
                        </td>
                        <td>
                          <Link to={post.preview} className="db-list-edit">
                            Preview
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default Blogs;
