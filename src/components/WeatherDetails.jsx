function WeatherDetails({ humidity, windSpeed, pressure }) {
  return (
    <div className="details">
      <div className="detail-item">
        <i className="fas fa-tint"></i>
        <p>Влажность</p>
        <span>{humidity}%</span>
      </div>

      <div className="detail-item">
        <i className="fas fa-wind"></i>
        <p>Ветер</p>
        <span>{windSpeed} км/ч</span>
      </div>

      <div className="detail-item">
        <i className="fas fa-compress-alt"></i>
        <p>Давление</p>
        <span>{pressure} hPa</span>
      </div>
    </div>
  );
}

export default WeatherDetails;
