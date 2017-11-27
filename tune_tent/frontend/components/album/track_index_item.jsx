import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TrackIndexItem = ({ track }) => {
  return (
    <div className="track-item">
    <li>{track.title}</li>
    </div>
  );
};

export default TrackIndexItem;
