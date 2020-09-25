import Axios from "axios";
import Cookie from 'js-cookie';
import * as userConstant from '../constants/userConstant';

const signin = (email, password) => async (dispatch) => {
  dispatch({ type: userConstant.USER_SIGNIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/users/signin", { email, password });
    dispatch({ type: userConstant.USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstant.USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: userConstant.USER_REGISTER_REQUEST, payload: { name, email, password } });
  try {
    const { data } = await Axios.post("/api/users/signup", { name, email, password });
    dispatch({ type: userConstant.USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: userConstant.USER_REGISTER_FAIL, payload: error.message });
  }
}

export { signin, register };