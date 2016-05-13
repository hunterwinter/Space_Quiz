import React from 'react';

// Iterate through question array and evaluate user answer
var answering = React.createClass({

// propTypes help with debugging because it is defining what values are required in the array.
  propTypes: {
    answering: React.PropTypes.shape({
      question: React.PropTypes.string.isRequired,
      answer: React.PropTypes.string.isRequired
    }).isRequired
  },

  render: function() {

    return (
      <div>
        <p>{this.props.answering.question}</p>
        <input className="test-answer" ref="userInput" />
        <button className="submit-button" onClick={this._answer}>Submit Answer</button>
      </div>
    );
  },

  _answer() {
    this.props.onAnswer(this.refs.userInput.value);
    this.refs.userInput.value = '';
  },
});

module.exports = answering;