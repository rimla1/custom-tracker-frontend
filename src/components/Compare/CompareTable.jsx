import React from 'react';
import { FaTrophy, FaGamepad, FaSkull, FaHandRock, FaFistRaised, FaChartLine } from 'react-icons/fa';

const CompareTable = ({ playersInfo }) => {
  const {
    statsForPlayer1,
    player1Winrate,
    player1Wins,
    player1KDA,
    totalGames,
    statsForPlayer2,
    player2Winrate,
    player2Wins,
    player2KDA
  } = playersInfo;

  const p1Loses = totalGames - player1Wins;
  const p2Loses = totalGames - player2Wins;

  return (
    <div className="mt-10 p-6 bg-gray-800 rounded-lg shadow-lg mx-10 w-11/12 max-w-4xl">
      <table className="w-full table-auto text-white text-lg">
        <thead>
          <tr className="text-center">
            <th className="px-4 py-2 border-b border-gray-600">Player 1</th>
            <th className="px-4 py-2 border-b border-gray-600"></th>
            <th className="px-4 py-2 border-b border-gray-600">Player 2</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{totalGames}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaGamepad className="inline-block text-xl" /> Games</td>
            <td className="px-4 py-2 border-b border-gray-600">{totalGames}</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{player1Wins}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaTrophy className="inline-block text-xl" /> Wins</td>
            <td className="px-4 py-2 border-b border-gray-600">{player2Wins}</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{p1Loses}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaSkull className="inline-block text-xl" /> Loses</td>
            <td className="px-4 py-2 border-b border-gray-600">{p2Loses}</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{player1Winrate}%</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaChartLine className="inline-block text-xl" /> Winrate</td>
            <td className="px-4 py-2 border-b border-gray-600">{player2Winrate}%</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{statsForPlayer1.sumKills}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaHandRock className="inline-block text-xl" /> Kills</td>
            <td className="px-4 py-2 border-b border-gray-600">{statsForPlayer2.sumKills}</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{statsForPlayer1.sumDeaths}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaSkull className="inline-block text-xl" /> Deaths</td>
            <td className="px-4 py-2 border-b border-gray-600">{statsForPlayer2.sumDeaths}</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{statsForPlayer1.sumAssists}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaFistRaised className="inline-block text-xl" /> Assists</td>
            <td className="px-4 py-2 border-b border-gray-600">{statsForPlayer2.sumAssists}</td>
          </tr>
          <tr className="text-center">
            <td className="px-4 py-2 border-b border-gray-600">{player1KDA}</td>
            <td className="px-4 py-2 border-b border-gray-600"><FaChartLine className="inline-block text-xl" /> KDA</td>
            <td className="px-4 py-2 border-b border-gray-600">{player2KDA}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CompareTable;
