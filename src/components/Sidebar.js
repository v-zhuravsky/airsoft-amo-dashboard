import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { logoutAction } from '../actions/logoutAction';
import { NavLink } from 'react-router-dom';

import Icon from './Icon';

import '../styles/Sidebar.css';

const Sidebar = ({ admin, left, logoutAction }) => {
	const [avatar, setAvatar] = useState(admin.avatar);
	useEffect(() => {
		setAvatar(admin.avatar);
	}, [admin, admin.avatar]);

	return (
		<div style={{ left }} className="sidebar">
			<div className="sidebar-header">
				<h2>AirsoftAmo</h2>
			</div>
			<div className="sidebar-user">
				<img
					src={avatar}
					alt={`${admin.firstName} ${admin.lastName}`}
					className="img-responsive img-circle" />
				<div className="text">
					<h3>{admin.firstName} {admin.lastName}</h3>
					<p>{admin.type}</p>
				</div>
			</div>
			<NavLink exact to="/"><Icon name="th-large" />Warehouse</NavLink>
			<NavLink exact to="/admins"><Icon name="id-badge" />Admins</NavLink>
			<NavLink to="/customers"><Icon name="users" />Customers</NavLink>
			<NavLink to="/stats"><Icon name="area-chart" />Stats</NavLink>
			<NavLink to="/settings"><Icon name="cog" />Settings</NavLink>
			<a role="button" onClick={() => logoutAction(admin.accessToken)}><Icon name="arrow-left" />Sign out</a>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		admin: state.admin,
		left: state.ui.sidebarLeft
	};
};

export default connect(mapStateToProps, { logoutAction })(Sidebar);