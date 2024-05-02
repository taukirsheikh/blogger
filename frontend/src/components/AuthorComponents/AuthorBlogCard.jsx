import React, { useState } from "react";
import { deleteBlogPost } from "../../services/blogApi";
import { Link } from "react-router-dom";
import axios from "axios";

function AuthorBlogCard({ title, content, date, blog_id, setDelet, delet }) {
  const [loading, setLoading] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  const handleDelete = async () => {
    setLoading(true);
    console.log(blog_id, "bloggg");

    try {
      await axios.delete(
        `http://127.0.0.1:8000/blog/delete-single/${blog_id}/`
      );
      setDelet(!delet);
      setLoading(false);
    } catch (error) {
      console.error("Error deleting blog post:", error);
    }
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="truncate">{content}</p>
          <p>{formatDate(date)}</p>
          <div className="card-actions justify-end">
            <Link to={`${blog_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              className="btn btn-error"
              onClick={handleDelete}
            >
              Delete
              {loading ? (
                <span className="loading loading-dots loading-xs"></span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorBlogCard;
