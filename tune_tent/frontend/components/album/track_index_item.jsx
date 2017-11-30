import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';

const TrackIndexItem = ({ track }) => {
  return (
    <ReactAudioPlayer
      src={track.audio}
      >
    <div className="track-item">
    <li>{track.title}</li>
    </div>
    </ReactAudioPlayer>
  );
};

export default TrackIndexItem;
