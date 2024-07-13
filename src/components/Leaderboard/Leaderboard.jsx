import { useEffect, useState } from 'react';
import { LEADERBOARD_API } from '../../utils/constants';

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchPlayers();
  }, [page]);

  const fetchPlayers = async () => {
    const data = await fetch(`${LEADERBOARD_API}?limit=${8}&offset=${(page - 1) * 8}`);
    const dataJson = await data.json();
    setPlayers(dataJson);
  };

  const handlePreviousClick = () => {
    setPage(page - 1)
  }

  const handleNextClick = () => {
    setPage(page + 1)
  }


return (
    <>
    <div className='p-5 m-5 relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-700'>
        <thead className='text-xs text-gray-700 uppercase bg-blue-100'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Rank
            </th>
            <th scope='col' className='px-6 py-3'>
              Username
            </th>
            <th scope='col' className='px-6 py-3'>
              Games
            </th>
            <th scope='col' className='px-6 py-3'>
              Wins
            </th>
            <th scope='col' className='px-6 py-3'>
              Winrate
            </th>
          </tr>
        </thead>
        <tbody>
        {players?.map((player, index) => {
    const rank = (index + 1) + (page - 1) * 8;
    const getClassName = () => {
      switch (rank) {
        case 1:
          return 'bg-yellow-300 border-b border-gray-200 hover:bg-yellow-400';
        case 2:
          return 'bg-gray-300 border-b border-gray-200 hover:bg-gray-400';
        case 3:
          return 'bg-orange-300 border-b border-gray-200 hover:bg-orange-400';
        default:
          return 'bg-white border-b border-gray-200 hover:bg-blue-50';
      }
    };
  
    return (
      <tr className={getClassName()} key={player.in_game_name}>
        <td className='px-6 py-4'>{rank}</td>
        <th
          scope='row'
          className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'
        >
          {player.in_game_name}#{player.tagline}
        </th>
        <td className='px-6 py-4'>{player.total_games}</td>
        <td className='px-6 py-4'>{player.total_wins}</td>
        <td className='px-6 py-4'>{player.win_rate}%</td>
      </tr>
    );
  })}
        </tbody>
      </table>
    </div>
    <div className='flex justify-center items-center mt-8'>
        <button
          disabled={page === 1}
          onClick={handlePreviousClick}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 disabled:opacity-50'
        >
          Previous
        </button>
        <h1 className='text-xl font-semibold mx-4'>{page}</h1>
        <button
          disabled={players.length !== 8}
          onClick={handleNextClick}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4 disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </>
  );
};


  

export default Leaderboard;
