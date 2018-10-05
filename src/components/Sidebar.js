import React from 'react';
import { NavLink } from 'react-router-dom';

import Icon from './Icon';

import '../styles/Sidebar.css';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<NavLink to="/"><Icon name="th-large" />Warehouse</NavLink>
			<NavLink to="/customers"><Icon name="users" />Customers</NavLink>
			<NavLink to="/stats"><Icon name="area-chart" />Stats</NavLink>
		</div>
	);
};

export default Sidebar;