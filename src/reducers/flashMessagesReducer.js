import {
	ADD_FLASH_MESSAGE,
	DELETE_FLASH_MESSAGE
} from '../actions/types';

const initialState = [];

const flashMessagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FLASH_MESSAGE:
			return [
				...state,
				{
					id: state.length + 1,
					...action.payload
				}
			];
		case DELETE_FLASH_MESSAGE:
			return [
				...state.filter(message => {
					return message.id !== action.payload
				})
			];
		default:
			return state;
	}
};

export default flashMessagesReducer;