import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      ticking: false
    };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.begin = this.begin.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.setState(state => {
        return {
          count: state.count + 1
        };
      });
    }, 1000);
  }

  begin() {
    this.setState({
      ticking: true
    });
    this.startTimer();
  }

  pauseTimer() {
    clearInterval(this.intervalId);
  }

  pause() {
    this.setState({
      ticking: false
    });
    this.pauseTimer();
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.setState({ count: 0 });
  }

  reset() {
    if (!this.state.ticking) {
      this.resetTimer();
    }
  }

  render() {
    const count = this.state.count;
    const status = this.state.ticking;

    if (!status) {
      return (
      <div className="container">
        <div onClick={this.reset}className="face">
          <h1 className="time">{count}</h1>
        </div>
        <div onClick={this.begin} className="action"><i className="fas fa-play fa-2x"></i></div>
      </div>
      );
    }
    return (
    <div className="container">
      <div className="face">
        <h1 className="time">{count}</h1>
      </div>
      <div onClick={this.pause} className="action"><i className="fas fa-pause fa-2x"></i></div>
    </div>
    );
  }
}
