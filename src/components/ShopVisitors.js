import React from 'react';
import Chart from 'react-apexcharts';

const generateData = (count, yrange) => {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = (i + 1).toString() + '/12/2018';
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
};

const pageOne = generateData(30, {
    min: 0,
    max: 90
});
const pageTwo = generateData(30, {
    min: 0,
    max: 90
});
const pageThree = generateData(30, {
    min: 0,
    max: 90
});
const pageFour = generateData(30, {
    min: 0,
    max: 90
});
const pageFive = generateData(30, {
    min: 0,
    max: 90
});

const ShopVisitors = () => {
  const options = {
    chart: {
      id: 'visitors-stats-bar'
    },
    dataLabels: {
      enabled: false
    },
    colors: ['#008FFB'],
    xaxis: {
      labels: {
        show: false
      }
    },
    series: [
      {
        name: 'Checkout page',
        data: pageOne
      },
      {
        name: 'Cart page',
        data: pageTwo
      },
      {
        name: 'Search page',
        data: pageThree
      },
      {
        name: 'Product page',
        data: pageFour
      },
      {
        name: 'Main page',
        data: pageFive
      }
    ],
    title: {
      text: 'Shop visitors by pages',
      style: {
        fontSize: '24px'
      }
    }
};

  return <Chart
    type="heatmap"
    options={options}
    series={options.series}
    height={240} />;
};

export default ShopVisitors;