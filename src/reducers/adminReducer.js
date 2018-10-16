import { CHANGE_CURRENT_ADMIN_TYPE } from '../actions/types';

const initialState = {
	id: 1,
	firstName: 'Alex',
	lastName: 'Willson',
	avatar: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/872331/avatar.png?width=90',
	type: 'Administrator',
	accessToken: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
};

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
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