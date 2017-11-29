import React from 'react';

class TrackItem extends React.Component {
  render() {
    console.log(this.title);
    return (
      <li className="track-bundle">
        <input
          type="text"
          value={this.props.title}
          className="track-input"
          onChange={this.props.update('title')} />
        <input
          type="file"
          value={this.props.audio}
          onChange={this.props.updateFile}/>
      </li>
    );
  }
}

export default TrackItem;
