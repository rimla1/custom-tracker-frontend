import { useState } from 'react';
import PlayerInfo from './PlayerInfo';
import PlayerInput from './PlayerInput';

const Players = () => {
  const [player, setPlayer] = useState(null)
  return (
    <div>
      <PlayerInput updatePlayer={setPlayer}/>
      {player && <PlayerInfo info={player}/>}
    </div>
  );
};

export default Players;