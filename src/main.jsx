import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./component/App";
import { Router, route, browserHistory, Redirect } from 'react-router';

require('./scss/reset.scss');
require('./scss/main.scss');

ReactDOM.render(<App/>, document.getElementById('mars-app'));