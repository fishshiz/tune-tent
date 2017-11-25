import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import Album from './album';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  
};
