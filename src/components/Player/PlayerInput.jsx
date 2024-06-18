import { useState } from 'react';
import { PLAYER_API } from '../../utils/constants';

const PlayerInput = ({updatePlayer}) => {
  const [playerInfo, setPlayerInfo] = useState({
    inGameName: '',
    tagline: 'EUNE',
  });

  const fetchPlayer = async () => {
    const fetchedPlayer = await fetch(
      `${PLAYER_API}?inGameName=${playerInfo.inGameName}&tagline=${playerInfo.tagline}`
    );
    const jsonPlayer = await fetchedPlayer.json();
    updatePlayer(jsonPlayer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPlayer();
  };

  const handleChange = (event) => {
    setPlayerInfo((prevPlayerInfo) => ({
      ...prevPlayerInfo,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className='m-3 p-3 flex wrap justify-center items-center'>
      <form className='flex space-x-4' onSubmit={handleSubmit}>
        <input
          className='px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'
          onChange={handleChange}
          name='inGameName'
          placeholder='Username'
          maxLength={16}
        />
        <input
          className='px-4 py-2 border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'
          onChange={handleChange}
          name='tagline'
          placeholder='Tagline'
          maxLength={5}
        />
        <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75'>
          Search
        </button>
      </form>
    </div>
  );
};

export default PlayerInput;
