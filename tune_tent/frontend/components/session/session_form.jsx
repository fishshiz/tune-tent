import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  renderErrors() {
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

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {
    return (
      <div className="session-form">
        {this.renderErrors()}
        <h2>{this.props.formType}</h2>
        <form>
          <label>Username
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleInput('username')} />
          </label>
          <label>Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInput('password')} />
          </label>
          <button onClick={this.handleSubmit}>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
