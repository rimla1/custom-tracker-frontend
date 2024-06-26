import { useEffect, useState } from 'react';
import { ALLGAMEMODES_API } from '../../utils/constants';

const useListOfGameModes = () => {
    const [allGameModes, setAllGameModes] = useState([]);
    const [page, setPage] = useState(1);
    const [gameModeModal, setGameModeModal] = useState(false)
  
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
  
    const openModal = (gameMode) => {
      setGameModeModal(gameMode)
    }

    return [allGameModes, gameModeModal, page, handlePreviousClick, handleNextClick, openModal, setGameModeModal]
}

export default useListOfGameModes