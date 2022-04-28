import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "firebase/auth";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();

  if (user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
