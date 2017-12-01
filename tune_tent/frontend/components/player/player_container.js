import React from 'react';
import Sound from 'react-sound';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: { audio: '', title: '' },
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0
    };
  }


  handleSongPlaying(audio) {
    this.setState({ elapsed: this.formatMilliseconds(audio.position),
    total: this.formatMilliseconds(audio.duration),
    position: audio.position / audio.duration });
  }

  render() {
    return (
      <div>
      <Sound url={this.state.track.audio}
      playStatus={this.state.playStatus}
      onPlaying={this.handleSongPlaying.bind(this)}
      playFromPosition={this.state.playFromPosition}
      onFinishedPlaying={this.handleSongFinished.bind(this)} />
      </div>
    );
  }
}
