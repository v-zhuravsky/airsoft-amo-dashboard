import { GET_ORDERS } from '../actions/types';
const initialState = {
  stats: [],
  orders: []
};

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return action.payload;
		default:
			return state;
	}
};

export default ordersReducer;