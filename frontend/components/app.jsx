import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch, Link } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import MainPageContainer from './main_page/main_page_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util.jsx';
import UserPageContainer from './user_page/user_page_container';
import AlbumContainer from './album/album_container';
import EditButtonContainer from './user_page/edit_button_container';
import EditUserContainer from './user_page/edit_user_container';
import FooterContainer from './footer/footer_container';
import UploadAlbumContainer from './album/upload_album_container';
import TrackFormContainer from './album/track_form_container';


const App = () => (
  <div>
    <NavBarContainer />
    <FooterContainer />
    <Route path="/artists/:artistId" component={EditButtonContainer} />
    <Route path="/albums/:albumId" component={TrackFormContainer} />
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
      <ProtectedRoute exact path="/artists/:artistId" component={UserPageContainer} />
      <ProtectedRoute exact path="/artists/:artistId/edit" component={EditUserContainer} />
      <ProtectedRoute exact path="/albums/new" component={UploadAlbumContainer} />
      <ProtectedRoute exact path="/albums/:albumId" component={AlbumContainer} />
      <ProtectedRoute path="/" component={MainPageContainer} />
    </Switch>
  </div>

);

export default App;
