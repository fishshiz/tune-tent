import React from 'react';
import { Link } from 'react-router-dom';

const loggedOut = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
  </nav>
);

const loggedIn = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-username">Hey, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Logout</button>
  </hgroup>
);

const Greeting =({ currentUser, logout }) => (
  currentUser ? loggedIn(currentUser, logout) : loggedOut()
);

export default Greeting;
