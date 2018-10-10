import React from 'react';

import ContainerFluid from './ContainerFluid';
import Row from './Row';
import OrderListItem from './OrderListItem';

import '../styles/OrdersList.css';

const OrdersList = ({ orders }) => {
	return (
		<ContainerFluid>
			<Row>
				<div className="col-md-12">
					{
						orders.length > 0
							? <div className="block list">
								{
									orders.map(order => {
										return <OrderListItem order={order} key={order.id} />;
									})
								}
							</div>
							: <div className="block"><h2>No orders</h2></div>
					}
				</div>
			</Row>
		</ContainerFluid>
	);
};

export default OrdersList;