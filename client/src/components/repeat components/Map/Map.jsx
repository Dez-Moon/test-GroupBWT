import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { defaultTheme } from "./Theme";

const containerStyle = {
  width: "300px",
  height: "300px",
  borderRadius: "15px",
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: true,
  disableDoubleClickZoom: true,
  fuulscreenControl: false,
  styles: defaultTheme,
};
const Map = React.memo(({ address }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });
  const mapRef = useRef(undefined);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  const [defaultCenter, setDefaultCenter] = useState({
    lat: 50.4501,
    lng: 30.5234,
  });
  const [coords, setCoords] = useState();
  useEffect(() => {
    setCoords(address);
  }, [address]);
  if (!isLoaded) return <></>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={(address?.lat && address?.lng && address) || defaultCenter}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      {!!Number(coords.lat) && !!Number(coords.lng) && (
        <Marker position={coords} />
      )}
    </GoogleMap>
  );
});

export default Map;
