import React from 'react';

const loggedIn = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-username">Hey, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Logout</button>
  </hgroup>
);

const Greeting =({ currentUser, logout }) => (
  currentUser ? loggedIn(currentUser, logout) : null
);

export default Greeting;
