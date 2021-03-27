import React, { useRef, useEffect } from "react";

import classes from "./Map.module.scss";

const Map = (props) => {
    const googleMapRef = useRef();

  const { center, zoom } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(googleMapRef.current, {
      center: center,
      zoom: zoom,
    });
    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div
      ref={googleMapRef}
      className={`${classes.map} ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
