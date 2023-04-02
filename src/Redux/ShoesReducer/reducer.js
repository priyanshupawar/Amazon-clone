import { SHOES_DATA_FAILURE, SHOES_REQUEST_PENDING, GET_SHOES_REQUEST_SUCCESSFUL,DELETE_SHOE_REQUEST_SUCCESSFUL, POST_SHOES_REQUEST_SUCCESSFUL, GET_SHOES_REQUEST_ADMIN_SUCCESSFUL,EDIT_SHOE_REQUEST_SUCCESSFUL } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    shoes: [],
    adminShoes:[]
  }

export const reducer = (state = initialState, {type, payload})=>{
    switch (type) {
        case  SHOES_REQUEST_PENDING : return {...state, isLoading:true}
        case GET_SHOES_REQUEST_SUCCESSFUL : return {...state, isLoading:false, shoes: payload}
        case GET_SHOES_REQUEST_ADMIN_SUCCESSFUL : return {...state, isLoading:false, adminShoes: payload}
        case POST_SHOES_REQUEST_SUCCESSFUL : return {...state, isLoading:false, adminShoes:[...state.adminShoes, payload]}
        case DELETE_SHOE_REQUEST_SUCCESSFUL : return {...state, isLoading:false, isError:false}
        case EDIT_SHOE_REQUEST_SUCCESSFUL : return {...state, isLoading: false, adminShoes: state.data.map((item) => item.id === payload.id ? payload : item)};
    
        default:
          return state            
      }
    };
    
    
    