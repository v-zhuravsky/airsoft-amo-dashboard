import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeAdminType } from '../actions/adminsActions';

import Sidebar from './Sidebar';
import Content from './Content';
import FlashMessagesList from './FlashMessagesList';
import ToggleSidebar from './ToggleSidebar';
import ContainerFluid from './ContainerFluid';
import Row from './Row';
import Img from './Img';
import Icon from './Icon';
import YearActivity from './YearActivity';

import '../styles/Admin.css';

const Admin = ({ admin, currentAdminId, token, changeAdminType }) => {
	const [type, setType] = useState(admin.type);

	const handleChange = e => {
		setType(e.target.value);
		changeAdminType(token, admin.id, e.target.value, currentAdminId);
	};

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>{admin.firstName} {admin.lastName} {currentAdminId === admin.id && "| You"}</h2>
				</div>
				<FlashMessagesList />
				<ContainerFluid>
					<Row>
						<div className="col-md-4 pr-0">
							<div className="block admin-block">
								<div className="admin-short-info">
									<Img
										src={admin.avatar}
										alt={`${admin.firstName} ${admin.lastName}`}
										className="img-responsive img-circle" />
									<h3>{admin.firstName} {admin.lastName}</h3>
								</div>
								<div className="admin-stats">
									<p><Icon name="check" />Completed orders: {admin.completedOrders}</p>
									<p><Icon name="times" />Canceled orders: {admin.canceledOrders}</p>
									<p><Icon name="calendar" />Works since: {admin.worksSince}</p>
								</div>
							</div>
							<div className="block change-type">
								<select value={type} onChange={handleChange}>
									<option value="Administrator">Administrator</option>
									<option value="Moderator">Moderator</option>
								</select>
							</div>
						</div>
						<div className="col-md-8 pl-n">
							<div className="block activity-chart">
								<YearActivity
									activity={admin.adminMonthsActivity} />
							</div>
						</div>
					</Row>
				</ContainerFluid>
			</Content>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		admin: state.admins.filter(admin => admin.id === Number(ownProps.match.params.id))[0],
		currentAdminId: state.admin.id,
		token: state.admin.accessToken
	};
};

export default connect(mapStateToProps, { changeAdminType })(Admin);