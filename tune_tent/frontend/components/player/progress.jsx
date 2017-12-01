import React from 'react';

class ProgressBar extends React.Component {
  render() {
    return (
      <div className="progress">
        <span>{this.props.elapsed}</span>
        <progress value={this.props.position} />
        <span>{this.props.total}</span>
      </div>
    );
  }
}

export default ProgressBar;
