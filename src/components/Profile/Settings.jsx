import { useState, useEffect } from 'react';
import { UPDATEPLAYER_API, GETPLAYERBYID_API } from '../../utils/constants';

const Settings = ({ playerId }) => {
  const [username, setUsername] = useState('');
  const [tag, setTag] = useState('');
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await fetch(`${GETPLAYERBYID_API}${playerId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsername(data.inGameName);
        setTag(data.tagline);
      } catch (error) {
        console.log('Error fetching player:', error);
      }
    };

    fetchPlayer();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${UPDATEPLAYER_API}${playerId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inGameName: username,
          tagline: tag,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      {isEditing ? (
        <form onSubmit={handleSaveClick} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              maxLength={16}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Tagline:</label>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
              maxLength={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-gray-700">Username: <span className="text-gray-900">{username}</span></p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Tagline: <span className="text-gray-900">{tag}</span></p>
          </div>
          <button
            onClick={handleEditClick}
            className="px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded-md hover:bg-indigo-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Settings;


