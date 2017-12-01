import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentTrack: state.entities.tracks[0]
});



export default connect(
  mapStateToProps
)(Footer);
