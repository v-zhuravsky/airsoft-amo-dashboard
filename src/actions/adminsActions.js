import {
	CHANGE_ADMIN_TYPE,
	CHANGE_CURRENT_ADMIN_TYPE
} from './types';

export const changeAdminType = (id, newType, loggedInAdminId) => dispatch => {
	console.log('changeAdminTypeAction');
	if (id === loggedInAdminId) {
		dispatch({
			type: CHANGE_CURRENT_ADMIN_TYPE,
			payload: newType
		});		
	}

	dispatch({
		type: CHANGE_ADMIN_TYPE,
		payload: { id, newType }
	});
};