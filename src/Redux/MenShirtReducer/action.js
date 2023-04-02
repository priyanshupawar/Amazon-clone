import axios from "axios";
import {
  SHIRT_DATA_FAILURE,
  SHIRT_REQUEST_PENDING,
  GET_SHIRT_REQUEST_SUCCESSFUL,
  POST_SHIRT_REQUEST_SUCCESSFUL,
} from "./actionTypes";

export const getManShirtDataAction =
  (brands, PriceUnder = [], sortBy) =>
  (dispatch) => {
    dispatch({ type: SHIRT_REQUEST_PENDING });

    // Base Url
    let url = "https://server22-for-amazon-clone.onrender.com/MenShirt";

    /* Filter the data based on the Brand */
    if (brands && brands.length > 0) {
      url += `?brand=${brands.join("&brand=")}`;
    }

    /*Sorting the product based on the price*/
    if (PriceUnder.length === 2) {
      if (brands && brands.length > 0) {
        url += `&price_gte=${PriceUnder[0]}&price_lte=${PriceUnder[1]}`;
      } else {
        url += `?price_gte=${PriceUnder[0]}&price_lte=${PriceUnder[1]}`;
      }
    }

    /*Sort by asc and desc*/
    if (sortBy) {
      if ((brands && brands.length > 0) || PriceUnder.length === 2) {
        url += `&_sort=price&_order=${sortBy}`;
      } else {
        url += `?_sort=price&_order=${sortBy}`;
      }
    }

    // console.log("urlewrfwewe", url);

    axios
      .get(url)
      .then((res) => {
        console.log("res", res.data);
        dispatch({ type: GET_SHIRT_REQUEST_SUCCESSFUL, payload: res.data });
      })
      .catch(() => dispatch({ type: SHIRT_DATA_FAILURE }));
  };

export const postShoesDataAction = (obj) => (dispatch) => {
  dispatch({ type: SHIRT_REQUEST_PENDING });
  return axios
    .post("https://zealous-tuna-singlet.cyclic.app/MenShirt", obj)
    .then((res) =>
      dispatch({ type: POST_SHIRT_REQUEST_SUCCESSFUL, payload: res.data })
    )
    .catch(() => dispatch({ type: SHIRT_DATA_FAILURE }));
};