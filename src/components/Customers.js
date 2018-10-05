import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content.js';

const Customers = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<h1>Customers</h1>
			</Content>
		</div>
	);
};

export default Customers;