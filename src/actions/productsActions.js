import getProductsApi from '../api/getProducts';
import { GET_PRODUCTS } from './types';

export const getProductsAction = () => dispatch => {
  getProductsApi().then(products => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products
    });
  }).catch(err => console.log(err));
};