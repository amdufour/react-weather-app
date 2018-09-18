var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
require('./scss/styles.scss');
var App = require('./components/App');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);