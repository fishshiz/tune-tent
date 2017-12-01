import React from 'react';
import { Link } from 'react-router-dom';
import TrackIndexItem from './track_index_item';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {

    this.props.fetchAlbum(this.props.albumId);

  }


  componentWillReceiveProps(newProps) {
    if(this.props.albumId !== newProps.albumId) {
      this.props.fetchAlbum(newProps.albumId);
    }
  }

  renderContent() {

    if (!this.props.album) {
      return (
        <div>
          <div>Loading...</div>
        </div>
      );
    } else {


      return (
        <div className="album-show-cont">
          <div className="album-title-cont">
            <h2>{this.props.album.title}</h2>

            <div className="track-list">
              <ol>
              {Object.values(this.props.album.tracks).map((track, idx) => <TrackIndexItem
                className="track"
                track={track}
                key={idx}
                playTrack={this.props.playTrack}
                 />)}
              </ol>
            </div>

          </div>

        <div className="album-photo-cont">
          <img src={this.props.album.image_url} />

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




export default AlbumPage;
