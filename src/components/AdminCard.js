import React from 'react';

import Img from './Img';
import Icon from './Icon';

import '../styles/AdminCard.css';

const AdminCard = ({ admin }) => {
	return (
		<div className="col-md-3">
			<div className="admin-card">
				<Img src={admin.avatar} alt={`${admin.firstName} ${admin.lastName}`} className="img-responsive img-circle" />
				<h2><Icon name="user-secret" />{admin.firstName} {admin.lastName}</h2>
				<p>{admin.type}</p>
			</div>
		</div>
	);
};

export default AdminCard;