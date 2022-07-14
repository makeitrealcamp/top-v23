// 1. importar el useState
import { useState } from 'react';


function App() {
  // 2. Crear un useState para la variable de estado
  const [description, setDescription] = useState('');

  // 3. Crear una función que capture el valor del textarea
  // y lo asigne a la variable de estado
  const handleChange = (e) => {
    const { value } = e.target;
    const lowerValue = value.toLowerCase();

    // 4. asigne a la variable de estado el valor del textarea
    setDescription(lowerValue);
  }

  return (
    <div>
      <textarea name="description"  cols="30" rows="10" onChange={handleChange} />

      <p>
        {
          description.includes('cebolla')
            ? 'Odio la cebolla'
            : null
        }
      </p>

    </div>
  );
}

export default App;
