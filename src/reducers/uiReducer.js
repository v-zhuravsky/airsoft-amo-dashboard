import { TOGGLE_SIDEBAR } from '../actions/types';

const initialState = {
	sidebarLeft: '0',
	contentWidth: 'calc(100% - 250px)'
};

const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return action.payload === '0'
				? {
					...state,
					sidebarLeft: '-250px',
					contentWidth: '100%'
				}
				: {
					...state,
					sidebarLeft: '0',
					contentWidth: 'calc(100% - 250px)'
				};
		default:
			return state;
	}
};

export default uiReducer;