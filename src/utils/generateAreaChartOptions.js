export default (title, subtitle, data, series) => {
  return {
    chart: {
      background: '#fff',
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        top: 2,
        left: 0,
        blur: 10,
        opacity: 0.3,
        color: '#000'
      }
    },
    dataLabels: {
      enabled: false
    },
    title: {
      text: title,
      offsetX: 10,
      offsetY: 10,
      style: {
        fontSize: '24px'
      }
    },
    subtitle: {
      text: subtitle,
      offsetX: 10,
      offsetY: 50,
      style: {
        fontSize: '14px'
      }
    },
    stroke: {
      curve: 'straight'
    },
    series: [{
      name: '$',
      data: data
    }],
    xaxis: {
      categories: series
    },
    yaxis: {
      opposite: true,
      show: false
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    }
  };
};