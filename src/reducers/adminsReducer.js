import { CHANGE_ADMIN_TYPE } from '../actions/types';

const initialState = [
	{
		id: 1,
		firstName: 'Alex',
		lastName: 'Willson',
		avatar: 'https://avatars.mds.yandex.net/get-pdb/1004346/071d2113-23f4-4b37-b7ce-342ab01c0d6b/orig',
		type: 'Administrator',
		adminMonthsActivity: [
			{name: 'December', completed: 632, canceled: 243},
			{name: 'January', completed: 135, canceled: 24},
			{name: 'February', completed: 56, canceled: 2},
			{name: 'March', completed: 24, canceled: 1},
			{name: 'April', completed: 8, canceled: 4},
			{name: 'May', completed: 243, canceled: 54},
			{name: 'June', completed: 1234, canceled: 142},
			{name: 'July', completed: 69, canceled: 23},
			{name: 'August', completed: 23, canceled: 6},
			{name: 'September', completed: 8, canceled: 1},
			{name: 'October', completed: 231, canceled: 15},
			{name: 'November', completed: 45, canceled: 3}
		]
	},
	{
		id: 2,
		firstName: 'Bob',
		lastName: 'Smith',
		avatar: 'data:image/png;base64,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',
		type: 'Moderator',
		adminMonthsActivity: [
			{name: 'December', completed: 0, canceled: 0},
			{name: 'January', completed: 0, canceled: 0},
			{name: 'February', completed: 0, canceled: 0},
			{name: 'March', completed: 0, canceled: 0},
			{name: 'April', completed: 0, canceled: 0},
			{name: 'May', completed: 0, canceled: 0},
			{name: 'June', completed: 35, canceled: 2},
			{name: 'July', completed: 12, canceled: 0},
			{name: 'August', completed: 0, canceled: 0},
			{name: 'September', completed: 0, canceled: 0},
			{name: 'October', completed: 143, canceled: 68},
			{name: 'November', completed: 321, canceled: 43}
		]
	},
	{
		id: 3,
		firstName: 'Ashley',
		lastName: 'Williams',
		avatar: 'https://avatarfiles.alphacoders.com/103/103875.png',
		type: 'Administrator',
		adminMonthsActivity: [
			{name: 'December', completed: 0, canceled: 0},
			{name: 'January', completed: 0, canceled: 0},
			{name: 'February', completed: 0, canceled: 0},
			{name: 'March', completed: 0, canceled: 0},
			{name: 'April', completed: 0, canceled: 0},
			{name: 'May', completed: 0, canceled: 0},
			{name: 'June', completed: 359, canceled: 89},
			{name: 'July', completed: 23, canceled: 1},
			{name: 'August', completed: 0, canceled: 0},
			{name: 'September', completed: 0, canceled: 0},
			{name: 'October', completed: 143, canceled: 34},
			{name: 'November', completed: 32, canceled: 2}
		]
	}
];

const adminsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_ADMIN_TYPE:
			return state.map(admin => {
				if (admin.id === action.payload.id) {
					return {
						...admin,
						type: action.payload.newType
					};
				} else {
					return admin;
				}
			});
		default:
			return state;
	}
};

export default adminsReducer;