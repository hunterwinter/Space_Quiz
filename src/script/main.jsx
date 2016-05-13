import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Components

import home      from './components/home.jsx';
import Questions    from './components/allquestions.jsx';
import Questionbox from './components/questionbox.jsx';
import Timer        from './components/timer.jsx';
import Rejected     from './components/rejected.jsx';
import Accepted     from './components/accepted.jsx';
//import NotFound     from './components/404.jsx';

var MarsQuiz = React.createClass({

  render: function() {
    return (
      <Router history={browserHistory}>
        <Redirect from='/' to='/welcome' />
        <Route path='/home' component={home} />
        <Route path='/questions' component={allquestions} />
        <Route path='/questionbox' component={questionbox} />
        <Route path='/rejected' component={Rejected} />
        <Route path='/accepted' component={Accepted} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
});

ReactDOM.render(<MarsQuiz />, document.querySelector('.content-area'));








/*import React from 'react';
import reactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

//Component
var React = require('react');

var Welcome = React.createClass({

//if a method is only used within this component use the underscore
  _handleShowQuestionsPage: function() {
  browserHistory.push('/questions');
  },

  render: function() {
    return (
      <div>
        <button onClick={this._handleShowQuestionsPage}>Take the Test</button>
      </div>
    );
  }
});

module.exports = Welcome;

//

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

//


var Rejected = React.createClass ({

  getInitialState: function() {
    return {
      state: true,
    };
  },

  componentDidMount: function() {
    setTimeout((function() {
      browserHistory.push('/questions');
      }), 3000);
  },

  render: function() {
    return (
      <div className="fail-bkg">
        <div className="results">
          <h2>Rejected</h2>
        </div>
      </div>
    )
  }
});

module.exports = Rejected;

//


import Timer from './timer.jsx';
import Questionpane from './questionpane.jsx';

var testQuestions = [
  {
    question: "Is Mars fourth from the sun?",
    answer: "yes"
  },
  {
    question: "Does Mars have subsurface water?",
    answer: "yes"
  },
  {
    question: "Does Mars have seasons?",
    answer: "yes"
  },
];

var Taketest = React.createClass({

  // this replaced browserHistory
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      startup: false
    }
  },

  _handleCorrect: function() {
    this.context.router.push('/accepted');
  },

  _handleFail: function() {
    this.context.router.push('/rejected');
  },

  beginTest: function() {
    this.setState({startup: true});
  },

  render: function() {

    return (
      <div>
        <div className="countdown">
            <Timer
              start={this.state.startup}
              startMinutes={1}
              onTimerFinished={this._handleFail} />
        </div>
        <div>
          {!this.state.startup && <button onClick={this.beginTest}>Begin Test</button>}
          {this.state.startup &&
            <Questionpane
              questions={testQuestions}
              onCorrect={this._handleCorrect}
              onFail={this._handleFail} />
          }
        </div>
      </div>
    );
  }
});

module.exports = Taketest;
*/
