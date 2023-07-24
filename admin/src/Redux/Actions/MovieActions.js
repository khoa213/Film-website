import axios from "axios";
import {
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
  MOVIE_CREATE_FAIL,
  MOVIE_CREATE_REQUEST,
  MOVIE_CREATE_SUCCESS,
  MOVIE_DELETE_REQUEST,
  MOVIE_DELETE_SUCCESS,
  MOVIE_DELETE_FAIL,
} from "../Constants/MovieConstants";
import { logout } from "./UserActions";
export const listMovie = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MOVIE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo}`,
      },
    };
    const { data } = await axios.get(`http://localhost:8080/movies`, config);
    // console.log(data);
    dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.messagae
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: MOVIE_LIST_FAIL,
      payload: message,
    });
  }
};

//create product
export const createMovie = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: MOVIE_CREATE_REQUEST });

    const newMovie = {
      key: Math.floor(Math.random() * (1000000 - 31 + 1)) + 31,
      id: Math.floor(Math.random() * (1000000 - 31 + 1)) + 31,
      ...product,
    };

    dispatch({ type: MOVIE_CREATE_SUCCESS, payload: newMovie });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.messagae
        : error.message;
    if (message === "Not authorized, token failed") {
      // dispatch(logout());
    }

    dispatch({
      type: MOVIE_CREATE_FAIL,
      payload: message,
    });
  }
};
//delete product
export const deleteMovie = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MOVIE_DELETE_REQUEST });

    dispatch({ type: MOVIE_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.messagae
        : error.message;
    if (message === "Not authorized, token failed") {
    }

    dispatch({
      type: MOVIE_DELETE_FAIL,
      payload: message,
    });
  }
};
