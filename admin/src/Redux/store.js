import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDeleteReducer,
  // productCreateReviewReducer,
  // productDetailsReducer,
  productListReducer,
} from "./Reducers/ProductReducers";
import { userListReducer, userLoginReducer } from "./Reducers/UserReducers";
const reducer = combineReducers({
  productList: productListReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  userLogin: userLoginReducer,
  userList: userListReducer,
  // productDetails: productDetailsReducer,
  // productReviewCreate: productCreateReviewReducer,
});

// const initialState = {
//   // userLogin: { userInfo: userInfoFromLocalStorage },
// };

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
