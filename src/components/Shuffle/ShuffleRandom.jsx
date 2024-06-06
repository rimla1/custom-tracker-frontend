import ShuffleRandomDisplayTeams from './ShuffleRandomDisplayTeams';
import useRandomShuffle from '../../hooks/useRandomShuffle';

const ShuffleRandom = () => {
  const [inputValues, teams, handleInputChange, handleSubmit, teamsDivRef] = useRandomShuffle()

  return (
    <>
      <div className='flex flex-col items-center'>
        <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
          {inputValues.map((value, index) => (
            <input
              key={index}
              className='mb-2 p-2 border border-solid border-blue-400 outline-blue-600'
              placeholder='name'
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              required
              maxLength={16}
            />
          ))}
          <button type='submit' className='mt-4 p-2 bg-blue-400 text-white'>
            Shuffle
          </button>
        </form>
      </div>
      {teams.length === 2 && (<ShuffleRandomDisplayTeams teams={teams} teamsDivRef={teamsDivRef}/>)}
    </>
  );
};

export default ShuffleRandom;