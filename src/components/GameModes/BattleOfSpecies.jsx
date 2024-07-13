import useBattleOfSpecies from '../../hooks/GameModes/useBattleOfSpecies';
import { speciesOptions } from '../../utils/species';
import DisplayChampions from './DisplayChampions';
import InfoBattleGameMode from './InfoBattleGameMode';

const BattleOfSpecies = () => {
  const [twoChampsArray, handleSubmit, onChangeHandler] = useBattleOfSpecies();
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl'>Battle of Species</h1>
      {twoChampsArray.length === 0 && <InfoBattleGameMode />}
      <form onSubmit={handleSubmit} className='flex items-center m-4 p-4'>
        <select
          name='specie1'
          required
          onChange={onChangeHandler}
          className='mr-20 border border-solid border-blue-500'
        >
          <option value=''>Select First Specie</option>
          {speciesOptions.map((specie, index) => (
            <option key={index} value={specie}>
              {specie}
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
          name='specie2'
          required
          onChange={onChangeHandler}
          className='ml-20 border border-solid border-blue-500'
        >
          <option value=''>Select Second Specie</option>
          {speciesOptions.map((specie, index) => (
            <option key={index} value={specie}>
              {specie}
            </option>
          ))}
        </select>
      </form>
      {twoChampsArray.specie1Champions && twoChampsArray.specie2Champions && (
        <DisplayChampions
          champions1={twoChampsArray.specie1Champions}
          type1={twoChampsArray.specie1Champions[0].specie}
          champions2={twoChampsArray.specie2Champions}
          type2={twoChampsArray.specie2Champions[0].specie}
        />
      )}
    </div>
  );
};

export default BattleOfSpecies;
