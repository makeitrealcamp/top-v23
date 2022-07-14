// 1. importar el useState
import { useState } from 'react';

import Amount from './components/Split/Amount';
import Buttons from './components/Split/Buttons';
import Result from './components/Split/Result';

import './App.css';

function App() {
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleIncrease = () => {
    setTotal(total + amount);
  }

  const handleDecrease = () => {
    setTotal(total - amount);
  }

  return (
    <div className="App-header">
      <Amount setAmount={setAmount} />

      <Buttons
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />

      <Result total={total} />
    </div>
  );
}

export default App;
