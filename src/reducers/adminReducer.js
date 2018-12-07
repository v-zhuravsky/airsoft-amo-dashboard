import { CHANGE_CURRENT_ADMIN_TYPE, AUTHENTICATE, DEAUTHENTICATE } from '../actions/types';

const initialState = {};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return action.payload;
		case DEAUTHENTICATE:
			return {};
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