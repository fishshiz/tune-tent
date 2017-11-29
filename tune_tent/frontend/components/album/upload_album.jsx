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
  }


  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
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
    this.setState({ tracks: [], trackCount: 1 });
  }

  addTrack(e) {
    e.preventDefault();
    if(this.state.trackCount < 12) {
      let newTrackState = this.state.tracks;
      newTrackState.push(this.trackItem());
      this.setState({ tracks: newTrackState, trackCount: this.state.trackCount + 1 });
    }
  }

  removeTrack(e) {
    e.preventDefault();
    let newTrackState = this.state.tracks;
    newTrackState.pop();
    this.setState({ tracks: newTrackState, trackCount: this.state.trackCount - 1 });
  }

  trackItem(title) {
    return (
      <TrackItem
        title={this.tracks}
        audio={this.tracks}
        updateFile={this.updateFile}
        update={this.update}
        />
    );
  }

    handleSubmit(e) {
      debugger;
      e.preventDefault();
      this.props.createAlbum(this.state).then(tracks => this.props.createTracks(tracks));
    }

    form() {
      return (
          <form className="album-form"
            onSubmit={this.handleSubmit}>
              <div>
                <h2>Add an album</h2>
                <label>
                  Title
                  <textarea
                    value={this.state.title}
                    onChange={this.update('title')} />
                </label>
                <label>
                  Upload Artwork
                  <input
                    type="file"
                    value={this.state.image}
                    onChange={this.updateFile}/>
                </label>

                <ul>
                  { this.state.tracks }
                </ul>

                <button type="submit" onClick={this.handleSubmit}>Submit</button>
                <button onClick={this.addTrack}>Add Track</button>
                <button onClick={this.removeTrack}>Remove Track</button>
                <button onClick={this.clearTracks}>Clear Tracks</button>
              </div>
            <div>

            </div>
          </form>

      );
    }

    render() {
        return (
          <div>
            {this.form()}
          </div>
        );
    }
}

export default UploadForm;
