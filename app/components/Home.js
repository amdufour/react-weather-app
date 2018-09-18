var React = require('react');
var Form = require('./Form');

class Home extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: 'url("app/assets/pattern.svg")'}}>
        <div className="container">
          <div className="row justify-content-center align-self-center">
            <div className="home-container">
              <div className="form-home">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Home;