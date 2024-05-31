import React, { useState } from 'react';
import { RANDOMSHUFFLE_API } from '../utils/constants';

const ShuffleRandom = () => {
  const [inputValues, setInputValues] = useState(Array(10).fill(''));
  const [teams, setTeams] = useState([]);

  const handleInputChange = (index, value) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await fetch(`${RANDOMSHUFFLE_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ players: inputValues }),
    });
    const teams = await data.json();
    setTeams(teams);
  };

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
            />
          ))}
          <button type='submit' className='mt-4 p-2 bg-blue-400 text-white'>
            Shuffle
          </button>
        </form>
      </div>
      {teams.length === 2 && (
        <div className='flex justify-center items-start space-x-4 mt-6 mb-6'>
          <div className='bg-blue-200 p-4 rounded shadow w-60'>
            {teams.length === 2
              ? teams[0].map((team, index) => (
                  <h1 className='m-2 p-2 bg-blue-50 rounded shadow' key={index}>
                    {team}
                  </h1>
                ))
              : null}
          </div>
          <div className='bg-red-200 p-4 rounded shadow w-60'>
            {teams.length === 2
              ? teams[1].map((team, index) => (
                  <h1 className='m-2 p-2 bg-red-50 rounded shadow' key={index}>
                    {team}
                  </h1>
                ))
              : null}
          </div>
        </div>
      )}
    </>
  );
};

export default ShuffleRandom;
