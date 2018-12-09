import {
	CHANGE_ADMIN_TYPE,
	CHANGE_ADMIN_NAME,
	CHANGE_ADMIN_AVATAR,
	FETCH_ADMINS,
	CLEAR_ADMINS,
	UPDATE_ADMIN
} from '../actions/types';

const initialState = [];

const adminsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_ADMINS:
			return action.payload;
		case UPDATE_ADMIN:
			return [
				...state.map(admin => {
					if (admin.id === action.payload.id) {
						return action.payload;
					}
					return admin;
				})
			];
		case CHANGE_ADMIN_TYPE:
			return state.map(admin => {
				if (admin.id === action.payload.id) {
					return {
						...admin,
						type: action.payload.newType
					};
				}
				return admin;
			});
		case CHANGE_ADMIN_NAME:
			return state.map(admin => {
				if (admin.id === action.payload.id) {
					return {
						...admin,
						firstName: action.payload.firstName,
						lastName: action.payload.lastName
					};
				}
				return admin;
			});
		case CHANGE_ADMIN_AVATAR:
			return state.map(admin => {
				if (admin.id === action.payload.id) {
					return {
						...admin,
						avatar: action.payload.avatar
					};
				}
				return admin;
			});
		case CLEAR_ADMINS:
			return [];
		default:
			return state;
	}
};

export default adminsReducer;