import { useState, useEffect } from 'react';
import { PLAYERS_API } from '../utils/constants';

const useDisplayPlayers = () => {
    const [players, setPlayers] = useState([]);
    const [page, setPage] = useState(1);
  
    const previousClickHandler = () => {
      if (page > 1) {
        setPage(page - 1);
      }
    };
  
    const nextClickHandler = () => {
      if(players.length === 5){
          setPage(page + 1)
      }
    }
  
    useEffect(() => {
      fetchPlayers();
    }, [page]);
  
    const fetchPlayers = async () => {
      const players = await fetch(`${PLAYERS_API}?offset=${(page - 1) * 5}`);
      const jsonPlayers = await players.json();
      setPlayers(jsonPlayers);
    };

    return [players, page, previousClickHandler, nextClickHandler]
}

export default useDisplayPlayers