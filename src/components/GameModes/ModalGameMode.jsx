const ModalGameMode = ({ gameModeModal, setGameModeModal }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      setGameModeModal(false);
    }
  };

  return (
    <>
      <div id="modal-overlay" onClick={handleOverlayClick} className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
              <h3 className='text-3xl font-semibold'>{gameModeModal?.title}</h3>
              <button
                className='p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                onClick={() => setGameModeModal(false)}
              >
                <span className='bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none'>
                  X
                </span>
              </button>
            </div>
            <div className='relative p-6 flex-auto'>
              <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                {gameModeModal?.description}
              </p>
              <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                {gameModeModal?.rules}
              </p>
              <p className='my-4 text-blueGray-500 text-lg leading-relaxed'>
                {gameModeModal?.availableChampions}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
    </>
  );
};

export default ModalGameMode;
