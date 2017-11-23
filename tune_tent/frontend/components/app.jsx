import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util.jsx';

const App = () => (
  <div>
    <header>
      <h1>tune tent.</h1>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedRoute path="/" component={GreetingContainer} />
    </Switch>
  </div>

);

export default App;
