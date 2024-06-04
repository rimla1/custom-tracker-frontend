import { useEffect, useRef, useState } from 'react';
import { RANDOMSHUFFLE_API } from '../utils/constants';

const useRandomShuffle = () => {
    const [inputValues, setInputValues] = useState(Array(10).fill(''));
    const [teams, setTeams] = useState([]);
    const teamsDivRef = useRef(null)
  
    const handleInputChange = (index, value) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = await fetch(`${RANDOMSHUFFLE_API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ players: inputValues }),
      });
      const teams = await data.json();
      setTeams(teams);
    };

    useEffect(() => {
      if(teams && teamsDivRef.current){
        teamsDivRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, [teams])

    return [inputValues, teams, handleInputChange, handleSubmit, teamsDivRef]
}

export default useRandomShuffle