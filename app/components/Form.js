var React = require('react');

class Form extends React.Component {
  render() {
    return (
      <form
        
      >
        <label
          className="block text-center"
          htmlFor="location-home"
        >Enter a City and a Country</label>
        <input
          id="location-header"
          className="form-input"
          placeholder="Montreal, Canada"
          type="text"
          autoComplete="off"
        />
        <button 
          className="button"
          type="submit"
        >Get Weather</button>
      </form>
    )
  }
}

module.exports = Form;