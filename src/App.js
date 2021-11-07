import React from "react";
import { geolocated } from "react-geolocated";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
const DEFAULT_LONGITUDE = -123;
const DEFAULT_LATITUDE = 48;

class App extends React.Component {
  render() {
    const longitude = this.props.coords
      ? this.props.coords.longitude
      : DEFAULT_LONGITUDE;
    const latitude = this.props.coords
      ? this.props.coords.latitude
      : DEFAULT_LATITUDE;
    return (
      <MapContainer center={[longitude, latitude]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        {!this.props.coords ? (
          <div className="loading">Loading</div>
        ) : (
          <Marker position={[longitude, latitude]}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </MapContainer>
    );
  }
}
export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 10000,
})(App);
