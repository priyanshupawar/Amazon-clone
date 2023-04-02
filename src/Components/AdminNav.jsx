import React from 'react'
import styles from "../Styling/Admin.module.css"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import { adminlogoutAction } from '../Redux/AdminAuthReducer/action';




const AdminNav = () => {

    const dispatch = useDispatch()


    const HandleLogout = ()=>{
        dispatch(adminlogoutAction)
    }

  return (
    <div id={styles.adminNav}>
            <Link to="/adminProducts">Product Data</Link>
            <Link to="/adminAddProd">Add Product</Link>
            <Link to="/adminUserData">User Data</Link>
            <button onClick={HandleLogout}>Logout</button>
    </div>
  )
}

export default AdminNav