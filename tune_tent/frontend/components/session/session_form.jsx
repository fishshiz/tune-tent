import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      modalIsOpen: true
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
      this.setState({ modalIsOpen: false });
    }
    this.setState({ modalIsOpen: true });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  renderErrors() {
    if(this.props.errors) {
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  navLink() {
    const Button = withRouter(({ history }) => (
      <button className="session-button"
        type='button'
        onClick={() =>  history.push(`/${this.props.altButton}`) }
      >
        {this.capitalize(this.props.altButton)}
      </button>
    ));
    return (
      <Button />
    );
  }

  render() {
    return (
      <div className="session-form">
        <Modal
          isOpen={this.state.modalIsOpen}
          className='modal'
          overlayClassName='modal-overlay'
          >
        <h2 className="modal-head">{this.capitalize(this.props.formType)}</h2>
        {this.renderErrors()}
        <form className="session-form">
          <div className="session-input-cont">
            <label>Username
              <br className="break" />
            <input
              type="text"
              value={this.state.username}
              className="session-input"
              onChange={this.handleInput('username')} />
            </label>
            <br />
            <label>Password
              <br className="break" />
            <input
              type="password"
              value={this.state.password}
              className="session-input"
              onChange={this.handleInput('password')} />
            </label>
          </div>
          <br />
          <div className="session-button-cont">
            <button className="session-button"
              onClick={this.handleSubmit}>{this.capitalize(this.props.formType)}
             </button>
            <br />
            {this.navLink()}
            <br />
            <button className="session-button">
              Demo Session
            </button>
            <br />
          </div>
        </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
