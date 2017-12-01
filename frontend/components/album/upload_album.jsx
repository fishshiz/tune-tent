import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      id: "",
      user_id: this.props.currentUser.id,
      album_img_url: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }


  update(field) {
    return e => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ album_img_url: reader.result, image: file });
    };
    if(file) {
      reader.readAsDataURL(file);
    }
  }

  handleSubmit() {
    return (e) => {
      e.preventDefault();
      const form = new FormData();
      form.append("album[title]", this.state.title);
      if (this.state.user_id) {
        form.append("album[user_id]", this.state.user_id);
      }

      if (this.state.album_img_url) {
        form.append("album[image]", this.state.image);
      }
      this.props.createAlbum(form)
        .then((action) => {
          return this.props.history.push(`/albums/${action.album.id}`);
        }
      );
    };
  }


  form() {
    return (
      <div className="upload-form-cont">
      <form className="album-form"
        onSubmit={this.handleSubmit()}>
          <h2 className="upload-title">Add an album</h2>


            <input className="album-title"
              type="text"
              placeholder="Album title"
              value={this.state.title}
              onChange={this.update('title')} />


            <div className="upload-photo-cont">
            <img className="album-upload-photo" src={this.state.album_img_url} />
            <i className="fa fa-picture-o fa-4x" id="upload-icon" aria-hidden="true">
              <input
                type="file"
                className="file-btn"
                onChange={this.updateFile}/>
            </i>
          </div>


          <div className="buttonz">
          <button className="base-btn" type="submit">Submit</button>
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
