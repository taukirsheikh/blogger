import React from "react";
import { Link } from "react-router-dom"; 
import LogIn from "./NavComponents/LogIn";
import Register from "./NavComponents/Register";


const NavBar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
<Link to="/">
        <span className="btn btn-ghost text-xl">Blogger</span>
</Link>
<div className="flex absolute right-10 gap-2">

        <LogIn/>
        <Register/>
</div>
      </div>
     
    </>
  );
};

export default NavBar;
