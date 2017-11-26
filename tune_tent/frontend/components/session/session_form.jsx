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
    this.demoLogin = this.demoLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    this.handleClick(history);
  }

  demoLogin(e) {
    e.preventDefault();
    this.handleClick(history);
    const demoUser = {
      username: 'demo',
      password: 'password'
    };
    this.props.login(demoUser);
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleClick(history) {
    this.props.clearErrors();
  }

  navLink() {
    const altText = this.props.altButton === 'login' ?
    'Already have an account? Login '
     : 'Don’t have an account yet? There’s space for you in the tent. Set up your account ';
    const Test = withRouter(({ history }) => (
      <div>
        <span className="auth-sentence">{altText}
        <Link to={`/${this.props.altButton}`}
          onClick={() => this.handleClick(history)}
          className="auth-link">
          here
        </Link>
        .
      </span>
      </div>
    ));
    return (
      <Test />
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
              <br />
            <input
              type="text"
              value={this.state.username}
              className="session-input"
              onChange={this.handleInput('username')} />
            </label>
            <br />
            <label>Password
              <br />
            <input
              type="password"
              value={this.state.password}
              className="session-input"
              onChange={this.handleInput('password')} />
            </label>
          </div>
          <br />
          <div className="session-button-cont">
            <button
              className="session-button"
              onClick={this.handleSubmit}>{this.capitalize(this.props.formType)}
             </button>
            </div>
            <div className="auth-alt-options">
            {this.navLink()}

            <span className="auth-sentence">
              Not sure yet? Check out a <Link
              className="auth-link"
              to={'/'}
              onClick={this.demoLogin}>
              demo session</Link>.
            </span>
            <br />
          </div>
        </form>
        </Modal>
      </div>
    );
  }
}

export default withRouter(SessionForm);
