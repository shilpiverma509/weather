import React from "react";
import { connect } from "react-redux";

class WeatherList extends React.Component {
  renderWeather(cityData) {
    console.log("city", cityData.city.name);
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }
  render() {
    console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure </th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  //console.log(weather);
  return { weather };
};
export default connect(mapStateToProps)(WeatherList);

//  <script src="https://maps.googleapis.com/maps/api/js"></script>
