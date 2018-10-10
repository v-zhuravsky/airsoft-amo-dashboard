const initialState = {
	stats: [
		{name: 'Assault rifles', productsSold: 142},
		{name: 'Machine guns', productsSold: 203},
		{name: 'Shotguns', productsSold: 179},
		{name: 'Pistols', productsSold: 125},
		{name: 'Sniper rifles', productsSold: 34},
		{name: 'Tactical gear', productsSold: 165},
		{name: 'Lanterns and light devices', productsSold: 78}
	],
	orders: []
};

const ordersReducer = (state = initialState, action) => {
	return state;
};

export default ordersReducer;