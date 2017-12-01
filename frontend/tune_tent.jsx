import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { createTrack, fetchTracks } from './util/track_api_util';
import { test, createAlbum } from './util/album_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  window.createTrack = createTrack;
  window.fetchTracks = fetchTracks;
  window.store = store;

  window.createAlbum = createAlbum;
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
    store = configureStore(preloadedState);
  }
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
