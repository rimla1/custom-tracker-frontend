import { useState } from 'react';
import { LOGIN_API } from '../../utils/constants';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate()

  const { setToken } = useOutletContext();


  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${LOGIN_API}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed. Please try again.');
        return;
      }

      const tokenFromBackend = await response.text();
      console.log(tokenFromBackend)
      localStorage.setItem('jwtToken', tokenFromBackend);
      setToken(tokenFromBackend)
      navigate('/profile')
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    }
  };


  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          E-mail
        </label>
        <input
          name='email'
          value={loginInfo.email}
          type='email'
          required
          placeholder='e-mail'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div>
        <label className='block text-sm font-medium text-gray-700'>
          Password
        </label>
        <input
          name='password'
          value={loginInfo.password}
          type='password'
          required
          placeholder='password'
          className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <button
        type='submit'
        className='w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Login
      </button>
      {errorMessage && (
        <p className='text-red-500 text-sm mt-2'>{errorMessage}</p>
      )}
    </form>
  );
};

export default Login;
