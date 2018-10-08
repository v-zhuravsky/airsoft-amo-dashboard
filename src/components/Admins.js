import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import ContainerFluid from './ContainerFluid';
import Row from './Row';
import AdminCard from './AdminCard';

const Admins = ({ admins }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Admins</h2>
				</div>
				{
					admins.map(admin => <AdminCard admin={admin} key={admin.id} />)
				}
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		admins: state.admins
	};
};

export default connect(mapStateToProps)(Admins);