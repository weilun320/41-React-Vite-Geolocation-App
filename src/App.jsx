import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getGeolocation = () => {
    const success = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const error = (error) => console.error(error);

    const option = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(success, error, option);
  };

  useEffect(() => {
    getGeolocation();

    const timerId = setInterval(getGeolocation, 1000);

    return () => clearInterval(timerId);
  });

  return (
    <div>
      <h1>Geolocation App</h1>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
    </div>
  );
}

export default App;
