import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-email">Email</label>
        <input name="email" id="signup-email" type="email" value={this.state.email} onChange={this.handleChange}/>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
