import authApi from '../api/auth';
import { AUTHENTICATE } from './types';

export const authAction = user => dispatch => {
  authApi(user).then(admin => {
    dispatch({
      type: AUTHENTICATE,
      payload: admin
    });
  }).catch(err => console.log(err));
};