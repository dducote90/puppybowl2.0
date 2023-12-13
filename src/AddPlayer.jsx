import React, { useState } from 'react';
import axios from 'axios';

const AddPlayer = ({ onAddPlayer }) => {
  const [newPupp, setNewPupp] = useState({
    name: '',
    breed: '',
    status: '',
    imageUrl: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2310/players', newPupp);
      onAddPlayer(response.data);
      setNewPupp({
        name: '',
        breed: '',
        status: '',
        imageUrl: '',
      });
    } catch (error) {
      console.error('Error adding player:', error);
    }
  };

  return (
    <div>
      <h2>Add a New Player</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newPupp.name}
            onChange={(event) => setNewPupp({ ...newPupp, name: event.target.value })}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            value={newPupp.breed}
            onChange={(event) => setNewPupp({ ...newPupp, breed: event.target.value })}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            value={newPupp.status}
            onChange={(event) => setNewPupp({ ...newPupp, status: event.target.value })}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={newPupp.imageUrl}
            onChange={(event) => setNewPupp({ ...newPupp, imageUrl: event.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPlayer;
