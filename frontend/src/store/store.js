import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer } from '../reducers/productListReducer';
import {cartReducer} from '../reducers/cartReducer';
import Cookie from 'js-cookie';


const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer

})
const store =
createStore(reducer, initialState, applyMiddleware(thunk));
export default store;