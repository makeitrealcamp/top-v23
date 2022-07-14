// importar el useState
import { useState } from 'react';

function Count() {
  // 2. Crear un useState para la variable de estado
  const [count, setCount] = useState(0);

  // 3. Crear una función que incremente el valor de la variable de estado
  const handleIncrement = () => {
    // 4. Incrementar el valor de la variable de estado
    setCount(count + 1); // 0 + 1 = 1
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>El valor de count es {count}</h1>
      <button onClick={handleIncrement}>
        Increment
      </button>

      {
        count > 0
          ? (
            <button onClick={handleDecrement}>
              Decrement
            </button>
          )
          : null
      }

    </div>
  );
}

export default Count;
