import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import TrackItem from './upload_track';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id: "",
      user_id: this.props.currentUser.id,
      tracks: [],
      trackCount: 0
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.clearTracks = this.clearTracks.bind(this);
    this.updateTrackTitle = this.updateTrackTitle.bind(this);
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateTrackTitle(idx) {
    return (e) => {
      const newTracks = this.state.tracks.map((track, tidx) => {
        if (idx!== tidx) return track;
        return {title: e.target.value};
      });
      this.setState({tracks: newTracks});
    };
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ album_img_url: reader.result});
    };
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
      debugger;
      e.preventDefault();
      this.props.createAlbum(this.state).then(tracks => this.props.createTracks(tracks));
    }

    form() {
      return (
        <div className="upload-form-cont">
        <form className="album-form"
          onSubmit={this.handleSubmit}>
            <h2 className="upload-title">Add an album</h2>
            <div className="second-row">

              <input className="album-title"
                type="text"
                placeholder="Album title"
                value={this.state.title}
                onChange={this.update('title')} />
            

            <div className="photo-cont">
              <img src={this.state.album_img_url} />
              <i className="fa fa-picture-o fa-4x" aria-hidden="true">
                <input
                  type="file"
                  className="file-btn"
                  value={this.state.image}
                  onChange={this.updateFile}/>
              </i>
            </div>
            </div>

            <ul className="track-field-cont">
            {this.state.tracks.map((track, idx) => (
              <div className="track-field">
                <p>{idx + 1}.</p>
                <input
                  type="text"
                  placeholder="Track Title"
                  value={track.title}
                  onChange={this.updateTrackTitle(idx)}
                  />
                <button onClick={this.removeTrack(idx)}>Remove Track</button>
                <div className="hide-btn">
                <i className="fa fa-cloud-upload fa-2x" aria-hidden="true">
                  <input
                    type="file"
                    onChange={this.updateFile}
                    className="file-btn"
                    />
                </i>
                </div>
              </div>
              ))}
            </ul>

            <div className="buttonz">
            <button className="base-btn" type="submit" onClick={this.handleSubmit}>Submit</button>
            <button className="base-btn" onClick={this.addTrack}>Add Track</button>
            <button className="base-btn" onClick={this.clearTracks}>Clear Tracks</button>
            </div>
          </form>
        </div>
      );
    }

    render() {
        return (
          <div >
            {this.form()}
          </div>
        );
    }
}

export default UploadForm;
