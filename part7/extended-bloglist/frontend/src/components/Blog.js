import React from "react";
import PropTypes from "prop-types";

const Blog = ({ blog, username, cancelBlog, incrementLike }) => {

  if (!blog) {
    return null;
  }

  const addLike = async () => {
    try {
      incrementLike(blog);
    } catch (exception) {
      console.log(exception);
    }
  };

  const removeBlog = async () => {
    try {
      if (window.confirm("delete?")) {
        cancelBlog(blog.id);
      }
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className="blog">
      <h2>{blog.title}</h2>
      <div>
        <p>{blog.url}</p>
        <p>
          likes: <span className="likes">{blog.likes}</span>{" "}
          <button className="likeButton" onClick={() => addLike()}>
            like
          </button>
        </p>
        <p>added by {blog.author}</p>
        {blog.user.username === username && (
          <p>
            <button onClick={() => removeBlog()}>delete</button>
          </p>
        )}
        <h4>comments</h4>
        <ul>
        {blog.comments.map((comment) => (
          <li key={comment.id}>{comment.comment}</li>
        ))}
        </ul>
      </div>
    </div>
  );
};

Blog.propTypes = {
  username: PropTypes.string.isRequired,
};

export default Blog;
