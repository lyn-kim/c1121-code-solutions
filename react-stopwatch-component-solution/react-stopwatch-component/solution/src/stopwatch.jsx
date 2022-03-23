import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedSeconds: 0,
      activeInterval: null
    };
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
    this.toggleStarted = this.toggleStarted.bind(this);
  }

  tick() {
    const updatedSeconds = this.state.elapsedSeconds + 1;
    this.setState({ elapsedSeconds: updatedSeconds });
  }

  reset() {
    if (this.state.activeInterval) return;
    this.setState({ elapsedSeconds: 0 });
  }

  toggleStarted() {
    if (this.state.activeInterval) {
      clearInterval(this.state.activeInterval);
      this.setState({ activeInterval: null });
    } else {
      const newInterval = setInterval(this.tick, 1000);
      this.setState({ activeInterval: newInterval });
    }
  }

  render() {
    const iconClass = this.state.interval
      ? 'fa-pause'
      : 'fa-play';
    return (
      <div className="stopwatch">
        <div className="watch-face" onClick={this.reset}>
          <span>{ this.state.elapsedSeconds }</span>
        </div>
        <i
          onClick={this.toggleStarted}
          className={`start-stop fas ${iconClass}`} />
      </div>
    );
  }
}

export default Stopwatch;
