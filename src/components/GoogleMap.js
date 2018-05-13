import React, { Component } from "react";

/**
 * ref allows us to give reference to an html element
 * that has been rendered to the page
 * this.refs.map
 * <div ref={div => this.map = div} />
 * And you call it with the this  keyword. this.map
 * new google.maps.Map(this.map, {...})
 */

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    return <div ref="map" />;
  }
}
export default GoogleMap;
