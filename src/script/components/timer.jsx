import React from 'react';

var Timer = React.createClass({

  getInitialState: function() {

    var seconds = this.getSeconds();

    return {
      secondsElapsed: seconds,
    };
  },

  //this give you the total number of seconds to countdown
  getSeconds: function() {
    if(this.props.startMinutes >=1) {
      return this.props.startMinutes * 60;
    } else {
      return 60;
    }
  },

  secondsLeft: function() {
    return Math.floor(this.state.secondsElapsed % 60);
  },

  minutesLeft: function() {
    return Math.floor(this.state.secondsElapsed / 60);
  },

  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
    if (this.state.secondsElapsed <= 0) {
      clearInterval(this.interval);
    }
  },

//built in React method. Stops the timer from counting down right away.
  componentWillReceiveProps: function(props) {
    if(props.start === true) {
      this.startTime();
    }
  },

// this will check if timer is at 0 secs and will run onTimerFinished functio and load rejected page.
  componentDidUpdate(prevProps, prevState) {
  if (this.state.secondsElapsed === 0) this.props.onTimerFinished();
},

//this will stop the memory leak - timer stops counting down and using the CPU
  componentWillUnmount: function() {
    clearInterval(this.interval)
  },

  startTime: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  render: function() {
    return (
      <div className={this.props.start ? "timer" : "timer hidden"}>
        <div className="countdown">
          {this.minutesLeft()}:{this.secondsLeft() < 10 ? "0" + this.secondsLeft() : this.secondsLeft()}
        </div>
      </div>
    );
  }
});

module.exports = Timer;