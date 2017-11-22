import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <header>
      <h1>tune tent.</h1>
      <GreetingContainer />
    </header>
      <Route path="/" component={NavBarContainer} />
      <Route path="/signup" component={SessionFormContainer} />
      <Route path="/login" component={SessionFormContainer} />
  </div>

);

export default App;
