import * as userConstant from "../constants/userConstant";
function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case userConstant.USER_SIGNIN_REQUEST:
      return { loading: true };
    case userConstant.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConstant.USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case userConstant.USER_REGISTER_REQUEST:
      return { loading: true };
    case userConstant.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case userConstant.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}
export {
  userSigninReducer, userRegisterReducer
}