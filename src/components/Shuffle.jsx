import { useState } from 'react';

const Shuffle = () => {
  const [activeButton, setActiveButton] = useState('random')

  const clickBalance = () => {
    setActiveButton('balance')
    console.log("NAH!")
  }

  const clickRandom = () => {
    setActiveButton('random')
  }


  return (
    <div>
      <div className='flex flex-wrap justify-center py-5 space-between'>
        <button onClick={activeButton === "balance" ? clickRandom : null} className={`m-2 p-2 ${activeButton === 'random' ? 'bg-blue-400' : 'bg-gray-400'}`}>Random</button>
        <button onClick={activeButton === "random" ? clickBalance : null} className={`m-2 p-2 ${activeButton === 'balance' ? 'bg-blue-400' : 'bg-gray-400'}`}>Balance</button>
      </div>
      <div>
        <h1>{activeButton === 'random' ? "RANDOMSHUFFLECOMPONENT" : "BALANCESHUFFLECOMPONENT" } </h1>
      </div>
    </div>
  );
};

export default Shuffle;
