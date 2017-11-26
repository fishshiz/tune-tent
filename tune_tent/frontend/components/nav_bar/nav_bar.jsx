import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const userPath = currentUser ? currentUser.id : '/';
  const display =  (
    <header>
      <Link to="/">tune tent.</Link>
      <Link to="/albums/new">upload</Link>
        <div className="search">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="search artists" />
        </div>
          <Link to={`/artists/${userPath}`}>your site</Link>

      <button onClick={logout}>logout</button>
    </header>
  );

  return (
      <div>
        {display}
      </div>
  );
};
