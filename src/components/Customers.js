import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getOrdersAction } from '../actions/getOrdersAction';

import Icon from './Icon';
import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import OrdersList from './OrdersList';
import Loader from './Loader';

const Customers = ({ orders, token, getOrdersAction }) => {
	useEffect(() => {
		if (orders.length < 1) {
			getOrdersAction(token);
		}
	}, [orders]);

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Customers</h2>
					<a role="button" onClick={() => getOrdersAction(token)}><Icon name="refresh" /> Update</a>
				</div>
				<FlashMessagesList />
				{ orders.length < 1 ? <Loader /> : <OrdersList orders={orders} /> }
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		orders: state.orders.orders,
		token: state.admin.accessToken
	};
};

export default connect(mapStateToProps, { getOrdersAction })(Customers);