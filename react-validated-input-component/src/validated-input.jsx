import React from 'react';

export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    const password = this.state.password;

    if (password === '') {
      return (
        <div>
          <h3>Password</h3>
          <input type="password" value={password} onChange={this.handleChange}/>
          <i className="fas fa-times fa-lg incorrect-icon"></i>
          <p className="required">A password is required</p>
        </div>
      );
    } else if (password.length < 8) {
      return (
        <div>
          <h3>Password</h3>
          <input type="password" value={password} onChange={this.handleChange} />
          <i className="fas fa-times fa-lg incorrect-icon"></i>
          <p className="short">Your password is too short.</p>
        </div>
      );
    }
    return (
      <div>
        <h3>Password</h3>
        <input type="password" value={password} onChange={this.handleChange} />
        <i className="fas fa-check fa-lg correct-icon"></i>
      </div>
    );
  }

}
