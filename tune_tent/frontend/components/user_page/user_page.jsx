import React from 'react';
import { Link } from 'react-router-dom';

class userPage extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

    this.props.fetchUser(parseInt(this.props.match.params.artistId));

  }

  componentDidUpdate() {
    console.log(this.props.artist.username);
    this.setState();
  }



  render() {

    if(this.props.artist){
      return (
        <div>
          <div className="artist-title">
            <h1>{this.props.artist.username}</h1>
          </div>
          <div>
            <p>{this.props.artist.genre}</p>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );

    }



  }

}

export default userPage;
