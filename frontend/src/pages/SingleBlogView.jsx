import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';

function SingleBlogView() {
  const { blog_id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/single-blog/${blog_id}/`);
        setBlog(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching blog details. Please try again.');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blog_id]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <NavBar />
      {blog ? (
        <div className='mx-4'>
          <p>Author: {blog.author.name}</p>
          <p>{formatDate(blog.created_at)}</p>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>Blog not found</p>
      )}
    </>
  );
}

export default SingleBlogView;
