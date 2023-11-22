import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  useEffect(() => {
    const obj = {
      labels: ['Direct', 'Social', 'Email', 'Other', 'Refferals'],
      datasets: [
        {
          data: [20, 32, 23, 9, 8],
          backgroundColor: ['#001F3F', '#008000', '#FFC107', '#FF4500', '#87CEEB'],
        },
      ],
    };

    const canvas = document.getElementById('myPie');
    const ctx = canvas.getContext('2d');
    if (canvas.chart) {
      canvas.chart.destroy();
    }

    canvas.chart = new Chart(ctx, {
      type: 'doughnut',
      data: obj,
      options: {
        cutout: '65%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true, 
              },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = obj.labels[context.dataIndex];
                const value = obj.datasets[0].data[context.dataIndex];
                const total = obj.datasets[0].data.reduce((acc, curr) => acc + curr, 0);
                const percentage = ((value / total) * 100).toFixed(2) ;
                return `${label}: ${percentage}`;
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="false-For-Bottom-Text">
      <div className="mypiechart">
        <div className='d-flex justify-content-between '>
        </div>
        <canvas id="myPie"></canvas>
      </div>
    </div>
  );
};

export default PieChart;
