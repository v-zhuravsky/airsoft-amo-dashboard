import { COMPLETE_ORDER, UPDATE_ADMIN } from './types';
import completeOrderApi from '../api/completeOrder';

export const completeOrderAction = (token, adminId, orderId) => dispatch => {
  completeOrderApi(token, adminId, orderId).then(res => {
    dispatch({
      type: COMPLETE_ORDER,
      payload: res.order
    });
    dispatch({
      type: UPDATE_ADMIN,
      payload: res.admin
    });
  }).catch(err => console.log(err.response.data));
};