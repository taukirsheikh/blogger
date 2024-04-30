import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function ProtectedRoute({ isLoggedIn, children }) {


  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;