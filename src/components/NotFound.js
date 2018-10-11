import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';

const NotFound = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Not found</h2>
				</div>
				<div className="block">
					<h1>The page you are looking for not found. 404</h1>
				</div>
			</Content>
		</div>
	);
};

export default NotFound;