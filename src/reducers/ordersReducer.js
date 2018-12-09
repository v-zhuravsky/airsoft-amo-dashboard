import { GET_ORDERS, COMPLETE_ORDER, CANCEL_ORDER } from '../actions/types';

const initialState = {
  stats: [],
  orders: []
};

const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ORDERS:
			return action.payload;
    case COMPLETE_ORDER:
      const newOrders = state.orders.map(order => {
        if (order.id === action.payload.id) {
          return action.payload;
        }
        return order;
      });
      return {
        ...state,
        orders: newOrders
      };
		default:
			return state;
	}
};

export default ordersReducer;