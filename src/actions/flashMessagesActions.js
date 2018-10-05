import {
	ADD_FLASH_MESSAGE,
	DELETE_FLASH_MESSAGE
} from './types';

export const addFlashMessage = message => dispatch => {
	console.log('addFlashMessageAction');
	dispatch({
		type: ADD_FLASH_MESSAGE,
		payload: message
	});
};

export const deleteFlashMessage = id => dispatch => {
	console.log('deleteFlashMessageAction');
	dispatch({
		type: DELETE_FLASH_MESSAGE,
		payload: id
	});
};