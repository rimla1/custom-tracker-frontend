import { useEffect, useState } from 'react';
import { ALLGAMEMODES_API } from '../../utils/constants';
import ModalGameMode from './ModalGameMode';

const ListOfGameModes = () => {
  const [allGameModes, setAllGameModes] = useState([]);
  const [page, setPage] = useState(1);
  const [showModalId, setShowModalId] = useState(false)

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    const limit = 12;
    const offset = 12 * (page - 1);
    const data = await fetch(
      `${ALLGAMEMODES_API}?offset=${offset}&limit=${limit}`
    );
    const jsonData = await data.json();
    setAllGameModes(jsonData);
  };

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

  const openModal = (gameId) => {
    setShowModalId(gameId)
  }

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {allGameModes.map((gameMode) => (
          <div
            key={gameMode.id}
            className='bg-white shadow-xl rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300'
          >
            <h2 className='text-xl font-semibold mb-2'>{gameMode.title}</h2>
            <p className='text-gray-700'>{gameMode.description}</p>
            <button onClick={() => openModal(gameMode.id)} className='bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>Open</button>
          </div>
        ))}
      </div>
      {showModalId && <ModalGameMode gameModeId={showModalId} setShowModalId={setShowModalId}/>}
      <div className='flex justify-center items-center mt-8'>
        <button
          disabled={page === 1}
          onClick={handlePreviousClick}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4 disabled:opacity-50'
        >
          Previous
        </button>
        <h1 className='text-xl font-semibold mx-4'>{page}</h1>
        <button
          disabled={allGameModes.length !== 12}
          onClick={handleNextClick}
          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-4 disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ListOfGameModes;
