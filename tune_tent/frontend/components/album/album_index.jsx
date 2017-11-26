import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from './album_index_item';
import AlbumIndexContainer from './album_index_container';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.artistId);
    let test = this.props.fetchAlbums(this.props.artistId);
    console.log(test);
  }


  componentDidMount() {

  }


  componentWillReceiveProps(newProps) {
    if(this.props.artistId !== newProps.artistId) {
      this.props.fetchAlbums(newProps.artistId);
    }
  }

  render() {
    if(this.props.albums === {}) {
      return(
        <h2>This artist does not have any albums...yet.</h2>
      );
    } else {
      return (
        <ul>
          {
            this.props.albums.map(album => (
              <AlbumIndexItem
                key={album.id}
                album={album} />
            ))
          }
        </ul>
      );
    }
  }
}

export default AlbumIndex;
