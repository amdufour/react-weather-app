var React = require('react');

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
              <form
                className="form-header"
              >
              <input
                id="location-header"
                className="form-input form-header--input"
                placeholder="Montreal, Canada"
                type="text"
                autoComplete="off"
              />
              <button 
                className="button form-header--button"
                type="submit"
              >Get Weather</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Header;