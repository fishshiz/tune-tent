import React from 'react';

class TrackItem extends React.Component {
  render() {
    console.log("YO");
    return (
      <li>
        <input type="text" value={this.props.title} onChange={this.props.update} />
        <input type="file" onChange={this.updateFile}/>
      </li>
    );
  }
}

export default TrackItem;