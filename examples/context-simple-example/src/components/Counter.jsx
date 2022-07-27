// 1. importar el custom hook del consumer
import { useNumber } from './NumberContext';

const Counter = () => {
  const { counter, setCounter } = useNumber();


  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  return(
    <div>
      <h1>El contador esta en {counter}</h1>

      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
    </div>
  )
}

export default Counter
