import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AlbumIndexItem = ({ album }) => {
  return (

      <Link className="album-bundle" to={`/albums/${album.id}`}>
        <img className="album-img" src={album.image} />
        {album.title}
      </Link>

  );
};

export default AlbumIndexItem;
