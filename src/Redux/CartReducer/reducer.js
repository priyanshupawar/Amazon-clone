import {
  GET_CART_TYPE,
  DELETE_CART_TYPE,
  ADD_CART_TYPE,
  UPDATE_CART_TYPE,
  ADD_SAVE_LATER,
  GET_SAVE_LATER,
  DELETE_SAVE_LATER,
} from "./actionType";

let initial = {
  isError: false,
  isLoading: false,
  cartData: JSON.parse(localStorage.getItem("cartData")) || [],
  total: JSON.parse(localStorage.getItem("total")) || 0,
  savelater: JSON.parse(localStorage.getItem("savelaterData")) || [],
};
export let reducer = (state = initial, { type, payload }) => {
  switch (type) {
    case DELETE_SAVE_LATER: {
      return { ...state, savelater: payload };
    }
    case GET_SAVE_LATER: {
      return { ...state, savelater: payload };
    }
    case ADD_SAVE_LATER: {
      return { ...state, savelater: [...state.savelater, payload] };
    }
    case UPDATE_CART_TYPE: {
      return { ...state, total: payload };
    }
    case GET_CART_TYPE: {
      return { ...state, cartData: payload };
    }
    case DELETE_CART_TYPE: {
      return { ...state, cartData: payload };
    }
    case ADD_CART_TYPE: {
      return { ...state, cartData: [payload, ...state.cartData] };
    }
    default:
      return state;
  }
};