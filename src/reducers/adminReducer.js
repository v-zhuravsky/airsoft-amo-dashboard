import { CHANGE_CURRENT_ADMIN_TYPE } from '../actions/types';

const initialState = {
	id: 1,
	firstName: 'Alex',
	lastName: 'Willson',
	avatar: 'https://avatars.mds.yandex.net/get-pdb/1004346/071d2113-23f4-4b37-b7ce-342ab01c0d6b/orig',
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