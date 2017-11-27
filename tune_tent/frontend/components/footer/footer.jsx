import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  const display =  (
    <footer>
      <div className="quote">
        <h1>This is a really cool site. -Edan</h1>
      </div>
      <div className="footer-links">
        <a href="https://edanlewis.com">My site</a>
        <a href="https://github.com/fishshiz">Github</a>
        <a href="https://www.linkedin.com/in/edan-lewis-752633133/">LinkedIn</a>
      </div>
    </footer>
  );

  return (
      <div>
        {display}
      </div>
  );
};
