import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import AdminCard from './AdminCard';
import FlashMessagesList from './FlashMessagesList';
import Icon from './Icon';

const Admins = ({ admins, currentAdminId }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Admins</h2>
					<Link to="/add-admin"><Icon name="plus" />Add new admin</Link>
				</div>
				<FlashMessagesList />
				{
					admins.map(admin => <AdminCard admin={admin} currentAdminId={currentAdminId} key={admin.id} />)
				}
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		admins: state.admins,
		currentAdminId: state.admin.id
	};
};

export default connect(mapStateToProps)(Admins);