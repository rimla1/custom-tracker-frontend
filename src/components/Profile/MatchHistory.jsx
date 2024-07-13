import React, { useState, useEffect } from 'react';
import MatchHistoryShimmer from '../../shimmer/MatchHistoryShimmer';
import { MATCHHISTORY_API } from '../../utils/constants';
import GameHistory from './GameHistory';

const MatchHistory = ({ playerId, inGameName, tagline}) => {

  const [matchesv1, setMatchesv1] = useState([]);
  const [expandedMatch, setExpandedMatch] = useState(null);
  const [isLoading, setIsLoading] = useState(true)



    useEffect(() => {
      const fetchMatchHistory = async () => {
        try {
          const response = await fetch(`${MATCHHISTORY_API}${playerId}`);
          const data = await response.json()
          setMatchesv1(data);
        } catch (error) {
          console.error('Error fetching match history:', error);
        } finally {
          setIsLoading(false)
        }
      };

      fetchMatchHistory();
    }, []);

  const toggleExpand = (index) => {
    setExpandedMatch(expandedMatch === index ? null : index);
  };

  if(isLoading){
      return <MatchHistoryShimmer />
  }

  if(matchesv1.length === 0){
    return(
      <div className="flex flex-col items-center justify-center min-h-screen text-black p-6">
        <h1 className="text-3xl font-bold mb-4 animate-pulse">Play some games to receive match history...</h1>
        <p className="text-lg mb-2 text-center">Win or Lose? No one cares, as long as you have fun!</p>
        <p className="text-sm text-center text-gray-400 italic">Nah just kidding, of course your friend will flame you if you have negative winrate and ints his games</p>
      </div>
    )
  }

  const removeNonLettersAndSpaces = (str) => {
    return str.replace(/[^a-zA-Z]/g, '');
  }


  return (
    <div className='w-full mx-1' id='parentDiv'>
      {matchesv1.map((match, index) => (
        <div
          key={index}
          className={`relative w-11/12 min-h-32 mx-auto mb-4 p-4 border-8 ${
            match.isWinner ? 'border-green-500' : 'border-red-500'
          }`}
          id='childDiv'
          style={{
            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${removeNonLettersAndSpaces(match.championPlayed)}_0.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='absolute inset-0 bg-black opacity-70 pointer-events-none'></div>
          <button
            onClick={() => toggleExpand(index)}
            className='absolute top-2 right-2 bg-gray-700 text-white p-1 rounded z-20'
          >
            {expandedMatch === index ? 'Collapse' : 'Expand'}
          </button>

          {expandedMatch !== index && (
            <div className='relative flex items-center justify-center space-x-2 h-full z-10'>
              <p className='text-white'>
                {match.kills}/{match.deaths}/{match.assists}
              </p>
              <p className='text-white'>{match.farm}cs</p>
              <p className='text-white'>{match.length}min</p>
            </div>
          )}

          <div className='text-gray-400 text-sm absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10'>
            <p>Played on: {new Date(match.createdAt).toLocaleDateString()}</p>
          </div>
          {expandedMatch === index && (
            <div className='relative z-20 mt-4 mb-8'>
              <GameHistory gameId={match.gameId} inGameName={inGameName} tagline={tagline} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MatchHistory;
