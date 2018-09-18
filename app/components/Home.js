var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: 'url("app/assets/pattern.svg")'}}>
        <div className="container">
          <div className="row justify-content-center align-self-center">
            <div className="home-container">
              <form
                className="form-home"
              >
                <label
                  className="block text-center form-home--label"
                  htmlFor="location-home"
                >Enter a City and a Country</label>
                <input
                  id="location-home"
                  className="block center form-input form-home--input"
                  placeholder="Montreal, Canada"
                  type="text"
                  autoComplete="off"
                />
                <button 
                  className="button block center form-home--button"
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

module.exports = Home;