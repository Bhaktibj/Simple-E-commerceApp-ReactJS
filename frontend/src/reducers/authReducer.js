import * as authConstant from '../constants/authConstant';

const initialState = {
  googleUser: null,
  localUser: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstant.GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        googleUser: { ...payload },
      };
    case authConstant.GET_GOOGLE_USER:
      return {
        ...state,
        googleUser: payload,
      };
    case authConstant.LOGOUT_GOOGLE_USER:
      return {
        ...state,
        googleUser: null,
      };
    case authConstant.REGISTER_LOCAL_USER:
      return {
        ...state,
        localUser: { ...payload },
      };
    case authConstant.LOGIN_LOCAL_USER:
      return {
        ...state,
        localUser: payload,
      };
    case authConstant.LOGOUT_LOCAL_USER:
      return {
        ...state,
        localUser: null,
      };
    case authConstant.GET_LOCAL_USER:
      return {
        ...state,
        localUser: payload,
      };
    case authConstant.REDIRECT_AFTER_LOGIN:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default authReducer;