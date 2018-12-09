import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getOrdersAction } from '../actions/getOrdersAction';
import { getAllStocksAction } from '../actions/getAllStocksAction';

import genAreaChartOptions from '../utils/generateAreaChartOptions';

import Icon from './Icon';
import Loader from './Loader';
import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import AreaChart from './AreaChart';
import OrdersStats from './OrdersStats';
import ShopVisitors from './ShopVisitors';

import '../styles/Stats.css';

const Stats = ({ stats, stocks, orders, token, getOrdersAction, getAllStocksAction }) => {
	const [countOne, setCountOne] = useState(0);
	useEffect(() => {
		if (orders.length < 1 && countOne !== 1) {
			getOrdersAction(token);
			setCountOne(1);
		}
	}, [orders]);

	const [countTwo, setCountTwo] = useState(0);
	useEffect(() => {
		if (!stocks.series && countTwo !== 1) {
			getAllStocksAction(token);
			setCountTwo(1);
		}
	}, [stocks]);

	let sales = [];
	let spends = [];
	let newClients = [];
	let series = [];

	let salesThisMonth = genAreaChartOptions(`$`, 'Sales this month', [], []);
	let spendsThisMonth = genAreaChartOptions(`$`, 'Spends this month', [], []);
	let newClientsThisMonth = genAreaChartOptions(`$`, 'New clients this month', [], []);

	if (stocks.series !== undefined && stocks.series.length > 0) {
		sales = stocks.sales.data;
		spends = stocks.spends.data;
		newClients = stocks.newClients.data;
		series = stocks.series;

		salesThisMonth = genAreaChartOptions(`$${stocks.sales.totalValue}`, 'Sales this month', sales, series);
		spendsThisMonth = genAreaChartOptions(`$${stocks.spends.totalValue}`, 'Spends this month', spends, series);
		newClientsThisMonth = genAreaChartOptions(`$${stocks.newClients.totalValue}`, 'New clients this month', newClients, series);
	}

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Stats</h2>
					<a role="button" onClick={() => getAllStocksAction(token)}><Icon name="refresh" /> Update</a>
				</div>
				<FlashMessagesList />
				{
					(!stocks.series || stocks.series.length < 1)
						? <Loader />
						:
						(
							<>
								<div className="area">
									<div className="area-chart">
										<AreaChart height={150} width="100%" options={salesThisMonth} />
									</div>
									<div className="area-chart">
										<AreaChart height={150} width="100%" options={spendsThisMonth} />
									</div>
									<div className="area-chart">
										<AreaChart height={150} width="100%" options={newClientsThisMonth} />
									</div>
								</div>
								<div className="block orders-stats">
									<ShopVisitors />
								</div>
								<div className="block orders-stats">
									<OrdersStats stats={stats} />
								</div>
							</>
						)
					}
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		stats: state.orders.stats,
		orders: state.orders.orders,
		token: state.admin.accessToken,
		stocks: state.stats.stocks
	};
};

export default connect(mapStateToProps, { getOrdersAction, getAllStocksAction })(Stats);