var React = require('react');
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: 'url("app/assets/pattern.svg")'}}>
        <Home />
      </div>
    )
  }
}

module.exports= App;