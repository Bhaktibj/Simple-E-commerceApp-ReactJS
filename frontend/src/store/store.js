import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from '../reducers/productListReducer';
import {cartReducer} from '../reducers/cartReducer';
import Cookie from 'js-cookie';
import authReducer from '../reducers/authReducer';
import toastReducer from '../reducers/toastReducer';
import { userRegisterReducer, userSigninReducer } from '../reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;


const initialState = { cart: { cartItems }, userSignin: { userInfo } };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  auth:authReducer,
  toast:toastReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer

})
const store =
createStore(reducer, initialState, applyMiddleware(thunk));
export default store;