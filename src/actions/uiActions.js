import { TOGGLE_SIDEBAR } from './types';

export const toggleSidebar = currentLeft => dispatch => {
	dispatch({
		type: TOGGLE_SIDEBAR,
		payload: currentLeft
	});
};