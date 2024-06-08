import { useState } from 'react';
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
    {activeButton === "BOS" && <h1>Battle of Species</h1>}
    {activeButton === "BOR" && <h1>Battle of Roots</h1>}
    </>
  );
};

export default GameModes;
