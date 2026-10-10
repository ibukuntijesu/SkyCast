import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="app">
      <header className="app-header">
        <h1>☁️ SkyCast</h1>
        <p>Your real-time weather companion</p>
      </header>

      <SearchBar
        setWeatherData={setWeatherData}
        setLoading={setLoading}
        setError={setError}
      />

      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {weatherData && !loading && <WeatherDisplay data={weatherData} />}
    </div>
  );
}

export default App;