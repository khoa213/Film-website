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


const reducer = combineReducers({
  productList: productListReducer,
  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  // productDetails: productDetailsReducer,
  // productReviewCreate: productCreateReviewReducer,
 
});


const initialState = {
 
  // userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;