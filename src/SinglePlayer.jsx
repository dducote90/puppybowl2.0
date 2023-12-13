import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePlayer = ({ players, onDeletePlayer }) => {
  const { id } = useParams();
  const playerId = parseInt(id, 10);

  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      
        const { data } = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${playerId}`);
        setPlayer(data.data.player);
      
    };

    fetchPlayer();
  }, [playerId]);

  const handleDelete = async () => {
    
      await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${playerId}`);
      onDeletePlayer(playerId);
    
  };

  if (!player) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Player Details</h2>
      <p>Name: {player.name}</p>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <img src={player.imageUrl} alt={player.name} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SinglePlayer;
