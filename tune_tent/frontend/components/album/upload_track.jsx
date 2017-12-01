import React from 'react';

class UploadTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: [],
      trackCount: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.clearTracks = this.clearTracks.bind(this);
    this.updateTrackTitle = this.updateTrackTitle.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
  }

  updateTrackTitle(idx) {
    return (e) => {
      const newTracks = this.state.tracks.map((track, tidx) => {
        if (idx!== tidx) return track;
        return {title: e.target.value};
      });
      this.setState({ tracks: newTracks, audioFile: '', trackNum: this.state.trackCount });
    };
  }

  updateAudioFile(e, idx) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

      this.state.tracks[idx].audioFile = file;
      this.forceUpdate();
      if(file) {
        reader.readAsDataURL(file);
      }
    }

  clearTracks(e) {
    e.preventDefault();
    this.setState({ tracks: [], trackCount: 0 });
  }

  addTrack(e) {
    e.preventDefault();
    this.setState({
      trackCount: this.state.trackCount + 1,
      tracks: this.state.tracks.concat([{title: '', audio: '', trackNum: this.state.trackCount}])
    });
  }

  removeTrack(idx) {
    return (e) => {
      e.preventDefault();
      this.setState({
        trackCount: this.state.trackCount - 1,
        tracks: this.state.tracks.filter((t, tidx) => idx !== tidx)
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.createTrack(this.state);
  }

  render() {

    //
    // if (this.props.currentUser.id === this.props.albumId) {
    //   return (
    //   <div>
    //   <ul className="track-field-cont">
    //   {this.state.tracks.map((track, idx) => (
    //     <div className="track-field">
    //       <p>{idx + 1}.</p>
    //       <input
    //         type="text"
    //         placeholder="Track Title"
    //         value={track.title}
    //         onChange={this.updateTrackTitle(idx)}
    //         />
    //       <button onClick={this.removeTrack(idx)}>Remove Track</button>
    //       <div className="hide-btn">
    //       <i className="fa fa-cloud-upload fa-2x" aria-hidden="true">
    //         <input
    //           type="file"
    //           onChange={(e) => this.updateAudioFile(e, idx)}
    //           className="file-btn"
    //           />
    //       </i>
    //       </div>
    //     </div>
    //     ))}
    //   </ul>
    //
    //   <div className="buttonz">
    //   <button className="base-btn" type="submit" onClick={this.handleSubmit}>Submit</button>
    //   <button className="base-btn" onClick={this.addTrack}>Add Track</button>
    //   <button className="base-btn" onClick={this.clearTracks}>Clear Tracks</button>
    //   </div>
    //   </div>
  //   );
  // }
}
}

export default UploadTrack;
