// 1. importar el useState
import { useState } from 'react';

import './App.css';

const usd = 4_500;

// capturar el valor del input -> onchange
// calcular el valor final
// crear una funcion que calcule el valor final (usd * amount)
// invocar conectar la funcion con el evento del boton
// mostrar el valor final en el html

function App() {
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState('usd');
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    setAmount(e.target.value);
  }

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  }

  const handleClick = () => {
    if (currency === 'usd') {
      setTotal(amount * usd);
    }

    if (currency === 'cop') {
      setTotal(amount / usd);
    }
  }

  return (
    <div className="App-header">
      <h1>Exchange Money</h1>

      <input type="number" name="amount" onChange={handleChange} />
      <select name="currency" onChange={handleCurrencyChange}>
        <option value="usd">USD to COP</option>
        {/* <option value="eur">EUR</option> */}
        <option value="cop">COP to USD</option>
      </select>
      <br />
      <button onClick={handleClick}>Calculate</button>

      <hr />

      <h2>El total es {total}</h2>
    </div>
  );
}

export default App;
