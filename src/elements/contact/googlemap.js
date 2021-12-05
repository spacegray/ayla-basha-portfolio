import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Googlemap extends Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
          <div>
            <div style={{ height: "538px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              >
                <AnyReactComponent
                  lat={37.773972}
                  lng={-122.431297}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
          </div>
        );
    }
}
export default Googlemap;