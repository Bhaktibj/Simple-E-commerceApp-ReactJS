import * as authConstant from '../constants/authConstant';

const initialState = {
  show: false,
  title: '',
  text: '',
};

const toastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authConstant.SHOW_TOAST:
      return {
        ...state,
        show: true,
        title: payload.title,
        text: payload.text,
      };
    case authConstant.HIDE_TOAST:
      return {
        ...state,
        show: false,
        title: '',
        text: '',
      };
    default:
      return state;
  }
};

export default toastReducer;