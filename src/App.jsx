import "./App.css";

function App() {
  return (
    <div className="weather-card">
      <div className="location">
        <h2>Москва</h2>
        <p>Россия</p>
      </div>

      <div className="weather-icon">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt="Weather Icon"
        />
      </div>

      <div className="temperature">23°C</div>

      <div className="description">Ясно</div>

      <div className="details">
        <div className="detail-item">
          <i className="fas fa-tint"></i>
          <p>Влажность</p>
          <span>65%</span>
        </div>

        <div className="detail-item">
          <i className="fas fa-wind"></i>
          <p>Ветер</p>
          <span>12 км/ч</span>
        </div>

        <div className="detail-item">
          <i className="fas fa-compress-alt"></i>
          <p>Давление</p>
          <span>1012 hPa</span>
        </div>
      </div>

      <div className="update-time">Обновлено: 16 мая, 15:30</div>
    </div>
  );
}

export default App;
