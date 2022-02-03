import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  getTemperatureClass() {
    const { clicks } = this.state;
    if (clicks < 4) return 'cold';
    if (clicks < 7) return 'cool';
    if (clicks < 10) return 'tepid';
    if (clicks < 13) return 'warm';
    if (clicks < 16) return 'hot';
    return 'nuclear';
  }

  handleClick() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    const temperatureClass = this.getTemperatureClass();
    return (
      <button
        onClick={this.handleClick}
        className={`hot-button ${temperatureClass}`}>
        { this.props.label }
      </button>
    );
  }
}

export default HotButton;
