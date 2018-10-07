import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';

const Customers = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Customers</h2>
				</div>
			</Content>
		</div>
	);
};

export default Customers;