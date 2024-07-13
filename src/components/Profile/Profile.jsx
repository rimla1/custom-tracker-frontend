import { useState } from 'react';
import Stats from './Stats'; 
import MatchHistory from './MatchHistory';
import Settings from './Settings';

const Profile = () => {
    const [activeButton, setActiveButton] = useState("Stats");
    const token = localStorage.getItem('jwtToken');
    let decodedToken;
    if (token) {
        decodedToken = JSON.parse(atob(token.split('.')[1]));
    }

    return (
        <div className="flex flex-col items-center">
            <div className='flex justify-center py-5 space-x-4'>
                <button
                    onClick={() => setActiveButton("Stats")}
                    className={`m-2 px-4 py-2 rounded-full transition-colors duration-300 ${activeButton === 'Stats' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                >
                    Stats
                </button>
                <button
                    onClick={() => setActiveButton("Match History")}
                    className={`m-2 px-4 py-2 rounded-full transition-colors duration-300 ${activeButton === 'Match History' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                >
                    Match History
                </button>
                <button
                    onClick={() => setActiveButton("Settings")}
                    className={`m-2 px-4 py-2 rounded-full transition-colors duration-300 ${activeButton === 'Settings' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                >
                    Settings
                </button>
            </div>
            {activeButton === "Stats" && <Stats playerId={decodedToken.player.id} />}
            {activeButton === "Match History" && <MatchHistory playerId={decodedToken.player.id} inGameName={decodedToken.player.inGameName} tagline={decodedToken.player.tagline}/>}
            {activeButton === "Settings" && <Settings playerId={decodedToken.player.id} inGameName={decodedToken.player.inGameName} tagline={decodedToken.player.tagline} />}
        </div>
    );
}

export default Profile;
