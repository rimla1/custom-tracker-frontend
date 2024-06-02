import React, { useState } from 'react';
import { ranks } from '../utils/ranks';
import { lpRanges } from '../utils/lpRanges';
import { BALANCESHUFFLE_API } from '../utils/constants';

const ShuffleBalance = () => {
  const initialState = Array.from({ length: 10 }, () => ({ inGameName: '', division: '', lp: '' }));
  const [players, setPlayers] = useState(initialState);
  const [matchInfo, setMatchInfo] = useState("")

  const handleChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setPlayers(newPlayers);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = await fetch(`${BALANCESHUFFLE_API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ players: players }),
      });
    const matchInfo = await data.json();
    setMatchInfo(matchInfo)
  };

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
            <select
              value={player.lp}
              onChange={(e) => handleChange(index, 'lp', e.target.value)}
              className='border border-solid border-blue-400 mr-2'
              required
            >
              <option value="">Select LP</option>
              {lpRanges.map((lpRange, i) => (
                <option key={i} value={lpRange}>{lpRange}</option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'>
          Shuffle
        </button>
      </form>
    </div>
    <div className="flex flex-col items-center space-y-4 mt-6 mb-6">
    <div className="flex justify-center items-start space-x-4">
      <div className="bg-blue-200 p-4 rounded shadow w-60">
        <h1 className="border border-solid bg-blue-300 text-center border-blue-600 rounded">
          Team power is {matchInfo?.team1LP}
        </h1>
        {matchInfo?.team1?.map((player, index) => (
          <div key={index}>{player}</div>
        ))}
      </div>
      <div className="bg-red-200 p-4 rounded shadow w-60">
        <h1 className="border border-solid bg-red-300 text-center border-red-600 rounded">
          Team power is {matchInfo?.team2LP}
        </h1>
        {matchInfo?.team2?.map((player, index) => (
          <div key={index}>{player}</div>
        ))}
      </div>
    </div>
    <h1 className="text-white text-center bg-gradient-to-r from-blue-300 to-red-300 p-4 rounded">Favourite is: {matchInfo?.favorit}</h1>
  </div>
    </>
  );
};

export default ShuffleBalance;