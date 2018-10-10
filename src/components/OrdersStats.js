import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const OrdersStats = ({ stats, width, height }) => {
	return (
		<BarChart
			width={width}
			height={height}
			data={stats}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="productsSold" fill="#2c3e50" />
		</BarChart>
	);
};

export default OrdersStats;