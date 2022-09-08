import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['JS', 'Python', 'Java', 'C#', 'PHP', 'Ruby'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgb(240, 219, 79)',
        'rgb(75, 139, 190)',
        'rgb(199, 70, 52)',
        'rgb(185, 86, 150)',
        'rgb(72, 76, 137)',
        'rgb(211, 17, 69)',
      ],
      borderColor: [
        'rgb(240, 219, 79)',
        'rgb(75, 139, 190)',
        'rgb(199, 70, 52)',
        'rgb(185, 86, 150)',
        'rgb(72, 76, 137)',
        'rgb(211, 17, 69)',
      ],
    },
  ],
};

const DoughnutChart = () => <Doughnut data={data} />;

export default DoughnutChart;
