import React from 'react';
import {Link} from 'react-router-dom';
class EditButton extends React.Component {



  render() {
    if(this.props.currentUser.id === this.props.artistId) {
      return (
        <div className="edit-button">
          <Link  to={`${this.props.artistId}/edit`}><i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
          </Link>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

export default EditButton;
