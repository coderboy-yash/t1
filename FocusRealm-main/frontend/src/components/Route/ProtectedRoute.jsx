import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
   
  if (isAuthenticated) {
    // If user is authenticated, allow access to children (e.g., Home component)
    return children;
  } else {
    // If user is not authenticated, redirect to login page
    return <Navigate to="/" replace />;
  }
};

export default ProtectedRoute;