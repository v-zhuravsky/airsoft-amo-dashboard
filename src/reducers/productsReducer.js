import { GET_PRODUCTS } from '../actions/types';
const initialState = [];

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;