import { useState } from 'react';
import { COMPAREPLAYERS_API } from '../../utils/constants';
import CompareTable from './CompareTable';


const Compare = () => {
  const [formData, setFormData] = useState({
    username1: '',
    tagline1: '',
    compareOption: 'VS',
    username2: '',
    tagline2: '',
  });

  const [playersInfo, setPlayersInfo] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${COMPAREPLAYERS_API}?username1=${formData.username1}&tagline1=${formData.tagline1}&compareOption=${formData.compareOption}&username2=${formData.username2}&tagline2=${formData.tagline2}`)
    const data = await response.json()
    setPlayersInfo(data)
  };



  return (
    <div className='flex flex-col items-center justify-start h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900'>
      <form
        onSubmit={handleSubmit}
        className='flex space-x-4 p-4 bg-gray-800 rounded-lg shadow-lg mt-10'
      >
        <input
          required
          type='text'
          name='username1'
          value={formData.username1}
          onChange={handleChange}
          placeholder='Username 1'
          className='px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
        />
        <input
          required
          type='text'
          name='tagline1'
          value={formData.tagline1}
          onChange={handleChange}
          placeholder='Tagline 1'
          className='px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
        />
        <select
          required
          name='compareOption'
          value={formData.compareOption}
          onChange={handleChange}
          className='px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
        >
          <option value='VS'>VS</option>
          <option value='AND'>AND</option>
        </select>
        <input
          required
          type='text'
          name='username2'
          value={formData.username2}
          onChange={handleChange}
          placeholder='Username 2'
          className='px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
        />
        <input
          required
          type='text'
          name='tagline2'
          value={formData.tagline2}
          onChange={handleChange}
          placeholder='Tagline 2'
          className='px-4 py-2 rounded-lg border border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-gray-500'
        />
        <button
          type='submit'
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Compare
        </button>
      </form>
      {playersInfo && <CompareTable playersInfo={playersInfo} />}
    </div>
  );
};

export default Compare;
