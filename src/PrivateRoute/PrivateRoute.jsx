import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation, useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
