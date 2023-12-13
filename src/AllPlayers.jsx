// AllPlayers.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AllPlayers = ({ players, onDeletePlayer }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>All Players</h2>
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPlayers.map((player) => (
          <li key={player.id}>
            <Link to={`/singleplayer/${player.id}`}>
              {player.name}
            </Link>
        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPlayers;
