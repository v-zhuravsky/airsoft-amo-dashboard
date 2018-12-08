import React from 'react';
import { connect } from 'react-redux';
import { changeAdminName, changeAdminPassword } from '../actions/adminsActions';

import Sidebar from './Sidebar';
import Content from './Content';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import ContainerFluid from './ContainerFluid';
import Row from './Row';
import ChangeName from './ChangeName';
import ChangePassword from './ChangePassword';
import ChangeAvatar from './ChangeAvatar';

import '../styles/Settings.css';

const Settings = ({ admin, changeAdminName, changeAdminPassword }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Settings</h2>
				</div>
				<FlashMessagesList />
				<ContainerFluid>
					<Row>
						<div className="col-md-6">
							<ChangeName
								firstName={admin.firstName}
								lastName={admin.lastName}
								submit={(a, b) => changeAdminName(admin.accessToken, admin.id, a, b)} />
							<ChangeAvatar
								avatar={admin.avatar}
								submit={a => alert(a)} />
						</div>
						<div className="col-md-6">
							<ChangePassword
								submit={(a, b, c) => {
									if (a === b) {
										changeAdminPassword(admin.accessToken, admin.id, c, a);
									}
								}} />
						</div>
					</Row>
				</ContainerFluid>				
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		admin: state.admin
	};
};

export default connect(mapStateToProps, { changeAdminName, changeAdminPassword })(Settings);