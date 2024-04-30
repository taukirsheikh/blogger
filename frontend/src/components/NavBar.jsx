import React from "react";
import { Link } from "react-router-dom"; 
import LogIn from "./NavComponents/LogIn";
import Register from "./NavComponents/Register";
import { useSelector, useDispatch } from "react-redux"; 
import { logout as userLogout } from "../redux/authorSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(userLogout());
  };
  const { isLoggedIn, author } = useSelector((state) => state.user);
  
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <Link to="/">
          <span className="btn btn-ghost text-xl">Blogger</span>
        </Link>
        <div className="flex absolute right-10 gap-2">
          {isLoggedIn ? (
            <>
             <Link to='author-dashboard'>

             <button className="btn btn-primary">Dashboard</button>
             </Link> 
              <span>{author.name}</span>
              <button onClick={handleLogout} className="btn glass">Logout</button>
            </>
          ) : (
            <>
              <LogIn />
              <Register />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
