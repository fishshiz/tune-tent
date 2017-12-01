import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';


class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick()
}

  return (

    <div className="track-item">
    <li onClick={this.handleClick}>{track.title}</li>
    </div>

  );
};

export default TrackIndexItem;
