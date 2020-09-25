import * as authConstant from '../constants/authConstant';
import { showToast } from './toastActions';
import _ from 'lodash';

export const setGoogleUser = googleUser => dispatch => {
    dispatch(logoutLocalUser());
    localStorage.setItem('googleUser', JSON.stringify(googleUser));
    dispatch(
      showToast({
        title: 'Notification',
        text: `Google user ${googleUser.name} successfully logged in.`,
      }),
    );
    dispatch({
      type: authConstant.GOOGLE_AUTH_SUCCESS,
      payload: googleUser,
    });
  };

  export const getGoogleUser = () => {
    const googleUser = JSON.parse(localStorage.getItem('googleUser'));
  
    return {
      type: authConstant.GET_GOOGLE_USER,
      payload: googleUser,
    };
  };
  
  export const logOutGoogleUser = () => dispatch => {
    const googleUser = JSON.parse(localStorage.getItem('googleUser'));
    if (googleUser) {
      dispatch(
        showToast({
          title: 'Notification',
          text: `Google user ${googleUser.name} successfully logged out.`,
        }),
      );
      localStorage.removeItem('googleUser');
      dispatch({
        type: authConstant.LOGOUT_GOOGLE_USER,
      });
    }
  };

  export const registerLocalUser = localUser => dispatch => {
    dispatch(logOutGoogleUser());
    // delete localUser.password;
    delete localUser.repeatPassword;
    localStorage.setItem('localUser', JSON.stringify(localUser));
  
    dispatch(
      showToast({
        title: 'Notification',
        text: `Local user ${localUser.name} successfully registered.`,
      }),
    );
    dispatch({
      type: authConstant.REGISTER_LOCAL_USER,
      payload: localUser,
    });
  };

  export const loginLocalUser = _localUser => (dispatch, getState) => {
    dispatch(logOutGoogleUser());
  
    let localUser = { ...getState().authReducer.localUser };
    console.log("user", localUser)
    localUser = _.isEmpty(localUser) ? null : localUser;
    if (
      !localUser &&
      _localUser.email === 'default@gmail.com' &&
      _localUser.password === 'password'
    ) {
      const defaultUser = {
        name: 'DefaultName',
        email: 'default@gmail.com',
        password: 'password',
      };
      localUser = defaultUser;
    }
    if (localUser) {
      localStorage.setItem('localUser', JSON.stringify(localUser));
      dispatch(
        showToast({
          title: 'Notification',
          text: `Local user ${localUser.email} successfully logged in.`,
        }),
      );
    } else {
      dispatch(
        showToast({
          title: 'Error',
          text: `Wrong email or password.`,
        }),
      );
    }
    dispatch({
      type: authConstant.LOGIN_LOCAL_USER,
      payload: localUser,
    });
  };

  export const logoutLocalUser = () => (dispatch, getState) => {
    const localUser = JSON.parse(localStorage.getItem('localUser'));
    if (localUser) {
      localStorage.removeItem('localUser');
  
      dispatch(
        showToast({
          title: 'Notification',
          text: `Local user ${localUser.name} successfuly logged out.`,
        }),
      );
      dispatch({
        type: authConstant.LOGOUT_LOCAL_USER,
      });
    }
  };

  export const redirectAfterLogin = callback => {
    if (callback) callback();
  
    return {
      type: authConstant.REDIRECT_AFTER_LOGIN,
    };
  };

