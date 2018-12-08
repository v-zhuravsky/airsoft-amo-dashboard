import getProductsApi from '../api/getProducts';
import addProductApi from '../api/addProduct';
import updateProductApi from '../api/updateProduct';
import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, ADD_FLASH_MESSAGE } from './types';

export const getProductsAction = () => dispatch => {
  getProductsApi().then(products => {
    dispatch({
      type: GET_PRODUCTS,
      payload: products
    });
  }).catch(err => console.log(err));
};

export const addProductAction = (token, product) => dispatch => {
  addProductApi(token, product).then(product => {
    dispatch({
      type: ADD_PRODUCT,
      payload: product
    });
  }).catch(err => console.log(err));
};

export const updateProductAction = (token, product) => dispatch => {
  updateProductApi(token, product).then(product => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: product
    });

    getProductsApi().then(products => {
      dispatch({
        type: GET_PRODUCTS,
        payload: products
      });
    }).catch(err => console.log(err));
    
    dispatch({
      type: ADD_FLASH_MESSAGE,
      payload: {
        type: 'normal',
        text: 'Product updated successfuly'
      }
    });
  }).catch(err => console.log(err));
};