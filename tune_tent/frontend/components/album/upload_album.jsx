import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import TrackItem from './upload_track';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id: "",
      image: "",
      user_id: this.props.currentUser.id,
      imageUrl: "",
      imageFile: "",
      tracks: [],
      trackCount: 1
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.clearTracks = this.clearTracks.bind(this);
  }


  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
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
    let newTrackState = this.state.tracks;
    newTrackState.push(this.trackItem(""));
    this.setState({ tracks: newTrackState, trackCount: this.state.trackCount + 1 });
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
        title={title}
        updateFile={this.updateFile}
        update={this.update}
        />
    );
  }

    handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("album[title]", this.state.title);
      formData.append("album[image]", this.state.imageFile || this.state.image_url);

      this.state.tracks.forEach(track => {
        formData.append(`album[tracks][${track.id}][title]`, this.state.tracks[`${track.id}`].props.title);
        formData.append(`album[tracks][${track.id}][audio]`, this.state.tracks[`${track.id}`].props.audio);
      });


      this.props.createAlbum(formData).then(() => this.props.history.push(`/artists/${this.props.currentUser.id}`));
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
              <img src={this.state.imageUrl} />
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
