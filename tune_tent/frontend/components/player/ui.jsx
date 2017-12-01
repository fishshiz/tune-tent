import React from 'react';
import ClassNames from 'classnames';

class Ui extends React.Component {
  render () {
    const playPause = ClassNames({
      'fa fa-play': this.props.playStatus == 'PLAYING' ? false :true,
      'fa fa-pause': this.props.playStatus == 'PLAYING' ? true : false
    });

    return (
      <div className="player-btns">
        <div className="reverse">
          <button onClick={this.props.reverse}><i class="fa fa-backward" aria-hidden="true"></i></button>
        </div>
        <div className="play">
          <button onClick={this.props.togglePlay}><i className={playPause}></i></button>
        </div>
        <div className="forward">
          <button onClick={this.props.forward}><i class="fa fa-forward" aria-hidden="true"></i></button>
        </div>
      </div>
    );
  }
}

export default Ui;
