import { CHANGE_CURRENT_ADMIN_TYPE } from '../actions/types';

const initialState = {
	id: 1,
	firstName: 'Alex',
	lastName: 'Willson',
	avatar: 'https://cdn4.telesco.pe/file/PpTaXns0T7b5xv0nWfMJ_w5f13nwm-F_9td1-Qn3p3toHUqE6nz5Qt1LNb5CyBNSBhJjUJm77cbKWXeHIFDT7QsJnXSBC7UDhNCqaBG3lGoJ0JWGvMV9gekLAqVA2xUutIH_xqtZP0pbz4l69Kv38BS-ZVTQuzQybY1JFefXbzeX08BuIrcVA3z9yraURFmveW3G-yunRSIHm-3tpfy05BUFDB7fcLPfeKwxgowNi1ZGwEwpwPo7QW5yOzGsud6HRsi_bzS-UBhxv-O-uc_G6_r8JrpLufqv6H5pXth73CcBTACwJaxmmY-hcEQyWAAEpRenI5VsYeEeLm8TkwLNLQ.jpg',
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