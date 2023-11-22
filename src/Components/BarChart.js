import React from 'react';
import { Bar } from 'react-chartjs-2';

const VerticalProgressiveChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Refunds',
                type: 'line', 
                data: [5, 10, 15, 25, 30, 20, 25, 10, 20, 6, 8, 10],
                fill:  false,
             borderColor: 'red',
                borderWidth: 2,
                pointRadius: 0, 
                borderDash: [5, 5], 
                z:2,
            },
            {
                label:'Earnings',
                data: [70, 45, 85, 60, 75, 40, 90, 30, 65, 80, 50, 7],
                backgroundColor: '#008080',
                hoverBackgroundColor: '#d2f9f4',
                borderWidth: 1,
                borderColor: 'green',
                z:0,
            },
            {
                label: 'Orders',
                type: 'line', 
                data: [10, 20, 55, 35, 40, 30, 25, 15, 30, 26, 50, 10],
                borderColor: ' rgb(55, 61, 63)',
                backgroundColor:' #e8dbf9',
                fill:true,
                borderWidth: 2,
                pointRadius:0,
                z:2,
            },
           
        ],
    };

    const options = {
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                drawBorder: false,
            },
            y: {
                stacked: true,
                max: 120,
                grid: {
                    display: false,
                },
            },
        },
        layout: {
            padding: {
                bottom: 20,
                left: 20,
                right: 20,
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                },
            },

        },
        elements: {
            bar: {
                barThickness:5,
            },
        },
    };

    return (
        <div className='py-3'>
            <Bar data={data} options={options} />
        </div>
    );
};

export default VerticalProgressiveChart;