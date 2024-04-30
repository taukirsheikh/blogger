import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleBlogView from './pages/SingleBlogView';
import AuthorDashboard from './pages/Author/AuthorDashboard';
import NewBlog from './pages/Author/NewBlog';
import UpdateSingleBlog from './pages/Author/UpdateSingleBlog';
import AuthorBlogList from './pages/Author/AuthorBlogList';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state)=>state.user.isLoggedIn)
  

  return (

    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog-details/:blog_id" element={<SingleBlogView />} />
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="author-dashboard" element={<AuthorDashboard />}>
            <Route index element={<NewBlog />} />
            <Route path="new-blog" element={<NewBlog />} />
            <Route path="blog-by-author" element={<AuthorBlogList />} />
            <Route path="blog-by-author/:blog_id" element={<UpdateSingleBlog />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
