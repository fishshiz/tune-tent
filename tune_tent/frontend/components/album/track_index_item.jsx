import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TrackIndexItem = ({ track }) => {
  return (
    <h2>{track.title}</h2>
  );
};

export default TrackIndexItem;
