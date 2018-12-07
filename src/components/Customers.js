import React from 'react';
import { connect } from 'react-redux';
import { getOrdersAction } from '../actions/getOrdersAction';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import OrdersList from './OrdersList';
import Loader from './Loader';

const Customers = ({ orders, token, getOrdersAction }) => {
	if (orders.length < 1) {
		getOrdersAction(token);
	}

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Customers</h2>
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