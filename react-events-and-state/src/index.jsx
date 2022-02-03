import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      // can also write: 'return <buttton>Thanks!</button>;' without the need for onClick
      return <button onClick={this.handleClick}>Thanks!</button>;
    } else {
      return <button onClick={this.handleClick}>Click Me!</button>;
    }
  }
}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
