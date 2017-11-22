import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
    </div>
  );

  return (
    <header>
      <h1>TUNETENT</h1>
      <div>
        {display}
      </div>
    </header>
  );
};
