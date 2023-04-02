import React from 'react'
import {useLocation, Navigate} from 'react-router-dom'
import { useSelector } from "react-redux";

const PrivateRouteForAdmin = ({children}) => {
    const AdminAuth = useSelector((store)=>store.AdminReducer.isAdminAuth)
    let location = useLocation();
    return AdminAuth ? (children ) : (<Navigate to="/adminLogin" state={location.pathname} replace={true} />);
  
}

export default PrivateRouteForAdmin