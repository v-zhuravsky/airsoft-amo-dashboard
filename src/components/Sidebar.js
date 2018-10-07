import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Icon from './Icon';
import Img from './Img';

import '../styles/Sidebar.css';

const Sidebar = ({ admin }) => {
	return (
		<div className="sidebar">
			<div className="sidebar-header">
				<h2>AirsoftAmo</h2>
			</div>
			<div className="sidebar-user">
				<Img
					src={admin.avatar}
					alt={`${admin.firstName} ${admin.lastName}`}
					className="img-responsive img-circle" />
				<div className="text">
					<h3>{admin.firstName} {admin.lastName}</h3>
					<p>{admin.type}</p>
				</div>
			</div>
			<NavLink exact to="/"><Icon name="th-large" />Warehouse</NavLink>
			<NavLink to="/customers"><Icon name="users" />Customers</NavLink>
			<NavLink to="/stats"><Icon name="area-chart" />Stats</NavLink>
			<NavLink to="/settings"><Icon name="cog" />Settings</NavLink>
			<NavLink to="/logout"><Icon name="arrow-left" />Sign out</NavLink>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		admin: state.admin
	};
};

export default connect(mapStateToProps)(Sidebar);