import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import SingleBlogView from './pages/SingleBlogView'


function App() {
  
  return (
    <>
    <Routes>
      <Route path='' element={<Home/>}>
      <Route path="blog-details/:blog_id" element={<SingleBlogView/>}/>
        </Route>
      <Route/>
      <Route/>
    </Routes>
    
    
     
    
    </>
  )
}

export default App
