import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { FaSkull, FaHeartBroken, FaHandsHelping } from 'react-icons/fa';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StatsKdaBar = ({ kills, deaths, assists }) => {
    const adjustedDeaths = deaths > 0 ? deaths : 1;
    const kda = ((kills + assists) / adjustedDeaths || 1).toFixed(2);

    const data = {
        labels: ['Kills', 'Deaths', 'Assists'],
        datasets: [
            {
                label: 'Stats',
                data: [kills, deaths, assists],
                backgroundColor: [
                    '#10B981', // Green
                    '#EF4444', // Red
                    '#3B82F6', // Blue
                ],
                borderColor: [
                    '#059669', // Darker Green
                    '#DC2626', // Darker Red
                    '#2563EB', // Darker Blue
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="flex flex-col items-center p-6 mb-6">
            <div className="w-64 h-48 mb-4">
                <Bar data={data} options={options} />
            </div>
            <h1 className="text-2xl font-bold text-white mb-4">KDA: {kda}</h1>
            <div className="text-white">
                <div className="flex items-center mb-2">
                    <FaSkull className="text-green-500 mr-2" />
                    <span className="font-bold">Kills:</span> {kills}
                </div>
                <div className="flex items-center mb-2">
                    <FaHeartBroken className="text-red-500 mr-2" />
                    <span className="font-bold">Deaths:</span> {deaths}
                </div>
                <div className="flex items-center mb-2">
                    <FaHandsHelping className="text-blue-500 mr-2" />
                    <span className="font-bold">Assists:</span> {assists}
                </div>
            </div>
        </div>
    );
};

export default StatsKdaBar;