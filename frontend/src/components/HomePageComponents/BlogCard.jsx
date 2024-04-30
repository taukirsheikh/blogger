import React from 'react'
import { Link } from "react-router-dom"; 

function BlogCard({blog_id, title, date, content}) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}
 
  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='truncate'>{content}</p>
    <div className="card-actions justify-end">
      <Link to={`blog-details/${blog_id}`}>
      <button className="btn btn-primary">Read</button>
      </Link>
    </div>
    <p>{formatDate(date)}</p>
  </div>
</div>
    </div>
  )
}

export default BlogCard