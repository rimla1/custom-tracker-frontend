import React, { useState } from 'react';
import { positions } from '../../utils/positions';
import { results } from '../../utils/results';
import { CREATEGAME_API } from '../../utils/constants';

const CreateGame = () => {
  const initialState = Array.from({ length: 10 }, () => ({
    inGameName: '',
    tagline: '',
    kills: '',
    deaths: '',
    assists: '',
    winner: '',
    farm: '',
    damageDealt: '',
    goldSpent: '',
    position: '',
    championPlayed: '',
  }));
  const [players, setPlayers] = useState(initialState);
  const [customId, setCustomId] = useState('');
  const [length, setLength] = useState('');
  const [result, setResult] = useState('');
  const token = localStorage.getItem('jwtToken');

  const handleCustomIdChange = (e) => {
    setCustomId(e.target.value);
  };

  const handleGameLengthChange = (e) => {
    setLength(e.target.value);
  };

  const handlePlayersStatsChange = (index, field, value) => {
    const newPlayers = [...players];
    newPlayers[index] = { ...newPlayers[index], [field]: value };
    setPlayers(newPlayers);
  };

  const handleCreateGameSubmit = async (e) => {
    e.preventDefault();
    const payload = await fetch(`${CREATEGAME_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        customId: customId,
        length: length,
        players: players,
      }),
    });
    const payloadJson = await payload.json();
    setResult(payloadJson);
  };
  console.log(result);

  return (
    <div className='p-4'>
      <form
        onSubmit={handleCreateGameSubmit}
        className='border border-gray-300 p-6 rounded-md shadow-2xl grid gap-6'
      >
        <div className='flex space-x-4'>
          <input
            required
            value={customId}
            className='border p-2 flex-grow'
            placeholder='Custom Id'
            onChange={(e) => handleCustomIdChange(e)}
          />
          <input
            required
            value={length}
            min={0}
            type='number'
            className='border p-2 flex-grow'
            placeholder='Game Length'
            onChange={(e) => handleGameLengthChange(e)}
          />
        </div>

        {/* Blue Team */}
        <div className='bg-blue-500 p-4 rounded-md'>
          <h2 className='text-white mb-4'>Blue Team</h2>
          {players.slice(0, 5).map((player, index) => (
            <div key={index} className='flex flex-wrap mb-4'>
              <input
                required
                value={player.inGameName}
                className='border p-2 w-24 flex-grow'
                placeholder='Username'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'inGameName', e.target.value)
                }
              />
              <input
                required
                value={player.tagline}
                className='border p-2 w-20 flex-grow'
                placeholder='Tagline'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'tagline', e.target.value)
                }
              />
              <input
                required
                value={player.kills}
                className='border p-2 w-20 flex-grow'
                placeholder='Kills'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'kills', e.target.value)
                }
              />
              <input
                required
                value={player.deaths}
                className='border p-2 w-24 flex-grow'
                placeholder='Deaths'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'deaths', e.target.value)
                }
              />
              <input
                required
                value={player.assists}
                className='border p-2 w-24 flex-grow'
                placeholder='Assists'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'assists', e.target.value)
                }
              />
              <select
                value={player.winner}
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'winner', e.target.value)
                }
                className='border p-2 w-24 flex-grow'
                required
              >
                <option value=''>Result</option>
                {results.map((result, i) => (
                  <option key={i} value={result}>
                    {result}
                  </option>
                ))}
              </select>
              <input
                required
                value={player.farm}
                className='border p-2 w-20 flex-grow'
                placeholder='Farm'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'farm', e.target.value)
                }
              />
              <input
                required
                value={player.damageDealt}
                className='border p-2 w-24 flex-grow'
                placeholder='Damage'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'damageDealt', e.target.value)
                }
              />
              <input
                required
                value={player.goldSpent}
                className='border p-2 w-20 flex-grow'
                placeholder='Gold'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'goldSpent', e.target.value)
                }
              />
              <select
                value={player.position}
                onChange={(e) =>
                  handlePlayersStatsChange(index, 'position', e.target.value)
                }
                className='border p-2 w-24 flex-grow'
                required
              >
                <option value=''>Position</option>
                {positions.map((position, i) => (
                  <option key={i} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              <input
                required
                value={player.championPlayed}
                className='border p-2 w-24 flex-grow'
                placeholder='Champion'
                onChange={(e) =>
                  handlePlayersStatsChange(
                    index,
                    'championPlayed',
                    e.target.value
                  )
                }
              />
            </div>
          ))}
        </div>

        {/* Red Team */}
        <div className='bg-red-500 p-4 rounded-md'>
          <h2 className='text-white mb-4'>Red Team</h2>
          {players.slice(5, 10).map((player, index) => (
            <div key={index + 5} className='flex flex-wrap mb-4'>
              <input
                required
                value={player.inGameName}
                className='border p-2 w-24 flex-grow'
                placeholder='Username'
                onChange={(e) =>
                  handlePlayersStatsChange(
                    index + 5,
                    'inGameName',
                    e.target.value
                  )
                }
              />
              <input
                required
                value={player.tagline}
                className='border p-2 w-20 flex-grow'
                placeholder='Tagline'
                onChange={(e) =>
                  handlePlayersStatsChange(index + 5, 'tagline', e.target.value)
                }
              />
              <input
                required
                value={player.kills}
                className='border p-2 w-20 flex-grow'
                placeholder='Kills'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index + 5, 'kills', e.target.value)
                }
              />
              <input
                required
                value={player.deaths}
                className='border p-2 w-24 flex-grow'
                placeholder='Deaths'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index + 5, 'deaths', e.target.value)
                }
              />
              <input
                required
                value={player.assists}
                className='border p-2 w-24 flex-grow'
                placeholder='Assists'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index + 5, 'assists', e.target.value)
                }
              />
              <select
                value={player.winner}
                onChange={(e) =>
                  handlePlayersStatsChange(index + 5, 'winner', e.target.value)
                }
                className='border p-2 w-24 flex-grow'
                required
              >
                <option value=''>Result</option>
                {results.map((result, i) => (
                  <option key={i} value={result}>
                    {result}
                  </option>
                ))}
              </select>
              <input
                required
                value={player.farm}
                className='border p-2 w-20 flex-grow'
                placeholder='Farm'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(index + 5, 'farm', e.target.value)
                }
              />
              <input
                required
                value={player.damageDealt}
                className='border p-2 w-24 flex-grow'
                placeholder='Damage'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(
                    index + 5,
                    'damageDealt',
                    e.target.value
                  )
                }
              />
              <input
                required
                value={player.goldSpent}
                className='border p-2 w-20 flex-grow'
                placeholder='Gold'
                type='number'
                onChange={(e) =>
                  handlePlayersStatsChange(
                    index + 5,
                    'goldSpent',
                    e.target.value
                  )
                }
              />
              <select
                value={player.position}
                onChange={(e) =>
                  handlePlayersStatsChange(
                    index + 5,
                    'position',
                    e.target.value
                  )
                }
                className='border p-2 w-24 flex-grow'
                required
              >
                <option value=''>Position</option>
                {positions.map((position, i) => (
                  <option key={i} value={position}>
                    {position}
                  </option>
                ))}
              </select>
              <input
                required
                value={player.championPlayed}
                className='border p-2 w-24 flex-grow'
                placeholder='Champion'
                onChange={(e) =>
                  handlePlayersStatsChange(
                    index + 5,
                    'championPlayed',
                    e.target.value
                  )
                }
              />
            </div>
          ))}
        </div>

        <button
          type='submit'
          className='bg-green-500 text-white p-2 rounded-md hover:bg-green-600'
        >
          Create Game
        </button>
      </form>
    </div>
  );
};

export default CreateGame;
