import { CHANGE_CURRENT_ADMIN_TYPE, AUTHENTICATE } from '../actions/types';

const initialState = {};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return action.payload;
		case CHANGE_CURRENT_ADMIN_TYPE:
			return {
				...state,
				type: action.payload
			};
		default:
			return state;
	}
};

export default adminReducer;