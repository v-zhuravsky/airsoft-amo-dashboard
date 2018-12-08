import {
	ADD_FLASH_MESSAGE,
	CHANGE_ADMIN_TYPE,
	CHANGE_CURRENT_ADMIN_TYPE,
	FETCH_ADMINS,
	CLEAR_ADMINS
} from './types';

import fetchAdminsApi from '../api/fetchAdmins';
import changeAdminTypeApi from '../api/changeAdminType';

export const fetchAdminsAction = accessToken => dispatch => {
	dispatch({
		type: CLEAR_ADMINS
	});
	fetchAdminsApi(accessToken).then(admins => {
		dispatch({
			type: FETCH_ADMINS,
			payload: admins
		});
	}).catch(err => console.log(err));
};

export const changeAdminType = (token, id, newType, loggedInAdminId) => dispatch => {
	changeAdminTypeApi(token, id, newType).then(() => {
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
	}).catch(err => console.log(err));
};