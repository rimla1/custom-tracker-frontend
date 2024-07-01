import { useEffect, useState } from 'react';
import { REGISTER_API } from '../../utils/constants';

const Register = ({ handleLoginActionClick }) => {
  const [registerInfo, setRegisterInfo] = useState({
    inGameName: '',
    tagline: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistred, setIsRegistred] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${REGISTER_API}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        inGameName: registerInfo.inGameName,
        tagline: registerInfo.tagline,
        email: registerInfo.email,
        password: registerInfo.password,
      }),
    });
    if (response.status === 201) {
      setIsRegistred(true);
    } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Registration failed. Please try again.');
    }
  };

  useEffect(() => {
    if (isRegistred) {
      handleLoginActionClick();
    }
  }, [isRegistred]);

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Username
        </label>
        <input
          value={registerInfo.inGameName}
          type='text'
          name='inGameName'
          required
          placeholder='Username'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Tagline
        </label>
        <input
          value={registerInfo.tagline}
          type='text'
          name='tagline'
          required
          placeholder='Tagline'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          E-mail
        </label>
        <input
          value={registerInfo.email}
          type='email'
          name='email'
          required
          placeholder='E-mail'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input
          value={registerInfo.password}
          type='password'
          name='password'
          required
          placeholder='Password'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Register
      </button>
      {errorMessage && (
      <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>
    )}
    </form>
  );
};

export default Register;
