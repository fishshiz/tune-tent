import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';

export default ({ currentUser, logout }) => {
  const userPath = currentUser ? currentUser.id : '/';
  const display =  (
    <header>
      <Link to="/">tune tent.</Link>
      <Link to="/albums/new">upload</Link>
      <SearchContainer />
        
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
