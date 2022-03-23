import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isOn: !this.state.isOn
    });
  }

  render() {
    const label = this.state.isOn ? 'ON' : 'OFF';
    const modifierClass = this.state.isOn ? 'is-on' : '';
    return (
      <div
        onClick={this.handleClick}
        className={`toggle-switch ${modifierClass}`}>
        <div className="slider">
          <div className="switch"></div>
        </div>
        <span className="state-label">{ label }</span>
      </div>
    );
  }
}

export default ToggleSwitch;
