import React from 'react';
import Chart from 'react-apexcharts';

const OrdersStats = ({ stats }) => {
	const categories = stats.map(cat => cat.name);
	const data = stats.map(cat => cat.productsSold);

	const config = {
		options: {
      chart: {
        id: 'orders-stats-bar'
      },
      xaxis: {
        categories: categories
      },
      title: {
	      text: 'Sales by categories stats',
	      style: {
	        fontSize: '24px'
	      }
	    }
    },
    series: [
      {
        name: 'Total sales',
        data: data
      }
    ]
	};

	return (
		<Chart
			options={config.options}
      series={config.series}
			type="bar"
			height={300} />
	);
};

export default OrdersStats;