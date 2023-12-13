import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Players</Link>
        <Link to="/addplayer">Add Player</Link>
      </nav>
    </div>
  );
};

export default NavBar;
