import { Link } from 'react-router-dom';

const Header = ({ token }) => {
  const tokenFromLocalStorage = localStorage.getItem('jwtToken');

  let decodedToken;
  if (token) {
    decodedToken = JSON.parse(atob(token.split('.')[1]));
  } else if (tokenFromLocalStorage) {
    decodedToken = JSON.parse(atob(tokenFromLocalStorage.split('.')[1]));
  } else {
    decodedToken = null;
  }



  return (
    <div className='bg-gray-800 text-white'>
      <ul className='flex justify-center space-x-4 py-4'>
        <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
          <Link to='/'>Home</Link>
        </li>
        <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
          <Link to='/shuffle'>Shuffle</Link>
        </li>
        <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
          <Link to='/game-modes'>Game Modes</Link>
        </li>

        {decodedToken?.role === 'admin' && (
          <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
            <Link to='/create-game'>Create Game</Link>
          </li>
        )}

        {decodedToken && (
          <>
            <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
              <Link to='/compare'>Compare</Link>
            </li>
            <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
              <Link to='/players'>Players</Link>
            </li>
            <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
              <Link to='/leaderboard'>Leaderboard</Link>
            </li>
            <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
              <Link to='/profile'>Profile</Link>
            </li>
          </>
        )}

        {!decodedToken && (
          <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'>
            <Link to='/authentication'>Sign Up</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
