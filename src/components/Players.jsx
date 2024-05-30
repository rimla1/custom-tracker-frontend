import useDisplayPlayers from '../hooks/useDisplayPlayers';
import PlayerInfo from './PlayerInfo';

const Players = () => {
  const [players, page, previousClickHandler, nextClickHandler] = useDisplayPlayers()
  return (
    <div>
      <div className='flex flex-col items-center'>
        {players?.map((player) => {
          return <PlayerInfo key={player.id} info={player} />;
        })}
      </div>
      <div className='flex flex-wrap justify-center py-5 space-between'>
        <button onClick={page > 1 ? previousClickHandler : null} className={`bg-blue-400 m-2 p-2 ${page === 1 && 'disabled: bg-gray-500 cursor-not-allowed'}`}>Previous</button>
        <h1 className='border border-solid border-blue-400 m-2 p-2 rounded-3xl'>
          {page}
        </h1>
        <button onClick={nextClickHandler} className={`bg-blue-400 m-2 p-2 ${players.length < 5 && 'disabled: bg-gray-500 cursor-not-allowed'}`}>Next</button>
      </div>
    </div>
  );
};

export default Players;