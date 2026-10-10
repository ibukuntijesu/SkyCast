const [unit, setUnit] = useState('metric');
const symbol = unit === 'metric' ? '°C' : '°F';

// Add a button to toggle unit and re-fetch
<button onClick={() => setUnit(u => u === 'metric' ? 'imperial' : 'metric')}>
  Switch to {symbol === '°C' ? '°F' : '°C'}
</button>