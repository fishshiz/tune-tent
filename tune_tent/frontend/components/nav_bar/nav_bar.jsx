import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello, {currentUser.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  ) : (
    <div></div>
  );

  return (
      <div>
        {display}
      </div>
  );
};
