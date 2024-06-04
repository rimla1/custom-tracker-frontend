import { useState } from 'react'

export const useShuffleButton = () => {
    const [activeButton, setActiveButton] = useState('random')

    const clickBalance = () => {
      setActiveButton('balance')
    }
  
    const clickRandom = () => {
      setActiveButton('random')
    }

    return [activeButton, clickBalance, clickRandom]
}

export default useShuffleButton