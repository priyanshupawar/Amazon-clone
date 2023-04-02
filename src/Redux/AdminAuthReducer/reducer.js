import { ADMIN_FAILURE, ADMIN_REQUEST_PENDING, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    isAdminAuth: false,
    token: "",
  }

export const reducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case ADMIN_REQUEST_PENDING : return {...state, isLoading:true}
        case ADMIN_LOGIN_SUCCESS : return {...state, isLoading:false, isAdminAuth: true, token: payload}
        case ADMIN_LOGOUT_SUCCESS : return {...state,isLoading:false, isAdminAuth: false} 
        case ADMIN_FAILURE : return {...state, isLoading:false, isError:true}    
        default: return state
    }
}



