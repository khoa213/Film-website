import {
  GENRE_CREATE_REQUEST,
  GENRE_CREATE_FAIL,
  GENRE_CREATE_SUCCESS,
  GENRE_LIST_FAIL,
  GENRE_LIST_REQUEST,
  GENRE_LIST_SUCCESS,
  GENRE_DELETE_FAIL,
  GENRE_DELETE_REQUEST,
  GENRE_DELETE_SUCCESS,
} from "../Constants/GenreConstants";

// GENRE LIST
export const genreListReducer = (state = { genres: [] }, action) => {
  switch (action.type) {
    case GENRE_LIST_REQUEST:
      return { loading: true, genres: [] };
    case GENRE_LIST_SUCCESS:
      return {
        loading: false,
        genres: action.payload,
      };
    case GENRE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
