// 1. importar el useState
import { useState } from 'react';

function RandomColors() {
  const [colors, setColors] = useState(['orange','blue']);

  const randomColorsHexa = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }

  const handleAddColor = () => {
    // 1 forma de agregar un nuevo elemento
    // const newColors = colors.concat('red');

    // 2 forma de agregar un nuevo elemento
    const newColors = [...colors, randomColorsHexa()];
    setColors(newColors);
  }

  return (
    <div className="App-header">
      <button onClick={handleAddColor}> Add color</button>

      <div>
        {colors.map((color, index) => {
          const styles = {
            width: '150px',
            height: '50px',
            backgroundColor: color,
            margin: '10px'
          }

          return (
            <div
              key={index}
              style={styles}
            >
              {color}
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default RandomColors;
