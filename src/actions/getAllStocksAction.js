import { GET_STOCKS, CLEAR_STOCKS } from './types';
import getAllStocksApi from '../api/getAllStocks';

export const getAllStocksAction = token => dispatch => {
  dispatch({
    type: CLEAR_STOCKS
  });
  getAllStocksApi(token).then(stocks => {
    dispatch({
      type: GET_STOCKS,
      payload: stocks
    });
  }).catch(err => console.log(err.response.data));
};