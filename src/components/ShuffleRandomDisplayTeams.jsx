const ShuffleRandomDisplayTeams = ({teams}) => {
  

  return (
    <div className='flex justify-center items-start space-x-4 mt-6 mb-6'>
      <div className='bg-blue-200 p-4 rounded shadow w-60'>
        {teams.length === 2
          ? teams[0].map((player, index) => (
              <h1 className='m-2 p-2 bg-blue-50 rounded shadow' key={index}>
                {player}
              </h1>
            ))
          : null}
      </div>
      <div className='bg-red-200 p-4 rounded shadow w-60'>
        {teams.length === 2
          ? teams[1].map((player, index) => (
              <h1 className='m-2 p-2 bg-red-50 rounded shadow' key={index}>
                {player}
              </h1>
            ))
          : null}
      </div>
    </div>
  );
};

export default ShuffleRandomDisplayTeams