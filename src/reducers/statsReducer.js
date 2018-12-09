import { GET_STOCKS, CLEAR_STOCKS } from '../actions/types';

const initialState = {
  stocks: {}
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload
      };
    case CLEAR_STOCKS:
      return {
        stocks: {}
      };
    default:
      return state;
  }
};

export default statsReducer;