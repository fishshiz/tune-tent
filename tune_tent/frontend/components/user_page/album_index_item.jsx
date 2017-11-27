import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const AlbumIndexItem = ({ album }) => {
  return (
    <li>
      <Link to={`/albums/${album.id}`}>
        <img src={album.album_img_url} />
        {album.title}
      </Link>
    </li>
  );
};

export default AlbumIndexItem;
