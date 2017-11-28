import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import TrackItem from './upload_track';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this);
    this.state = {
      title: "",
      imageUrl: "",
      imageFile: "",
      tracks: [],
      trackCount: 1
    };
    // console.log(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.addTrack = this.addTrack.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    // console.log(this);
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ imageUrl: reader.result, imageFile: file});
    };
    // console.log(this);
    if(file) {
      reader.readAsDataURL(file);
    }
    console.log(this);
  }

  clearTracks() {

    this.setState({ tracks: [], trackCount: 0 });
  }

  addTrack() {
console.log(this);
    let newTrackState = this.state.tracks;
    newTrackState.push(this.trackItem(""));
    this.setState({ tracks: newTrackState, trackCount: this.state.trackCount + 1 });
  }

  removeTrack() {
    let newTrackState = this.tracks;
    newTrackState.pop();
    this.setState({ tracks: newTrackState, trackCount: this.state.trackCount - 1 });
  }

  trackItem(title) {
    // console.log(this);
    return (
      <TrackItem
        title={title}
        updateFile={this.updateFile}
        update={this.update}
        />
    );
  }

    handleSubmit(e) {
      // console.log(this);
      e.preventDefault();
      let formData = new FormData();
      formData.append("album[title]", this.state.title);
      formData.append("album[image]", this.state.imageFile);



      this.props.createAlbum(formData).then(() => this.props.history.push(`/artists/${this.props.currentUser.id}`));
    }

    form() {
      // console.log(this);
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

    render() {
      // console.log(this);
        return (
          <div>
            {this.form()}
          </div>
        );
    }
}

export default UploadForm;
