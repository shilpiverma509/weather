import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  handleFormSubmit(e) {
    e.preventDefault();
    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: "" });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="input-group">
          <input
            placeholder="get five-day forecast"
            className="form-control"
            value={this.state.term}
            onChange={this.handleInputChange}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Search
            </button>
          </span>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(Search);
