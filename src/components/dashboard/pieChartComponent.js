import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const PieChartComponent = () => {
  // Data for the chart
  const data = {
    labels: ['Item 1', 'Item 2', 'Item 3'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 50, 100], // Example data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Pie Chart Example',
      },
    },
  };

  return <Pie data={data} options={options} width={300} height={271} />;
};

export default PieChartComponent;
