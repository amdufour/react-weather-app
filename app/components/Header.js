var React = require('react');
var Form = require('./Form');

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <h1>Tell me the weather</h1>
            </div>
            <div className="col-sm-6">
              <div className="form-header">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Header;