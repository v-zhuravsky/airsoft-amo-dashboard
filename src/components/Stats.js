import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import OrdersStats from './OrdersStats';

import '../styles/Stats.css';

const Stats = ({ stats }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Stats</h2>
				</div>
				<FlashMessagesList />
				<div className="block orders-stats">
					<h2>Sales by categories stats</h2>
					<OrdersStats width={950} height={350} stats={stats} />
				</div>
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		stats: state.orders.stats
	};
};

export default connect(mapStateToProps)(Stats);