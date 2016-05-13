var React = require('react');
import anwering from './answering.jsx';

var questionbox = React.createClass({

  getInitialState: function() {
    return {
      start: false,
      correctCount: 0,
      questionIndex: 0,
    };
  },

  componentWillUpdate(nextProps, nextState) {
    if (nextState.questionIndex === nextProps.questions.length) {
      this.state.correctCount === 2 ? this.props.onCorrect() : this.props.onFail();
    }
  },

  render: function() {
    
    var answering = this.props.questions[this.state.questionIndex];
    if (!answering) return <div/>;

    return (
      <div className="test-question">
        <div>
          <CurrentQuestion
            answering={answering}
            onAnswer={this._handleUserAnswer} />
        </div>

      </div>
    );
  },

  _handleUserAnswer(userAnswer) {
    var correctAnswer = this.props.questions[this.state.questionIndex].answer;
    var currentCorrectCount = this.state.correctCount;

    if (correctAnswer === userAnswer) {
      currentCorrectCount = currentCorrectCount + 1;
    }
    this.setState({
      correctCount: currentCorrectCount,
      questionIndex: this.state.questionIndex + 1
    });
  },
});

module.exports = questionbox;