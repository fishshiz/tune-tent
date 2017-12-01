import React from 'react';

class UploadTrack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      audio: '',
      addToggle: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.update = this.update.bind(this);
    this.updateAudioFile = this.updateAudioFile.bind(this);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  updateAudioFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({ audio: file });
    };
      if(file) {
        reader.readAsDataURL(file);
      }
    }

    componentWillReceiveProps(nextProps) {
      if(this.props.album && this.props.album.tracks.length !== nextProps.album.tracks.length) {
        this.props.fetchAlbum(this.props.album.id);
      }

    }

  addTrack(e) {
    e.preventDefault();
    this.setState({ addToggle: true });
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();

      const form = new FormData();
      form.append("track[title]", this.state.title);

        form.append("track[album_id]", this.props.album.id);

      if (this.state.audio) {
        form.append("track[audio]", this.state.audio);
      }
      this.props.createTrack(form);
    };
  }

  render() {
    if (!this.props.album) {
      return null;
    }
    if (this.state.addToggle && this.props.currentUser.id === this.props.album.user_id) {
      return (
      <form onSubmit={this.handleSubmit()}>
      <ul className="track-field-cont">

        <div className="track-field">
          <input
            type="text"
            placeholder="Track Title"
            value={this.state.title}
            onChange={this.update('title')} />

          <div className="hide-btn">
          <i className="fa fa-cloud-upload fa-2x" aria-hidden="true">
            <input
              type="file"
              onChange={this.updateAudioFile}
              className="file-btn"
              />
          </i>
          </div>
          <button className="base-btn" type="submit">Submit</button>
        </div>
      </ul>

    </form>
    );
  } else if (this.props.currentUser.id === this.props.album.user_id) {
    return (
      <div className="buttonz">
        <button className="base-btn" onClick={this.addTrack}>Add Track</button>
      </div>
    );
  } else {
    return null;
  }
}
}

export default UploadTrack;
