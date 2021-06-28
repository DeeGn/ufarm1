import React from "react";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import { useFarms } from "../hooks/useFarms";

function GoogleMap({ google, mapStyles }) {
  const [showingInfoWindow, setShowingInfoWindow] = React.useState();
  const [activeMarker, setActiveMarker] = React.useState();
  const [selectedPlace, setSelectedPlace] = React.useState();

  const [farms] = useFarms();

  function onMarkerClick(props, marker) {
    console.log("props", props, marker);
    setShowingInfoWindow(true);
    setActiveMarker(marker);
    setSelectedPlace(props);
  }

  function onClose(props) {
    if (showingInfoWindow) {
      setShowingInfoWindow(false);
      setActiveMarker(null);
    }
  }

  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "300px",
  };

  console.log("google", google);

  return (
    <div className="text-center">
      <Map
        google={google}
        zoom={7}
        style={mapStyles}
        initialCenter={{ lat: 13.7244416, lng: 100.3529157 }}
        containerStyle={containerStyle}
      >
        {farms.map((item) => {
          return (
            <Marker
              key={item.name} // TODO: use item.id here once data is setup
              position={item.position}
              onClick={onMarkerClick}
              name={item.name}
            />
          );
        })}

        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace && selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(GoogleMap);
