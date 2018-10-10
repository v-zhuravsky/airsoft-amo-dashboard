import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';

const Stats = () => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Stats</h2>
				</div>
				<FlashMessagesList />
			</Content>
		</div>
	);
};

export default Stats;