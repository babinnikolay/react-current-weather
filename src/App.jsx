import "./App.css";
import { useGeolocation } from "./hooks/useGeolocation.js";
import { useEffect, useState } from "react";
import UpdateTime from "./components/UpdateTime.jsx";
import WeatherDetails from "./components/WeatherDetails.jsx";
import TemperatureDescription from "./components/TemperatureDescription.jsx";
import WeatherIcon from "./components/WeatherIcon.jsx";
import Location from "./components/Location.jsx";

const API_KEY = "";

function App() {
  const {
    position: { lat, lng },
    getPosition,
    isLoading,
  } = useGeolocation();
  const [data, setData] = useState({});

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    if (!lat && !lng) return;

    async function getWeather() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=ru&units=metric`,
      );
      const data = await response.json();
      setData(data);
    }

    getWeather();
  }, [lat, lng]);

  return (
    <div className="weather-card">
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <Location city={data?.name} country={data?.sys?.country} />
          <WeatherIcon icon={data && data.weather && data?.weather[0]?.icon} />
          <TemperatureDescription
            temp={data?.main?.temp}
            description={data && data.weather && data?.weather[0]?.description}
          />
          <WeatherDetails
            humidity={data?.main?.humidity}
            windSpeed={data?.wind?.speed}
            pressure={data?.main?.pressure}
          />
          <UpdateTime time={data?.main && new Date()} />
        </>
      )}
    </div>
  );
}

export default App;
