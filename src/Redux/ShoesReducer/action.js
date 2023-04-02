import axios from "axios";
import { SHOES_DATA_FAILURE, SHOES_REQUEST_PENDING, GET_SHOES_REQUEST_SUCCESSFUL, POST_SHOES_REQUEST_SUCCESSFUL, DELETE_SHOE_REQUEST_SUCCESSFUL, GET_SHOES_REQUEST_ADMIN_SUCCESSFUL, EDIT_SHOE_REQUEST_SUCCESSFUL } from "./actionTypes";


//---------------------------------------------------------------------------------
//Get shoes for product page
export const getShoesDataAction = (brands, PriceUnder = [], sortBy) => (dispatch) => {
  dispatch({ type: SHOES_REQUEST_PENDING });
  // Base Url
  let url = "https://server22-for-amazon-clone.onrender.com/shoes";

  /* Filter the data based on the Brand */
  if (brands && brands.length > 0) {
    url += "?brand=" + brands.join("&brand=");
  }

  /*Sorting the product based on the price*/

  if (PriceUnder.length === 2) {
    url += `?price_gte=${PriceUnder[0]}&price_lte=${PriceUnder[1]}`;
  }

  /*Sort by asc and desc*/
  if (sortBy) {
    url += `?_sort=price&_order=${sortBy}`;
  }

  axios
    .get(url)
    .then((res) =>
      dispatch({ type: GET_SHOES_REQUEST_SUCCESSFUL, payload: res.data })
    )
    .catch(() => dispatch({ type: SHOES_DATA_FAILURE }));
};

// --------------------------------------------------------------------------
//GET shoes for admin

export const getShoesDataforAdminAction = (dispatch) => {
  dispatch({ type: SHOES_REQUEST_PENDING });
  axios
    .get("https://server22-for-amazon-clone.onrender.com/shoes")
    .then((res) =>
    // console.log(res.data)
      dispatch({ type: GET_SHOES_REQUEST_ADMIN_SUCCESSFUL , payload: res.data })
    )
    .catch(() => dispatch({ type: SHOES_DATA_FAILURE }));
};

//----------------------------------------------------------------------------
//POST shoe 
export const postShoesDataAction = (dataobj) => (dispatch) => {
  dataobj = {...dataobj, price: Number(dataobj.price)}
  dispatch({ type: SHOES_REQUEST_PENDING })
  return axios.post("https://server22-for-amazon-clone.onrender.com/shoes", dataobj)
    .then((res) => dispatch({ type: POST_SHOES_REQUEST_SUCCESSFUL, payload: res.data }))
    .catch(() => dispatch({ type: SHOES_DATA_FAILURE }))
}

//----------------------------------------------------------------------------------
//delete shoe

export const deleteShoeDataAction = (id) => (dispatch) => {  
  dispatch({ type: SHOES_REQUEST_PENDING })
  return axios.delete(`https://server22-for-amazon-clone.onrender.com/shoes/${id}`)
    .then(() => dispatch({ type: DELETE_SHOE_REQUEST_SUCCESSFUL }))
    .catch(() => dispatch({ type: SHOES_DATA_FAILURE }))
}

//-------------------------------------------------------------------------------------
//edit shoe

export const patchShoeAction = (dataobj, id)=>(dispatch)=>{
  dataobj = {...dataobj, price: Number(dataobj.price)}

  dispatch({type: SHOES_REQUEST_PENDING})
  return axios.patch(`https://server22-for-amazon-clone.onrender.com/shoes/${id}`, dataobj)
  .then(()=>dispatch({type: EDIT_SHOE_REQUEST_SUCCESSFUL}))
  .catch(()=>dispatch({type: SHOES_DATA_FAILURE}))
  
}

