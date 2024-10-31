import React, { useEffect } from "react";
import { useAuth } from "./AuthContext/AuthContext";


import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
        alert("you are not authorized ,please login first")
      navigate("/login");
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
