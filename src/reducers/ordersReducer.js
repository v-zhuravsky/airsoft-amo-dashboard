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
	orders: [
		{
			id: 1,
			name: 'Alex Green',
			phoneNumber: '+380662104314',
			deliveryLocation: 'location 1',
			products: [
				{
					productId: 1,
					amount: 1,
					productName: "M16A3 Katana System [WE]",
					category: "rifles",
					productPrice: "606"
				},
				{
					productId: 2,
					amount: 10,
					productName: "AKC-74M E&L Gen2",
					category: "rifles",
					productPrice: "407"
				}
			]
		},
		{
			id: 2,
			name: 'Brad Traversy',
			phoneNumber: '+380662105634',
			deliveryLocation: 'location 2',
			products: [
				{
					productId: 1,
					amount: 4,
					productName: "M16A3 Katana System [WE]",
					category: "rifles",
					productPrice: "606"
				},
				{
					productId: 2,
					amount: 23,
					productName: "AKC-74M E&L Gen2",
					category: "rifles",
					productPrice: "407"
				}
			]
		}
	]
};

const ordersReducer = (state = initialState, action) => {
	return state;
};

export default ordersReducer;