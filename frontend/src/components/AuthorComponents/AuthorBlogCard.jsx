import React from "react";

function AuthorBlogCard({title,content,date,blog_id}) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-US", options);
    }
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="truncate">{content}</p>
          <p>Created At: {formatDate(date)}</p>
          <div className="card-actions justify-end">
            
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-error">Delete</button>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthorBlogCard;
