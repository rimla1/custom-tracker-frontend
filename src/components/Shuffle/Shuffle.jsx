import useShuffleButton from '../../hooks/useShuffleButtons';
import ShuffleBalance from './ShuffleBalance';
import ShuffleRandom from './ShuffleRandom';

const Shuffle = () => {
  const [activeButton, clickBalance, clickRandom] = useShuffleButton()
  return (
    <div>
      <div className='flex flex-wrap justify-center py-5 space-between'>
        <button onClick={activeButton === "balance" ? clickRandom : null} className={`m-2 p-2 ${activeButton === 'random' ? 'bg-blue-400' : 'bg-gray-400'}`}>Random</button>
        <button onClick={activeButton === "random" ? clickBalance : null} className={`m-2 p-2 ${activeButton === 'balance' ? 'bg-blue-400' : 'bg-gray-400'}`}>Balance</button>
      </div>
      <div>
        {activeButton === 'random' ? <ShuffleRandom /> : <ShuffleBalance /> }
      </div>
    </div>
  );
};

export default Shuffle;
