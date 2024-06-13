import { useState } from 'react';
import BattleOfRoots from './BattleOfRoots';
import BattleOfSpecies from './BattleOfSpecies';
import ListOfGameModes from './ListOfGameModes';

const GameModes = () => {
  const [activeButton, setActiveButton] = useState("AM")
  return (
    <>
    <div className='flex flex-wrap py-6 justify-center '>
      <button onClick={activeButton !== "AM" ? () => setActiveButton("AM") : null} className={`m-2 p-2 ${activeButton === 'AM' ? 'bg-blue-400' : 'bg-gray-400'}`}> All Modes </button>
      <button onClick={activeButton !== "BOS" ? () => setActiveButton("BOS") : null} className={`m-2 p-2 ${activeButton === 'BOS' ? 'bg-blue-400' : 'bg-gray-400'}`}> Battle of Species </button>
      <button onClick={activeButton !== "BOR" ? () => setActiveButton("BOR") : null} className={`m-2 p-2 ${activeButton === 'BOR' ? 'bg-blue-400' : 'bg-gray-400'}`}> Battle of Roots </button>
    </div>
    {activeButton === "AM" && <ListOfGameModes />}
    {activeButton === "BOS" && <BattleOfSpecies />}
    {activeButton === "BOR" && <BattleOfRoots />}
    </>
  );
};

export default GameModes;
