import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import TrackItem from './upload_track';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracks: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.artist;
    this.updateFile = this.updateFile.bind(this);
    this.updateTrack = this.updateTrack.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
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

  clearTracks() {
    this.setState({tracks: []});
  }

  addTrack() {
    let newTrackState = this.tracks;
    newTrackState.push(this.trackItem(""));
    this.setState({tracks: newTrackState});
  }

  removeTrack() {
    let newTrackState = this.tracks;
    newTrackState.pop();
    this.setState({tracks: newTrackState});
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
      formData.append("album[image]", this.state.imageFile);

      if (this.state.tracks > 0) {
        for(let i = 0, i < this.state.tracks.length, i ++) {

        }
      }

      this.props.updateUser(formData).then(() => this.props.history.push(`/artists/${this.state.id}`));
    }

    form() {
      if (!this.props.artist) {
        return (
          <div>
            <div>Loading...</div>
          </div>
        );
      } else {

      return (

          <form className="album-form"
            onSubmit={this.handleSubmit}>
              <div>
                <h2>Add an album</h2>
                <label>
                  Title
                  <textarea
                    value={this.state.bio}
                    onChange={this.update('title')} />
                </label>
                <label>
                  Upload Artwork
                  <input type="file" onChange={this.updateFile}/>
                </label>

                <button onClick={this.handleSubmit}>Submit</button>
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
