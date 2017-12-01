import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';


class TrackIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  handleClick(track) {
    this.props.playTrack();
  }

render() {
  return (

    <div className="track-item">
      <li onClick={() => this.handleClick(this.props.track)}>{this.props.track.title}</li>
    </div>

  );

}
}

export default TrackIndexItem;
