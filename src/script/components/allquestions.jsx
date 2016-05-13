var React = require('react');

import Timer from './timer.jsx';
import Questionbox from './questionbox.jsx';

var testQuestions = [
  {
    question: "Do you get panic in confined spaces?",
    answer: "no"
  },
  {
    question: "Who was the best actor in the film 'Armageddon'?",
    answer: "ben affleck"
  },
  {
    question: "Are you a Star Wars fan or a Star Trek fan?",
    answer: "star wars"
  },
];


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