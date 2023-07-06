import axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,

} from "../Constants/ProductConstants";

export const listProduct = () => async (
  dispatch
) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(
      `https://dummyjson.com/products?limit=10`
    );
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


//create product
export const createProduct =
  (product) =>
  async (dispatch, getState) => {
    try {
      dispatch({ type: PRODUCT_CREATE_REQUEST });

   
      const newProduct = {
        key:Math.floor(Math.random() * (1000000 - 31 + 1)) + 31,
        id: Math.floor(Math.random() * (1000000 - 31 + 1)) + 31,
        ...product,
      };
   

      dispatch({ type: PRODUCT_CREATE_SUCCESS, payload: newProduct  });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.messagae
          : error.message;
      if (message === "Not authorized, token failed") {
        // dispatch(logout());
      }

      dispatch({
        type: PRODUCT_CREATE_FAIL,
        payload: message,
      });
    }
  };
//delete product
export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PRODUCT_DELETE_REQUEST });


    dispatch({ type: PRODUCT_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.messagae
        : error.message;
    if (message === "Not authorized, token failed") {
 
    }
    
    dispatch({
      type: PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};
