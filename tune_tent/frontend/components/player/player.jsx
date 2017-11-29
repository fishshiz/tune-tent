import React from 'react';
import SongTitle from './title';

class Player extends React.Component {
  render() {
    (
      <div className="player">
        <SongTitle title={'Track title'} />
      </div>
      
    );
  }
}

export default Player;
