import { useState, useEffect } from 'react';
import { texts } from '../utils/flames';

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white text-center'>
      <h1 className='text-6xl font-bold mb-8'>Game night with friends?</h1>
      <h3 className='text-4xl mb-6'>Sounds cool until...</h3>
      <p className='text-2xl mb-4 max-w-4xl px-4'>
        That one friend claims to have won every single game night, saying he is
        the best player with a perfect KDA and winrate.
      </p>
      <p className='text-2xl mb-4 max-w-4xl px-4'>
        But in Reality... we all know that he is a{' '}
        <span className='bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-600 inline-block text-transparent bg-clip-text'>{texts[currentTextIndex]}</span>
      </p>
      <p className='text-2xl mb-4 max-w-4xl px-4'>
        CUSTOM TRACKER is here to solve all those false claims and prove that
        your friend is hardstuck.
      </p>
    </div>
  );
};

export default Home;
