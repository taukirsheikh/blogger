import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateSingleBlog() {
  const authorId = useSelector((state) => state.user.author.id);
  const [status, setStatus] = useState(false);
  const [fetch, setfetch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { blog_id } = useParams(); 

  useEffect(() => {
    // Fetch blog data based on the blog_id
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/blog/update-single/${blog_id}/`);
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
        setfetch(false)
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [blog_id]); 

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/blog/update-single/${blog_id}/`,
        {
          title,
          content,
          author: authorId,
        }
      );

      console.log("Update successful:", response.data);
      setStatus(true)
      setLoading(false)
      
     
    } catch (error) {
      console.error("Error updating blog:", error);
      
    }
  };
  

  return (
    <>
      <div className="mt-4 mx-4 flex flex-col gap-3">
        <h1 className="font-bold">Title</h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-2xl"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className="font-bold">Content</p>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Your thoughts"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button className="btn btn-primary w-[10rem]" onClick={handleUpdate}>
          Update
        </button>
        {status?(<p>Updated Successfully</p>):null}
        {fetch?(<span className="loading loading-dots loading-xs"></span>):null}
        {loading?(<span className="loading loading-dots loading-xs"></span>):null}
        
      </div>
    </>
  );
}

export default UpdateSingleBlog;
