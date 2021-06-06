import React from 'react';
import ProTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

function BarChart({ labelData, bmiData }) {

    const data = canvas => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(63, 81, 181, 700);
        gradient.addColorStop(0, '#929dd9');
        gradient.addColorStop(1, '#172b4d');

        return {
            labels: labelData,
            datasets: [
                {
                    label: 'BMI',
                    data: bmiData,
                    backgroundColor: gradient,
                    borderColer: '#3F51B5',
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointHoverBorderColor: 'white',
                    pointHoverBorderWidth: 2
                }
            ]
        };
    };

    const options = {
        responsive: true,
        scales: {
            xAxes: [
                {
                    scaleLable: {
                        display: true,
                        labelString: 'Date',
                        fontSize: 18,
                        fontColor: 'white'
                    },

                    gridLines: {
                        display: false,
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16
                    },


                }
            ],

            yAxes: [
                {
                    scaleLable: {
                        display: true,
                        labelString: 'BMI',
                        fontSize: 18,
                        fontColor: 'white'
                    },
                    gridLines: {
                        display: false,
                        color: 'white',

                    },
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16,
                        beginAtZero: true,
                    }

                }
            ]
        },

        tooltips: {
            titleFontSize: 13,
            bodyFontSize: 13
        }
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    )
}

BarChart.propTypes = {
    labelData: ProTypes.array,
    bimData: ProTypes.array
};

export default BarChart;