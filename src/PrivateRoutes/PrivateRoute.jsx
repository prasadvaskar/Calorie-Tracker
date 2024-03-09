import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
    return isLoggedIn ? children : <Navigate to="/" replace />

}

export default PrivateRoute;
