import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PlayerInfoBar = ({ kills, deaths, assists }) => {
    const adjustedDeaths = deaths > 0 ? deaths : 1;
    const kda = ((kills + assists) / adjustedDeaths || 1).toFixed(2);

    const data = {
        labels: ['Kills', 'Deaths', 'Assists'],
        datasets: [
            {
                label: 'Stats',
                data: [kills, deaths, assists],
                backgroundColor: [
                    '#10B981', 
                    '#EF4444',
                    '#3B82F6', 
                ],
                borderColor: [
                    '#059669', 
                    '#DC2626', 
                    '#2563EB', 
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
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">KDA: {kda}</h1>
            <div className="w-64 h-48">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default PlayerInfoBar;
