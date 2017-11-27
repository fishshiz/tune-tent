import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});



export default connect(
  mapStateToProps
)(Footer);
