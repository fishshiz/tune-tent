import React from 'react';
import { Link } from 'react-router-dom';

class userPage extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

    this.props.fetchUser(this.props.artistId);

  }


  componentWillReceiveProps(newProps) {
    if(this.props.artistId !== newProps.artistId) {
      this.props.fetchUser(newProps.artistId);
    }
  }

  renderContent() {
    if (!this.props.artist) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
        <div>
          <h1>{this.props.artist.username}</h1>
          <h3>{this.props.artist.genre}</h3>
        </div>

        <div>
          <p>{this.props.artist.img_url}</p>
          <p>{this.props.artist.bio}</p>
          <a>{this.props.artist.fb_link}</a>
          <a>{this.props.artist.twitter_link}</a>
          <a>{this.props.artist.soundcloud_link}</a>
          <a>{this.props.artist.web_link}</a>
        </div>
      </div>
      );
    }
  }



  render() {

      return (
        <div>
          {this.renderContent()}
        </div>
      );
    }
  }




export default userPage;
