import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClickOn = this.handleClickOn.bind(this);
    this.handleClickOff = this.handleClickOff.bind(this);
  }

  handleClickOn() {
    this.setState({ isOn: true });
  }

  handleClickOff() {
    this.setState({ isOn: false });
  }

  render() {
    if (!this.state.isOn) {
      return <div onClick={this.handleClickOn} className="container-on">
        <div onClick={this.handleClickOn} className="switch-on"></div>
      </div>;
    }
    return <div onClick={this.handleClickOff} className = "container-off" >
      <div onClick={this.handleClickOff} className="switch-off"></div>
    </div >;
  }
}
