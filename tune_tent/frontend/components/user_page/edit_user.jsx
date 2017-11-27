import React from 'react';

class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.artist;
  }

  componentDidMount() {
      this.props.fetchUser(this.props.artistId);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.artistId !== newProps.artistId) {
      this.props.fetchUser(newProps.artistId);
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

    handleSubmit(e) {
      e.preventDefault();
      this.props.updateUser(this.state).then(() => this.props.history.push('/'));
    }

    render() {
      return (
        <div>
          <h2>Update your Page</h2>
          <form onSubmit={this.handleSubmit}>
            <label>
              Genre

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
                    onChange={this.update('fb_link')} />
            </label>
            <label>
              Web link
              <input type="text"
                    value={this.state.web_link}
                    onChange={this.update('web_link')} />
            </label>

            <input type="submit" value="Update" />
          </form>
        </div>
      );
    }
}

export default EditForm;
