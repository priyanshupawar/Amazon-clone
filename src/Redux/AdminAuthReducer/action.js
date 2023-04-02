import axios from "axios";
import { ADMIN_FAILURE,ADMIN_REQUEST_PENDING,ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_SUCCESS } from "./actionTypes";

export const adminloginAction = (credentialsobj)=>(dispatch)=>{
    dispatch({type: ADMIN_REQUEST_PENDING})
    return axios.post("https://reqres.in/api/login", credentialsobj)
    .then((res)=>dispatch({type:ADMIN_LOGIN_SUCCESS, payload: res.data}))
    .catch(()=>dispatch({type:ADMIN_FAILURE}))
}

export const adminlogoutAction = (dispatch)=>{
    dispatch({type: ADMIN_LOGOUT_SUCCESS})
}




