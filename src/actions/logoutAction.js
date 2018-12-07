import logoutApi from '../api/logout';
import { DEAUTHENTICATE } from './types';
import storeName from '../storeName';

export const logoutAction = accessToken => dispatch => {
  logoutApi(accessToken).then(() => {
    dispatch({
      type: DEAUTHENTICATE
    });
    localStorage[storeName] = '';
  }).catch(err => console.log(err));
};