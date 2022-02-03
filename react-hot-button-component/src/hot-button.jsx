import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 0
    };
  }

  incrementClicks() {
    this.setState(state => {
      return {
        count: state.count + 1
      };
    });
  }

  handleClick() {
    this.incrementClicks();
  }

  render() {
    const count = this.state.count;
    if (count <= 3) {
      return <button onClick={this.handleClick} className="three-clicks">HOT BUTTON</button>;
    } else if (count <= 6) {
      return <button onClick={this.handleClick} className="six-clicks">HOT BUTTON</button>;
    } else if (count <= 9) {
      return <button onClick={this.handleClick} className="nine-clicks">HOT BUTTON</button>;
    } else if (count <= 12) {
      return <button onClick={this.handleClick} className="twelve-clicks">HOT BUTTON</button>;
    } else if (count <= 15) {
      return <button onClick={this.handleClick} className="fifteen-clicks">HOT BUTTON</button>;
    } else {
      return <button onClick={this.handleClick} className="infinity">HOT BUTTON</button>;
    }
  }
}
