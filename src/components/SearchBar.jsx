import React, { useState } from 'react';
import { fetchWeatherByCity } from '../services/weatherApi';

function SearchBar({ setWeatherData, setLoading, setError }) {
  const [city, setCity] = useState('');

  const validateCity = (value) => {
    const regex = /^[a-zA-Z\s\-']+$/;
    if (!value.trim()) return 'Please enter a city name.';
    if (!regex.test(value)) return 'City name contains invalid characters.';
    if (value.length > 50) return 'City name is too long.';
    return null;
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    const validationError = validateCity(city);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      if (!navigator.onLine) {
        setError('No internet connection. Please check your network.');
      } else if (err.response?.status === 404) {
        setError('City not found. Please check the spelling.');
      } else if (err.response?.status === 401) {
        setError('Invalid API key. Please check your configuration.');
      } else if (err.response?.status === 429) {
        setError('Too many requests. Please wait a moment and try again.');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="City name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;