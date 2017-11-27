import React from 'react';
import { Link } from 'react-router-dom';
import AlbumIndexItem from './album_index_item';

class AlbumIndex extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.artistId);
    this.props.fetchAlbums(this.props.artistId);
  }


  componentDidMount() {

  }


  componentWillReceiveProps(newProps) {
    if(this.props.artistId !== newProps.artistId) {
      this.props.fetchAlbums(newProps.artistId);
    }
  }

  render() {
    if(this.props.albums === undefined) {
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
