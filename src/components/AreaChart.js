import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart = ({ height, width, options }) => {
  return <Chart
    type="area"
    height={height}
    options={options}
    series={options.series}
    width={width}
  />;
};

export default AreaChart;