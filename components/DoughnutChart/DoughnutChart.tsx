import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const legendMargin = {
  id: 'legendMargin',
  afterDatasetsDraw(chart: any) {
    const { ctx, data } = chart;
    ctx.save();

    const xCenter = chart.getDatasetMeta(0).data[0].x;
    const yCenter = chart.getDatasetMeta(0).data[0].y;

    let total = 0;
    const dataValues = data.datasets[0].data;
    if (dataValues.length > 0) {
      total = dataValues.reduce((acc: any, curr: any) => acc + curr);
    }

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 36px Roboto, Helvetica, Aria, sans-serif';
    ctx.fillText(total, xCenter, yCenter);
  },
};

const textCenter = {
  id: 'textCenter',
  beforeInit(chart: any) {
    const fitValue = chart.legend.fit;
    chart.legend.fit = function () {
      fitValue.bind(chart.legend)();
      return (this.height += 24);
    };
  },
};

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

const DoughnutChart = () => (
  <Doughnut
    data={data}
    plugins={[legendMargin, textCenter]}
    options={{
      plugins: {
        legend: {
          onClick() {},
        },
      },
    }}
  />
);

export default DoughnutChart;
