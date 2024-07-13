import { useState, useEffect } from 'react';
import { GAMEHISTORY_API } from '../../utils/constants';

import { LuSword } from "react-icons/lu";
import { BiSolidCoinStack } from "react-icons/bi";
const GameHistory = ({gameId, inGameName, tagline}) => {

  const [gameHistory, setGameHistory] = useState("")

  useEffect(() => {
    fetchGameData()
  }, [])

  const fetchGameData = async () => {
    const data = await fetch(`${GAMEHISTORY_API}${gameId}`)
    const gameInfo = await data.json()
    setGameHistory(gameInfo)
  }

  const isMatchingPlayer = (player) => {
    return player.inGameName === inGameName && player.tagline === tagline;
  };
  return (
    <>
      <div className="mb-4">
        <div className="bg-green-100 mt-10 bg-opacity-50 p-4 rounded">
          {gameHistory[0]?.map((player, index) => (
            <div key={index} className={`mb-1 flex ${isMatchingPlayer(player) ? 'font-bold' : ''}`}>
              <span className="w-1/3">{player.inGameName}#{player.tagline}</span>
              <span className="w-1/6">{player.kills}/{player.deaths}/{player.assists}</span>
              <span className="w-1/6 flex items-center">
                <BiSolidCoinStack className="mr-1" /> {player.goldSpent}
              </span>
              <span className="w-1/6 flex items-center">
                <LuSword className="mr-1" /> {player.damageDealt}
              </span>
              <span className="w-1/6">{player.championName}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="bg-red-100 bg-opacity-50 p-4 rounded">
          {gameHistory[1]?.map((player, index) => (
            <div key={index} className={`mb-1 flex ${isMatchingPlayer(player) ? 'font-bold' : ''}`}>
              <span className="w-1/3">{player.inGameName}#{player.tagline}</span>
              <span className="w-1/6">{player.kills}/{player.deaths}/{player.assists}</span>
              <span className="w-1/6 flex items-center">
                <BiSolidCoinStack className="mr-1" /> {player.goldSpent}
              </span>
              <span className="w-1/6 flex items-center">
                <LuSword className="mr-1" /> {player.damageDealt}
              </span>
              <span className="w-1/6">{player.championName}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GameHistory;
