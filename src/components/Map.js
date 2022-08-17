import GoogleMapReact from "google-map-react";

export default function Map({ country }) {
  const center = {
    lat: country.latlng[0],
    lng: country.latlng[1],
  };
  let zoom = 5;
  const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  if (country.area < 100_000 && country.area >= 10_000) {
    zoom = 7;
  } else if (country.area < 10_000 && country.area >= 1_000) {
    zoom = 9;
  } else if (country.area < 1_000 && country.area >= 100) {
    zoom = 10;
  } else if (country.area < 100 && country.area >= 1) {
    zoom = 11;
  } else if (country.area < 1) {
    zoom = 13;
  }
  return (
    <>
      <h3>View on map:</h3>
      <div style={{ height: "50vh", width: "45vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
}
