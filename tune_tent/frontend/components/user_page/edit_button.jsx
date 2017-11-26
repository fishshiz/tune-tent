import React from 'react';
import {Link} from 'react-router-dom';
class EditButton extends React.Component {

  renderContent() {
    if(this.props.currentUser.id === this.props.artistId) {
      return (
        <Link to={`/${this.props.artistId}/edit`}>Edit page</Link>
      );
    } else {
      return (
        <div></div>
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

export default EditButton;
