
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const PlayerInfoDonut = ({ wins, games }) => {
    const defeats = games - wins;
    const winrate = ((wins / games) * 100).toFixed()

    const data = {
        labels: ['Wins', 'Defeats'],
        datasets: [
            {
                data: [wins, defeats],
                backgroundColor: ['#10B981', '#EF4444'], 
                hoverBackgroundColor: ['#059669', '#DC2626'],
            },
        ],
    };

    const options = {
        cutout: '70%',
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Winrate: {winrate}%</h1>
            <div className="w-48 h-48">
                <Doughnut data={data} options={options} />
            </div>
        </div>
    );
};

export default PlayerInfoDonut