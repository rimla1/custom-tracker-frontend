import { PROFILEPLAYERSTATS_API } from '../../utils/constants';
import { useState, useEffect } from 'react';
import StatsWinrateDonut from './StatsWinrateDonut';
import StatsKdaBar from './StatsKdaBar';
import StatsAdditionalInfo from './StatsAdditionalInfo';

const Stats = ({ playerId }) => {
  const [profileStats, setProfileStats] = useState('');

  useEffect(() => {
    fetchProfileStats();
  }, []);

  const fetchProfileStats = async () => {
    const data = await fetch(`${PROFILEPLAYERSTATS_API}${playerId}`);
    const stats = await data.json();
    setProfileStats(stats);
  };

  if (!profileStats) {
    return <div>Loading...</div>;
  }

  const {
    games,
    wins,
    kills,
    deaths,
    assists,
    totalFarm,
    totalGold,
    totalDamage,
    totalLength,
  } = profileStats;

  return (
    <div className='container mx-auto p-6 bg-gray-800 rounded-2xl shadow-xl'>
      <div className='flex justify-between items-center'>
        <div className='flex-grow flex justify-center'>
          <StatsWinrateDonut wins={wins} games={games} />
        </div>
        <div className='flex-grow flex justify-center'>
          <StatsAdditionalInfo
            totalDamage={totalDamage}
            totalGold={totalGold}
            totalFarm={totalFarm}
            totalLength={totalLength}
            games={games}
          />
        </div>
        <div className='flex-grow flex justify-center'>
          <StatsKdaBar kills={kills} deaths={deaths} assists={assists} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
