import axios from "axios";
import {
  GENRE_LIST_FAIL,
  GENRE_LIST_REQUEST,
  GENRE_LIST_SUCCESS,
  GENRE_CREATE_FAIL,
  GENRE_CREATE_REQUEST,
  GENRE_CREATE_SUCCESS,
  GENRE_DELETE_REQUEST,
  GENRE_DELETE_SUCCESS,
  GENRE_DELETE_FAIL,
} from "../Constants/GenreConstants";
import { logout } from "./UserActions";
export const listGenre = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GENRE_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`http://localhost:8080/genres`, config);
    // console.log(data);
    dispatch({ type: GENRE_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.messagae
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }

    dispatch({
      type: GENRE_LIST_FAIL,
      payload: message,
    });
  }
};
