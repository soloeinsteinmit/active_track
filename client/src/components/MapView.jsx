import { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <div
      className="shadow-small rounded-medium"
      style={{ height: "250px", width: "100%", borderRadius: "10px" }}
    >
      {/* <span className="text-5xl font-bold">MapView</span> */}
      <MapContainer
        center={[5.116622, -1.290954]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[5.116622, -1.290954]}>
          <Popup>
            You are here! <br /> This is your current location.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
/*
 const [latitude, setLatitude] = useState(5.636096); // Default latitude (replace with actual default)
  const [longitude, setLongitude] = useState(-0.176947); // Default longitude (replace with actual default)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to get the coordinates
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setLoading(false); // Set loading to false after getting coordinates
          },
          (error) => {
            setError(error.message);
            setLoading(false); // Set loading to false even if there is an error
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false); // Set loading to false if geolocation is not supported
      }
    };

    // Get location when the component mounts
    getLocation();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <p>Loading map...</p>; // Display a loading message while fetching location
  }

  if (error) {
    return <p>Error: {error}</p>; // Display an error message if there's an issue with geolocation
  }
 */
