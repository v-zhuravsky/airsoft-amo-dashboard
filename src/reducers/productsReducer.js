import { GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT } from '../actions/types';
const initialState = [];

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    case ADD_PRODUCT:
      return [
        ...state,
        action.payload
      ];
    case UPDATE_PRODUCT:
      let updated = state;
      updated.map(pr => {
        if (pr.prodductId === action.payload.productId) {
          return action.payload;
        }
        return pr;
      });
      return updated;
    default:
      return state;
  }
};

export default productsReducer;