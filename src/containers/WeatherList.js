import React from "react";
import { connect } from "react-redux";
import Charts from "../components/Charts";
import GoogleMap from "../components/GoogleMap";

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map(weather => weather.main.temp);
    //console.log(temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;
    return (
      <tr key={name}>
        <td>
          <GoogleMap lon={lon} lat={lat} />
        </td>
        <td>
          <Charts data={temp} color="orange" units="K" />
        </td>
        <td>
          <Charts data={temp} color="green" units="hPa" />
        </td>

        <td>
          <Charts data={temp} color="black" units="%" />
        </td>
      </tr>
    );
  }
  render() {
    //console.log(this.props.weather);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa) </th>
            <th>Humidity (%)</th>
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
