import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShoesDataAction, getShoesDataforAdminAction, postShoesDataAction } from '../Redux/ShoesReducer/action'
import styles from "../Styling/Admin.module.css"
import AdminNav from '../Components/AdminNav'





const AdminAddProd = () => {

    const dispatch = useDispatch()

    const [brand, setbrand] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState("")
    const [price, setprice] = useState(0)

    const HandleAddProduct=(e)=>{
        e.preventDefault()
        const obj ={
            brand, description, image, price
        }
        dispatch(postShoesDataAction(obj))
        setbrand("")
        setdescription("")
        setimage("")
        setprice(0)
    }

    useEffect(()=>{
      dispatch(getShoesDataforAdminAction)
  },[postShoesDataAction])

  return (
    <div className={styles.adminDiv}>
        <AdminNav />
    <form onSubmit={HandleAddProduct} id={styles.adminForm} >
            <h3>ADD PRODUCT</h3>
            <input type="text" value={brand} placeholder='Enter Product Brand' onChange={(e)=>setbrand(e.target.value)}/><br />
            <input type="text" value={description} placeholder='Enter Product Description' onChange={(e)=>setdescription(e.target.value)}/><br />
            <input type="text"  value={image} placeholder='Enter Product Image Link' onChange={(e)=>setimage (e.target.value)}/><br />
            <input type="number" value={price} placeholder='Enter Product Price' onChange={(e)=>setprice(e.target.value)}/><br />
            <button type='submit' className={styles.adminButton}>Click to Add</button>
    </form>
    </div>
  )
}

export default AdminAddProd