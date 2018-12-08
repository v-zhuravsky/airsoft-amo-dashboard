import React from 'react';
import { connect } from 'react-redux';

import genAreaChartOptions from '../utils/generateAreaChartOptions';

import Sidebar from './Sidebar';
import Content from './Content.js';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import AreaChart from './AreaChart';
import OrdersStats from './OrdersStats';
import ShopVisitors from './ShopVisitors';

import '../styles/Stats.css';

const Stats = ({ stats }) => {
	const dataOne = [101, 77, 46, 169, 128, 168, 110, 115, 51, 51, 231, 13, 151, 145, 164, 23, 137, 198, 206, 154, 192, 228, 33, 237, 224, 48, 44, 11, 286, 195];
	const dataTwo = [36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94];
	const dataThree = [108, 121, 72, 83, 138, 66, 113, 128, 50, 26, 2, 44, 43, 56, 75, 195, 125, 42, 113, 88, 202, 149, 188, 152, 3, 99, 123, 245, 12, 186];
	const series = ['1/12/2018', '2/12/2018', '3/12/2018', '4/12/2018', '5/12/2018', '6/12/2018', '7/12/2018', '8/12/2018', '9/12/2018', '10/12/2018', '11/12/2018', '12/12/2018', '13/12/2018', '14/12/2018', '15/12/2018', '16/12/2018', '17/12/2018', '18/12/2018', '19/12/2018', '20/12/2018', '21/12/2018', '22/12/2018', '23/12/2018', '24/12/2018', '25/12/2018', '26/12/2018', '27/12/2018', '28/12/2018', '29/12/2018', '30/12/2018'];

	const salesThisMonth = genAreaChartOptions('$3936', 'Sales this month', dataOne, series);
	const spendsThisMonth = genAreaChartOptions('$1950', 'Spends this month', dataTwo, series);
	const newClientsThisMonth = genAreaChartOptions('$3047', 'New clients this month', dataThree, series);

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Stats</h2>
				</div>
				<FlashMessagesList />
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