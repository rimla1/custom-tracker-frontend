import React from 'react';

const DonutChart = ({ wins = 20, losses = 10 }) => {
  const total = wins + losses;
  const winRate = (wins / total) * 100;
  const loseRate = 100 - winRate;

  const circumference = 100;
  const winOffset = (circumference * winRate) / 100;
  const loseOffset = circumference - winOffset;

  return (
    <div className='flex justify-center items-center'>
      <svg width='200' height='200' viewBox='0 0 36 36' className='donut'>
        <circle
          className='donut-ring'
          cx='18'
          cy='18'
          r='15.91549431'
          fill='transparent'
          stroke='#d2d3d4'
          strokeWidth='3.8'
        />
        <circle
          className='donut-segment'
          cx='18'
          cy='18'
          r='15.91549431'
          fill='transparent'
          stroke='#00FF00'
          strokeWidth='3.8'
          strokeDasharray={`${winOffset} ${circumference - winOffset}`}
          strokeDashoffset='25'
        />
        <circle
          className='donut-segment'
          cx='18'
          cy='18'
          r='15.91549431'
          fill='transparent'
          stroke='#FF0000'
          strokeWidth='3.8'
          strokeDasharray={`${loseOffset} ${circumference - loseOffset}`}
          strokeDashoffset={`${25 + winOffset}`}
        />
        <text
          x='18'
          y='20.35'
          className='donut-text'
          textAnchor='middle'
          fill='#333'
          fontSize='0.5em'
          fontWeight='bold'
        >
          {Math.round(winRate)}%
        </text>
      </svg>
    </div>
  );
};

export default DonutChart;
