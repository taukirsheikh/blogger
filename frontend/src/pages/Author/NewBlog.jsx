import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function NewBlog() {
  const authorId = useSelector((state) => state.user.author.id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/blog/post/",
        {
          title,
          content,
          author: authorId,
        }
      );
      console.log("Post successful:", response.data);
      // Reset title and content after successful post
      setTitle("");
      setContent(" Post Successful");
    } catch (error) {
      console.error("Error posting:", error);
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
        <button className="btn btn-primary w-[10rem]" onClick={handlePost}>
          Post
        </button>
      </div>
    </>
  );
}

export default NewBlog;
