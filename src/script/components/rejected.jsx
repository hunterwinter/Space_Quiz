var React = require('react');
import {browserHistory} from 'react-router';

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