import React from "react";
import { useSelector } from "react-redux";
import { useLocation,Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let { isAuth } = useSelector((state) => state.AuthReducer);
  let location = useLocation();
  return isAuth ? (
    children
  ) : (
    <Navigate to="/login" state={location.pathname} replace={true} />
  );
}

export default PrivateRoute;