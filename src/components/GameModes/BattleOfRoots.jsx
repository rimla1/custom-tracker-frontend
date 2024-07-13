import InfoBattleGameMode from './InfoBattleGameMode';
import { placeOfOriginOptions } from '../../utils/placeOfOrigin';
import DisplayChampions from './DisplayChampions';
import useBattleOfRoots from '../../hooks/GameModes/useBattleOfRoots';

const BattleOfRoots = () => {
  const [twoArrayChampions, handleSubmit, onChangeHandler] = useBattleOfRoots();

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl'>Battle of Roots</h1>
      {twoArrayChampions.length === 0 && <InfoBattleGameMode />}
      <form onSubmit={handleSubmit} className='flex items-center m-4 p-4'>
        <select
          name='place1'
          required
          onChange={onChangeHandler}
          className='mr-20 border border-solid border-blue-500'
        >
          <option value=''>Select First Place</option>
          {placeOfOriginOptions.map((place, index) => (
            <option key={index} value={place}>
              {place}
            </option>
          ))}
        </select>

        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded'
        >
          Battle
        </button>

        <select
          name='place2'
          required
          onChange={onChangeHandler}
          className='ml-20 border border-solid border-blue-500'
        >
          <option value=''>Select Second Place</option>
          {placeOfOriginOptions.map((place, index) => (
            <option key={index} value={place}>
              {place}
            </option>
          ))}
        </select>
      </form>
      {twoArrayChampions.place1Champions &&
        twoArrayChampions.place2Champions && (
          <DisplayChampions
            champions1={twoArrayChampions.place1Champions}
            type1={twoArrayChampions.place1Champions[0].placeOfOrigin}
            champions2={twoArrayChampions.place2Champions}
            type2={twoArrayChampions.place2Champions[0].placeOfOrigin}
          />
        )}
    </div>
  );
};

export default BattleOfRoots;
