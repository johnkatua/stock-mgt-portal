'use client';

import { Line } from 'react-chartjs-2';
import ChartJS, { CategoryScale } from 'chart.js/auto';

const data = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Sales',
      backgroundColor: '#fb6e60',
      borderColor: '#fb6e60',
      data: [2300, 2100, 4050],
    },
    {
      label: 'Purchases',
      backgroundColor: '#862e2a',
      borderColor: '#862e2a',
      data: [4500, 9000, 4050],
    },
  ],
};

ChartJS.register(CategoryScale);

const LineChart = () => {
  return <Line data={data} />;
};

export default LineChart;
