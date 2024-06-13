import { useState } from 'react';
import { BATTLEOFROOTS_API } from '../utils/constants';

const useBattleOfRoots = () => {
  const [twoArrayChampions, setTwoArrayChampions] = useState([]);
  const [places, setPlaces] = useState({ place1: '', place2: '' });

  const fetchChampions = async () => {
    const dataChamps = await fetch(
      `${BATTLEOFROOTS_API}?place1=${places.place1}&place2=${places.place2}`
    );
    const champs = await dataChamps.json();
    setTwoArrayChampions(champs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchChampions();
  };

  const onChangeHandler = (event) => {
    setPlaces((prevPlaces) => ({
      ...prevPlaces,
      [event.target.name]: event.target.value,
    }));
  };

  return [twoArrayChampions, handleSubmit, onChangeHandler]
};

export default useBattleOfRoots
