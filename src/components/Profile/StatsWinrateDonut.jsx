import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaTrophy, FaThumbsDown } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const StatsWinrateDonut = ({ wins, games }) => {
  const loses = games - wins;
  const winrate = ((wins / games) * 100).toFixed();

  const data = {
    labels: ['Wins', 'Loses'],
    datasets: [
      {
        data: [wins, loses],
        backgroundColor: ['#10B981', '#EF4444'],
        hoverBackgroundColor: ['#059669', '#DC2626'],
      },
    ],
  };

  const options = {
    cutout: '70%',
  };

  return (
    <div className='flex flex-col items-center p-6 '>
      <div className='w-48 h-48 mb-4'>
        <Doughnut data={data} options={options} />
      </div>
      <div className='text-white'>
        <div className='flex  mb-4 mt-4 font-bold text-2xl items-center'>
          <span>Winrate:</span> {winrate}%
        </div>
        <div className='flex items-center mb-2'>
          <FaTrophy className='text-green-500 mr-2' />
          <span className='font-bold'>Wins:</span> {wins}
        </div>
        <div className='flex items-center mb-2'>
          <FaThumbsDown className='text-red-500 mr-2' />
          <span className='font-bold'>Loses:</span> {loses}
        </div>
        <div className='flex items-center mb-2'>
          <span className='font-bold'>Total Games:</span> {games}
        </div>
      </div>
    </div>
  );
};

export default StatsWinrateDonut;
