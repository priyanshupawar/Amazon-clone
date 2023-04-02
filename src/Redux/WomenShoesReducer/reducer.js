import {
    WOMEN_DATA_FAILURE,
    WOMEN_REQUEST_PENDING,
    GET_WOMEN_REQUEST_SUCCESSFUL,
    POST_WOMEN_REQUEST_SUCCESSFUL,
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isError: false,
    WomenShoes: [],
    oneshoe: {},
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case WOMEN_REQUEST_PENDING:
        return { ...state, isLoading: true };
      case GET_WOMEN_REQUEST_SUCCESSFUL:
        return { ...state, isLoading: false, WomenShoes: payload };
      case POST_WOMEN_REQUEST_SUCCESSFUL:
        return { ...state, isLoading: false, oneshoe: payload };
      case WOMEN_DATA_FAILURE:
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };