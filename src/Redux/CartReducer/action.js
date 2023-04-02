import {
  GET_CART_TYPE,
  DELETE_CART_TYPE,
  ADD_CART_TYPE,
  UPDATE_CART_TYPE,
  ADD_SAVE_LATER,
  GET_SAVE_LATER,
  DELETE_SAVE_LATER,
} from "./actionType";

import axios from "axios";

export const fourdata = [
  {
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/41QwbBaOfnL._AC_UL100_SR100,100_.jpg",
    description: "Sony Dualshock 4 Wireless",
    brand: "PlayStation 4",
    price: 4293,
    id: 2001,
  },
  {
    image: "https://m.media-amazon.com/images/I/71PxCV5Q2JL._SX466_.jpg",
    description: "Cricket 19 International Edition",
    brand: "WB Games",
    price: 2288,
    id: 2002,
  },
  {
    image: "https://m.media-amazon.com/images/I/81etAae966L._SX522_.jpg",
    description: "Hogwarts Legacy | Standard",
    brand: "Legacy",
    price: 4299,
    id: 2003,
  },
  {
    image: "https://m.media-amazon.com/images/I/81-sClzQ2AL._SX466_.jpg",
    description: "FIFA 21 Standard Edition (Free Edition)",
    brand: "Electronic Arts",
    price: 2259,
    id: 2004,
  },
];

export let calculateamt = (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("cartData")) || [];
  let sum = 0;
  arr.forEach((el) => {
    sum += el.price * el.quantity;
  });
  localStorage.setItem('total',JSON.stringify(sum))
  dispatch({ type: UPDATE_CART_TYPE, payload: sum });
};

export let getDataAction = (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("cartData")) || [];
  dispatch({ type: GET_CART_TYPE, payload: arr });
};

export const handleDeleteAction = (id) => (dispatch) => {
  let flag = false;
  let arr = JSON.parse(localStorage.getItem("cartData")) || [];
  arr = arr.filter((el) => {
    if (el.id == id && flag == false) {
      flag = true;
    } else {
      return el;
    }
  });
  localStorage.setItem("cartData", JSON.stringify(arr));
  dispatch({ type: DELETE_CART_TYPE, payload: arr });
};

export let handleAddAction = (el,quan=1) => (dispatch) => {
  el.quantity = quan;
  let arr = JSON.parse(localStorage.getItem("cartData")) || [];
  arr.unshift(el);
  localStorage.setItem("cartData", JSON.stringify(arr));
  dispatch({ type: ADD_CART_TYPE, payload: el });
};

export let handleLaterAction = (el) => (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("savelaterData")) || [];
  arr.push(el);
  console.log(arr);
  localStorage.setItem("savelaterData", JSON.stringify(arr));
  dispatch({ type: ADD_SAVE_LATER, payload: el });
};

export let getSaveLaterAction = (dispatch) => {
  let arr = JSON.parse(localStorage.getItem("savelaterData")) || [];
  dispatch({ type: GET_SAVE_LATER, payload: arr });
};

export let delateSaveLaterAction = (id) => (dispatch) => {
  let flag = false;
  let arr = JSON.parse(localStorage.getItem("savelaterData")) || [];
  arr = arr.filter((el) => {
    if (el.id == id && flag == false) {
      flag = true;
    } else {
      return el;
    }
  });
  localStorage.setItem("savelaterData", JSON.stringify(arr));
  dispatch({ type: DELETE_SAVE_LATER, payload: arr });
};

export let handlequantityAction = (id, value) => (dispatch) => {
  let flag = false;
  let arr = JSON.parse(localStorage.getItem("cartData")) || [];
  arr = arr.filter((el) => {
    if (el.id == id && flag == false) {
      flag = true;
      el.quantity = value;
    }
    return el;
  });
  localStorage.setItem("cartData", JSON.stringify(arr));
  dispatch({ type: GET_CART_TYPE, payload: arr });
};

//// polo Section

export let getdataAxios = async () => {
  let res = await axios.get(`https://server22-for-amazon-clone.onrender.com/MenShirt`);
  let data = await axios.get(`https://server22-for-amazon-clone.onrender.com/shoes`);
  let temp = [];
  res.data.forEach((element) => {
    temp.push(element);
  });
  data.data.forEach((element) => {
    temp.push(element);
  });
  return temp;
};


//singleProduct Action

export let getSingleProductAction = async (id) => {
  let res = await axios.get(
    `https://server22-for-amazon-clone.onrender.com/All-products/${id}`
  );
  return res.data
};