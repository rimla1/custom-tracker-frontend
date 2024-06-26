import { useState } from 'react'
import { BATTLEOFSPECIES_API } from '../../utils/constants'

const useBattleOfSpecies = () => {
    const [twoChampsArray, setTwoChampsArray] = useState([]);
    const [species, setSpecies] = useState({ specie1: '', specie2: '' });
  
    
  
    const handleSubmit = (event) => {
      event.preventDefault();
      fetchData()
    };
  
  
    const onChangeHandler = (event) => {
      setSpecies((prevSpecies) => ({
        ...prevSpecies,
        [event.target.name]: event.target.value,
      }));
    };
  
    const fetchData = async () => {
      const data = await fetch(
        `${BATTLEOFSPECIES_API}?specie1=${species.specie1}&specie2=${species.specie2}`
      );
      const arrayOfChamps = await data.json();
      setTwoChampsArray(arrayOfChamps);
    };

    return [twoChampsArray, handleSubmit, onChangeHandler]
}

export default useBattleOfSpecies