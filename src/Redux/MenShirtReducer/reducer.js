import {
    SHIRT_DATA_FAILURE,
    SHIRT_REQUEST_PENDING,
    GET_SHIRT_REQUEST_SUCCESSFUL,
    POST_SHIRT_REQUEST_SUCCESSFUL,
  } from "./actionTypes";
  
  const initialState = {
    isLoading: false,
    isError: false,
    MenShirt: [],
    oneshoe: {},
  };
  
  export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SHIRT_REQUEST_PENDING:
        return { ...state, isLoading: true };
      case GET_SHIRT_REQUEST_SUCCESSFUL:
        return { ...state, isLoading: false, MenShirt: payload };
      case POST_SHIRT_REQUEST_SUCCESSFUL:
        return { ...state, isLoading: false, oneshoe: payload };
      case SHIRT_DATA_FAILURE:
        return { ...state, isLoading: false, isError: true };
  
      default:
        return state;
    }
  };