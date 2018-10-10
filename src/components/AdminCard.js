import React from 'react';
import { Link } from 'react-router-dom';

import Img from './Img';
import Icon from './Icon';

import '../styles/AdminCard.css';

const AdminCard = ({ admin, currentAdminId }) => {
	return (
		<div className="col-md-3">
			<div className="admin-card">
				<Img src={admin.avatar} alt={`${admin.firstName} ${admin.lastName}`} className="img-responsive img-circle" />
				<h2>
					<Link to={"/admin/" + admin.id}>
						<Icon name="user-secret" />{admin.firstName} {admin.lastName}
					</Link>
				</h2>
				{
					currentAdminId === admin.id
						? <p className="you">You</p>
						: <p className="admin">{admin.type}</p>
				}
			</div>
		</div>
	);
};

export default AdminCard;