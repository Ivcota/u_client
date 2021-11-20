import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../global/authState";

const PrivateRoute = () => {
  const { authenticated } = useAuthStore();

  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
