import getOrdersApi from '../api/getOrders';
import { GET_ORDERS } from './types';

export const getOrdersAction = accessToken => dispatch => {
  getOrdersApi(accessToken).then(orders => {
    dispatch({
      type: GET_ORDERS,
      payload: orders
    });
  }).catch(err => console.log(err));
};