import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: this.validate('')
    };
    this.handleChange = this.handleChange.bind(this);
  }

  validate(value) {
    const trimmed = value.trim();
    if (!trimmed) return 'A password is required.';
    if (trimmed.length < 8) return 'Your password is to short.';
    if (/\d/g.test(trimmed) &&
        /[A-Z]/g.test(trimmed) &&
        /[!@#$%^&*()]/g.test(trimmed)) {
      return null;
    }
    return 'Password must contain a number, a capital, and a special character.';
  }

  handleChange(event) {
    const { value } = event.target;
    const error = this.validate(value);
    this.setState({ value, error });
  }

  render() {
    const { handleChange } = this;
    const { value, error } = this.state;
    const validationClass = error ? 'is-invalid' : 'is-valid';
    return (
      <div className="form-group position-relative m-5">
        <label htmlFor="password">Password</label>
        <input
          value={value}
          id="password"
          type="password"
          placeholder="********"
          onChange={handleChange}
          className={`form-control ${validationClass}`}/>
        {
          error &&
          <div className="invalid-tooltip">{ error }</div>
        }
      </div>
    );
  }
}

export default ValidatedInput;
