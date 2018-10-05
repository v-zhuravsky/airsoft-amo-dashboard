import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content.js';

const Dashboard = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<h1>Dashboard</h1>
			</Content>
		</div>
	);
};

export default Dashboard;