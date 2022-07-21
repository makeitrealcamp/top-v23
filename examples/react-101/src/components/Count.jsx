// importar el useState
import { useEffect, useState } from 'react';

function Count(props) {
  // 2. Crear un useState para la variable de estado
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    console.log('Efecto por default, se ejecuta siempre despues de cada render')
  })

  // useEffect('effect', 'array de dependencias')

  // Array de dependencias es vacio
  useEffect(() => {
    console.log('Efecto se ejecuta solo una vez')

    setTimeout(() => {
      console.log('Pasaron 15 segundos despues de renderizar')
      const result = ['a', 'b', 'c'];
      setData(result);
    }, 15000)
  }, [])



  // useEffect(() => {
  //   if (data.length === 0) {
  //     console.log('Data vacia')
  //   } else {
  //     console.log('Data Llena')
  //   }
  // }, [data])


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

      <h2>Data</h2>
      {
        data.length ? data.map((item, index) => {
          return (
            <div key={index}>{item}</div>
          )
        }) : <div>loading .... </div>
      }

    </div>
  );

}

export default Count;
