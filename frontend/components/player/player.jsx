import React from 'react';
import SongTitle from './title';
import Ui from './ui';
import ProgressBar from './progress';

class Player extends React.Component {
  render() {
  return  (
      <div>
      <SongTitle title={'Title'} />
      <Ui />
      <ProgressBar elapsed={'00:00'} position={'0.3'} total={'0:40'} />
    </div>
    );
  }
}

export default Player;
