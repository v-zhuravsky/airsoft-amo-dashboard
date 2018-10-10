import {
	ADD_FLASH_MESSAGE,
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
	dispatch({
		type: ADD_FLASH_MESSAGE,
		payload: { type: 'normal', text: (newType === 'Administrator' ? 'Moderator' : 'Administrator') + ' type changed to: ' + newType }
	});
};