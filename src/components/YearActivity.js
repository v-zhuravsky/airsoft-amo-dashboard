import React from 'react';
import Chart from 'react-apexcharts';

const YearActivity = ({ activity }) => {
	const completed = activity.map(a => a.completed);
	const canceled = activity.map(a => a.canceled);

	const config = {
		options: {
      chart: {
        id: 'orders-stats-bar',
        stacked: true,
        stackType: '100%'
      },
      colors: ['#007bff', '#F44336'],
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'center'
        	},
      	}  
      },
      dataLabels: {
      	formatter: (val, opt) => {
      		return []
      	}
      },
      xaxis: {
        categories: activity.map(a => a.name)
      },
      title: {
	      text: 'Year activity',
	      style: {
	        fontSize: '24px'
	      }
	    }
    },
    series: [
      {
      	name: 'Completed',
      	data: completed
      },
      {
      	name: 'Canceled',
      	data: canceled
      }
    ]
	};

	return <Chart
		options={config.options}
    series={config.series}
		type="bar"
		height={700} />;
};

export default YearActivity;