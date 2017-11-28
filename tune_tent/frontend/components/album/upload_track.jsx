import React from 'react';

class TrackItem extends React.Component {
  render() {

    return (
      <li className="track-bundle">
        <input
          type="text"
          value={this.props.title}
          className="track-input"
          onChange={this.props.update('title')} />
        <input
          type="file"
          onChange={this.props.updateFile}/>
      </li>
    );
  }
}

export default TrackItem;
