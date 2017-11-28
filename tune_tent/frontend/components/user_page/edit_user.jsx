import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.artist;
    this.updateFile = this.updateFile.bind(this);
  }

  componentWillMount() {
    if(this.props.currentUser.id !== this.props.artistId) {
      <Redirect to="/" />;
    }
  }

  componentDidMount() {
      this.props.fetchUser(this.props.artistId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.artistId !== newProps.artistId) {
      this.props.fetchUser(newProps.artistId);

    }
    this.setState(this.props);
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

    handleSubmit(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("user[bio]", this.state.bio);
      formData.append("user[genre]", this.state.genre);
      formData.append("user[fb_link]", this.state.fb_link);
      formData.append("user[twitter_link]", this.state.twitter_link);
      formData.append("user[soundcloud_link]", this.state.soundcloud_link);
      formData.append("user[web_link]", this.state.web_link);
      formData.append("user[image]", this.state.imageFile || this.state.image_url);

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

          <form className="artist-form"
            onSubmit={this.handleSubmit}>
              <div className="form-side">
                <h2>Update your Page</h2>
                <label>
                  Genre:
                </label>
                <label>
                  Upload Photo:
                  <input type="file" onChange={this.updateFile}/>
                </label>
                <label>
                  Bio
                  <textarea
                    value={this.state.bio}
                    onChange={this.update('bio')} />
                </label>
                <label>
                  Facebook link
                  <input type="text"
                        value={this.state.fb_link}
                        onChange={this.update('fb_link')} />
                </label>
                <label>
                  Twitter link
                  <input type="text"
                        value={this.state.twitter_link}
                        onChange={this.update('twitter_link')} />
                </label>
                <label>
                  Soundcloud link
                  <input type="text"
                        value={this.state.soundcloud_link}
                        onChange={this.update('soundcloud_link')} />
                </label>
                <label>
                  Web link
                  <input type="text"
                        value={this.state.web_link}
                        onChange={this.update('web_link')} />
                </label>
                <button onClick={this.handleSubmit}>Submit</button>
              </div>
            <div className="upload-cont">
              <img className="upload-display" src={this.state.imageUrl} />
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

export default EditForm;
