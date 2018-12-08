import {
	ADD_FLASH_MESSAGE,
	CHANGE_ADMIN_TYPE,
	CHANGE_CURRENT_ADMIN_TYPE,
	CHANGE_ADMIN_NAME,
	CHANGE_CURRENT_ADMIN_NAME,
	FETCH_ADMINS,
	CLEAR_ADMINS
} from './types';

import fetchAdminsApi from '../api/fetchAdmins';
import changeAdminTypeApi from '../api/changeAdminType';
import changeAdminNameApi from '../api/changeAdminName';

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

export const changeAdminName = (token, id, newName, newSurname) => dispatch => {
	changeAdminNameApi(token, id, newName, newSurname).then(() => {
		dispatch({
			type: CHANGE_CURRENT_ADMIN_NAME,
			payload: {
				firstName: newName,
				lastName: newSurname
			}
		});		
		dispatch({
			type: CHANGE_ADMIN_NAME,
			payload: {
				id,
				firstName: newName,
				lastName: newSurname
			}
		});
		dispatch({
			type: ADD_FLASH_MESSAGE,
			payload: { type: 'normal', text: 'Name changed successfuly'}
		});
	}).catch(err => console.log(err.response.data));
};