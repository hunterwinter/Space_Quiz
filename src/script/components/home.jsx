import React from 'react';
import {browserHistory} from 'react-router';

//Component

var home = React.createClass({

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

module.exports = home;