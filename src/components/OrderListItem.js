import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';

const OrderListItem = ({ order }) => {
	return (
		<div className="order-list-item">
			<Link to={"/order/" + order.id}>#{order.id}<Icon name="long-arrow-right" />{order.name}</Link>
			<div className="order-item-controls">
				<button className="complete"><Icon name="check" /></button>
				<button className="cancel"><Icon name="times" /></button>
			</div>
		</div>
	);
};

export default OrderListItem;