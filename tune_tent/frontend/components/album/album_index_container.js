import React from 'react';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';


const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.artistId);
  return {

  };

};
