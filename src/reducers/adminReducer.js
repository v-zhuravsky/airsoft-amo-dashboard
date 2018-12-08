import { CHANGE_CURRENT_ADMIN_TYPE, CHANGE_CURRENT_ADMIN_NAME, AUTHENTICATE, DEAUTHENTICATE } from '../actions/types';

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
		case CHANGE_CURRENT_ADMIN_NAME:
			return {
				...state,
				firstName: action.payload.firstName,
				lastName: action.payload.lastName
			};
		default:
			return state;
	}
};

export default adminReducer;