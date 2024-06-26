import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <ul className='flex justify-center space-x-4 py-4'>
                <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to="/">Home</Link></li>
                <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to='/players'>Players</Link></li>
                <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to='/leaderboard'>Leaderboard</Link></li>
                {/* <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to="/match-history">Match History</Link></li> */}
                <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to="/create-game">Create Game</Link></li>
                <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to="/shuffle">Shuffle</Link></li>
                <li className='px-4 py-2 rounded hover:bg-gray-700 transition duration-300'><Link to="/game-modes">Game Modes</Link></li>
            </ul>
        </div>
    )
}

export default Header;