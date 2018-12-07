import logoutApi from '../api/logout';
import { DEAUTHENTICATE } from './types';

export const logoutAction = accessToken => dispatch => {
  logoutApi(accessToken).then(admin => {
    dispatch({
      type: DEAUTHENTICATE
    });
  }).catch(err => console.log(err));
};