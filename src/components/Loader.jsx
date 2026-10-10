import React from 'react';

function Loader() {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Fetching weather data...</p>
    </div>
  );
}

export default Loader;