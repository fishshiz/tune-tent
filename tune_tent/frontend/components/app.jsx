import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainPageContainer from './main_page/main_page_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util.jsx';
import UserPageContainer from './user_page/user_page_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedRoute exact path="/artists/:artistId" component={UserPageContainer} />
      <ProtectedRoute path="/" component={MainPageContainer} />
    </Switch>
  </div>

);

export default App;
