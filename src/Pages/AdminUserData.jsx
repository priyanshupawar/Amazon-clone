import React from 'react'
import styles from "../Styling/Admin.module.css"
import { Link } from 'react-router-dom';
import AdminNav from '../Components/AdminNav';


const AdminUserData = () => {
  return (
    <div className={styles.adminDiv}>
         <AdminNav />
    </div>
  )
}

export default AdminUserData