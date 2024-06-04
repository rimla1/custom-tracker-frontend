import { useState, useRef, useEffect } from 'react';
import { BALANCESHUFFLE_API } from '../utils/constants';

const useShuffleBalance = () => {
    const initialState = Array.from({ length: 10 }, () => ({ inGameName: '', division: '', lp: '' }));
    const [players, setPlayers] = useState(initialState);
    const [matchInfo, setMatchInfo] = useState(null)
    const matchDivRef = useRef(null);
  
    const handleChange = (index, field, value) => {
      const newPlayers = [...players];
      newPlayers[index] = { ...newPlayers[index], [field]: value };
      setPlayers(newPlayers);
    };
  
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = await fetch(`${BALANCESHUFFLE_API}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ players: players }),
        });
      const matchInfo = await data.json();
      setMatchInfo(matchInfo)
    };
  
    useEffect(() => {
      if (matchInfo && matchDivRef.current) {
          matchDivRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [matchInfo]);

    return [players, matchInfo, matchDivRef, handleChange, handleSubmit]
}

export default useShuffleBalance