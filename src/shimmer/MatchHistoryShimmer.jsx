const MatchHistoryShimmer = () => {
  const shimmerArray = [1, 2, 3, 4, 5];

  return (
    <div className='w-full mx-1' id='parentDiv'>
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="relative w-11/12 min-h-32 mx-auto mb-4 p-4 border-8 border-gray-500"
          id='childDiv'
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'gray',
          }}
        >
          <div className='absolute inset-0 bg-black opacity-70 pointer-events-none'></div>
          <div
            className='absolute top-2 right-2 bg-gray-600 text-white p-1 rounded z-20 animate-pulse'
            style={{ width: '80px', height: '24px' }}
          ></div>
          <div className='relative flex items-center justify-center space-x-2 h-full z-10'>
            <div className='bg-gray-600 text-white p-2 rounded animate-pulse' style={{ width: '60px', height: '24px' }}></div>
            <div className='bg-gray-600 text-white p-2 rounded animate-pulse' style={{ width: '60px', height: '24px' }}></div>
            <div className='bg-gray-600 text-white p-2 rounded animate-pulse' style={{ width: '60px', height: '24px' }}></div>
          </div>
          <div className='text-gray-400 text-sm absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 animate-pulse' style={{ width: '150px', height: '20px', backgroundColor: 'gray' }}></div>
        </div>
      ))}
    </div>
  );
};

export default MatchHistoryShimmer;
