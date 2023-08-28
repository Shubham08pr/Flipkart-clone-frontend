import * as actionTypes from "../constants/productConstant";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://flipkart-clone-backend-338f.onrender.com/products`
    );
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://flipkart-clone-backend-338f.onrender.com/product/${id}`
    );

    dispatch({ type: actionTypes.GET_PRODUCTS_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS_FAIL,
      payload: error.response,
    });
  }
};
