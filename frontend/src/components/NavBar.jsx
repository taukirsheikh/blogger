import React from "react";
import { Link } from "react-router-dom"; 


const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
<Link to="/">
        <span className="btn btn-ghost text-xl">Blogger</span>
</Link>
        <button className="btn  btn-outline">Log In</button>
        <button className="btn">Sign Up</button>
      </div>
     
    </>
  );
};

export default NavBar;
