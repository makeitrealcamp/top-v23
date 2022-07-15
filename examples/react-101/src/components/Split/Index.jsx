// 1. importar el useState
import { useState } from 'react';

import Amount from './Amount';
import Buttons from './Buttons';
import Result from './Result';


function App() {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleAmount = (evt) => {
    const value = Number(evt.target.value);
    setAmount(value);
  }

  const handleIncrease = () => {
    setTotal(total + amount);
  }

  const handleDecrease = () => {
    setTotal(total - amount);
  }

  return (
    <div className="App-header">
      <Amount handleAmount={handleAmount} />

      <Buttons
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />

      <Result total={total} />
    </div>
  );
}

export default App;
