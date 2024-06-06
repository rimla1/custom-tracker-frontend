const ShuffleBalanceDisplayTeams = ({ matchDivRef, matchInfo }) => {
  return (
    <div
      ref={matchDivRef}
      className='flex flex-col items-center space-y-4 mt-6 mb-6'
    >
      <div className='flex justify-center items-start space-x-4'>
        <div className='bg-blue-200 p-4 rounded shadow w-60'>
          <h1 className='border border-solid bg-blue-300 text-center border-blue-600 rounded'>
            Blue team power is {matchInfo?.team1LP}
          </h1>
          {matchInfo?.team1?.map((player, index) => (
            <div key={index}>{player}</div>
          ))}
        </div>
        <div className='bg-red-200 p-4 rounded shadow w-60'>
          <h1 className='border border-solid bg-red-300 text-center border-red-600 rounded'>
            Red team power is {matchInfo?.team2LP}
          </h1>
          {matchInfo?.team2?.map((player, index) => (
            <div key={index}>{player}</div>
          ))}
        </div>
      </div>
      <h1 className='text-white text-center bg-gradient-to-r from-blue-300 to-red-300 p-4 rounded'>
        Favourite is: {matchInfo?.favorit}
      </h1>
    </div>
  );
};

export default ShuffleBalanceDisplayTeams;
