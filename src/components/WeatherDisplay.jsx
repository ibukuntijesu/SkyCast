import React from 'react';

function WeatherDisplay({ data }) {
  const { name, main, weather, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <div className="weather-display">
      <h2>{name}</h2>
      <img src={iconUrl} alt={weather[0].description} />
      <p className="temp">{Math.round(main.temp)}°C</p>
      <p className="condition">{weather[0].main}</p>

      <div className="details">
        <div>
          <span>Feels Like</span>
          <strong>{Math.round(main.feels_like)}°C</strong>
        </div>
        <div>
          <span>Humidity</span>
          <strong>{main.humidity}%</strong>
        </div>
        <div>
          <span>Wind</span>
          <strong>{wind.speed} m/s</strong>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;