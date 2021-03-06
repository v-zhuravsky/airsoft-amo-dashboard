import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAdminsAction } from '../actions/adminsActions';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import AdminCard from './AdminCard';
import FlashMessagesList from './FlashMessagesList';
import Icon from './Icon';
import Loader from './Loader';

const Admins = ({ admins, currentAdminId, token, fetchAdminsAction }) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (admins.length < 1 && count !== 1) {
			fetchAdminsAction(token);
			setCount(1);
		}
	});

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Admins</h2>
					<a role="button" onClick={() => fetchAdminsAction(token)}><Icon name="refresh" /> Update</a>
					<Link to="/add-admin"><Icon name="plus" />Add new admin</Link>
				</div>
				<FlashMessagesList />
				{
					admins.length < 1
						? <Loader />
						: (
							admins.map(admin => 
								<AdminCard
									admin={admin}
									currentAdminId={currentAdminId}
									key={admin.id} 
								/>
							)
						)
				}
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		admins: state.admins,
		currentAdminId: state.admin.id,
		token: state.admin.accessToken
	};
};

export default connect(mapStateToProps, { fetchAdminsAction })(Admins);