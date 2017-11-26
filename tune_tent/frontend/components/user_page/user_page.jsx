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
        <div className="artist-show-cont">
        <div className="artist-title-cont">
          <h2>{this.props.artist.username}</h2>
          <h1>{this.props.artist.genre}</h1>
        </div>

        <div className="photo-cont">
          <img src={this.props.artist.img_url} />
          <div className="artist-bio-cont">
            <p className="artist-bio">{this.props.artist.bio}</p>
          </div>
          <span className="social">
          <a href={this.props.artist.fb_link}>
          <i class="fa fa-facebook fa-3x" aria-hidden="true"></i></a>
          <a href={this.props.artist.twitter_link}>
          <i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a>
          <a href={this.props.artist.soundcloud_link}>
          <i class="fa fa-soundcloud fa-3x" aria-hidden="true"></i></a>
          <a href={this.props.artist.web_link}>
          <i class="fa fa-laptop fa-3x" aria-hidden="true"></i></a>
          </span>
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
