import React, { Component } from "react";
import "./map.css";

class SimpleMap extends Component {
  render() {
    return (
      // Important! Always set the container height explicitly
      <>
        <div className="my-5" style={{height:10}}></div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/Al+safina+Cafe/@32.2000208,74.3608528,17z/data=!3m1!4b1!4m5!3m4!1s0x391ed1d4974f8297:0xe241ead1b0d7b81a!8m2!3d32.2000208!4d74.3630415"
        >
          <div className="map"></div>
        </a>
      </>
    );
  }
}

export default SimpleMap;
