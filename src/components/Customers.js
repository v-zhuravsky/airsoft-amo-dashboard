import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import OrdersList from './OrdersList';

const Customers = ({ orders }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Customers</h2>
				</div>
				<FlashMessagesList />
				<OrdersList orders={orders.reverse()} />
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		orders: state.orders.orders
	};
};

export default connect(mapStateToProps)(Customers);