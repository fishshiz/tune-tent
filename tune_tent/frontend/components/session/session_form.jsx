import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      modalIsOpen: true
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
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

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
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
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up instead</Link>;
    } else {
      return <Link to="/login">log in instead</Link>;
    }
  }

  render() {
    return (
      <div className="session-form">
        <Modal
          isOpen={this.state.modalIsOpen}
          style={customStyles}
          >
        {this.renderErrors()}
        <h2>{this.capitalize(this.props.formType)}</h2>
        <form>
          <label>Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')} />
          </label>
          <br />
          <label>Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')} />
          </label>
          <br />
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
          <br />
          {this.navLink()}
        </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
