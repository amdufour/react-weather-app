var React = require('react');

class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <form>
          <label
            className="form-label"
            htmlFor="location"
          >Enter a City and a Country</label>
          <input
            id="location"
            placeholder="Montreal, Canada"
            type="text"
            autoComplete="off"
          />
          <button 
            className="button"
            type="submit"
          >Get Weather</button>
        </form>
      </div>
    )
  }
}

module.exports = Home;