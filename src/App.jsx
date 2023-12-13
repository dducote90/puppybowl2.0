import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';
import AddPlayer from './AddPlayer';
import './App.css';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const { data } = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players');
        setPlayers(data.data.players);
      } catch (error) {
        console.error('Error fetching players:', error);
      }
    };
    fetchPlayers();
  }, []);

  const addPlayer = async (newPlayer) => {
    setPlayers([...players, newPlayer]);
  };

  const deletePlayer = async (playerId) => {
    try {
      await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${playerId}`);
      setPlayers(players.filter((player) => player.id !== playerId));
    } catch (error) {
      console.error('Error deleting player:', error);
    }
  };

  return (
    <div>
      <h1>Puppy Bowl 2023!</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers players={players} onDeletePlayer={deletePlayer} />} />
        <Route path="/singleplayer/:id" element={<SinglePlayer players={players} onDeletePlayer={deletePlayer} />} />
        <Route path="/addplayer" element={<AddPlayer onAddPlayer={addPlayer} />} />
      </Routes>
    </div>
  );
}

export default App;
