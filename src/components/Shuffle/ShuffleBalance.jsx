import useShuffleBalance from '../../hooks/useShuffleBalance';
import { ranks } from '../../utils/ranks';
import ShuffleBalanceDisplayTeams from './ShuffleBalanceDisplayTeams';

const ShuffleBalance = () => {
  const [players, matchInfo, matchDivRef, handleChange, handleSubmit] = useShuffleBalance();

  return (
    <>
    <div className='flex flex-col items-center'>
      <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
        {players.map((player, index) => (
          <div key={index} className='flex flex-wrap mb-4'>
            <input
              placeholder='Name'
              value={player.inGameName}
              onChange={(e) => handleChange(index, 'inGameName', e.target.value)}
              className='border border-solid border-blue-400 mr-2'
              required
              maxLength={16}
            />
            <select
              value={player.division}
              onChange={(e) => handleChange(index, 'division', e.target.value)}
              className='border border-solid border-blue-400 mr-2'
              required
            >
              <option value="">Select Division</option>
              {ranks.map((rank, i) => (
                <option key={i} value={rank}>{rank}</option>
              ))}
            </select>
            <input 
              placeholder='LP'
              value={player.lp}
              onChange={(e) => handleChange(index, 'lp', e.target.value)}
              className='border border-solid border-blue-400 mr-2'
              required
              type="number"
            />
          </div>
        ))}
        <button type="submit" className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'>
          Shuffle
        </button>
      </form>
    </div>
    {matchInfo && <ShuffleBalanceDisplayTeams matchDivRef={matchDivRef} matchInfo={matchInfo}/> }
    </>
  );
};

export default ShuffleBalance;