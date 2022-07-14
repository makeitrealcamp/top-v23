// 1. importar el useState
import { useState } from 'react';

import './App.css';

const countries = [
  'argentina',
  'chile',
  'uruguay',
  'paraguay',
  'colombia',
]

function App() {
  const [country, setCountry] = useState('');

  const handleChange = (e) => {
    setCountry(e.target.value);
  }

  return (
    <div className="App-header">

      <select name="countries" onChange={handleChange}>
        <option value="" selected>Select a country</option>
        {
          countries.sort().map(country => (
            <option key={country} value={country}>{country.toUpperCase()}</option>
          ))
        }
      </select>

      {
        country !== ''
          ? <h1> Tu destino es: {country} </h1>
          : null
      }

    </div>
  );
}

export default App;
