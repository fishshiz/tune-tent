import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>tune tent.</h1>
      <GreetingContainer />
    </header>
      <Route path="/signup" component={SignupContainer} />
  </div>

);

export default App;
