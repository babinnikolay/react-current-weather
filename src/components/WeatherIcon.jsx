function WeatherIcon({ icon }) {
  return (
    <div className="weather-icon">
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
      />
    </div>
  );
}

export default WeatherIcon;
