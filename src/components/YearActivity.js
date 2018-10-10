import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const YearActivity = ({ activity, width, height }) => {
	return (
		<BarChart
			width={width}
			height={height}
			data={activity}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="completed" fill="#2ecc71" />
			<Bar dataKey="canceled" fill="#e74c3c" />
		</BarChart>
	);
};

export default YearActivity;