// 1. importar el useState
import { useState } from 'react';


const ANIMAL_IMAGES = {
  img1: "https://purr.objects-us-east-1.dream.io/i/img_6184.jpg",
  img2: "https://purr.objects-us-east-1.dream.io/i/wPD1T.jpg",
  img3: "https://purr.objects-us-east-1.dream.io/i/photo_2017-05-13_14-24-03.jpg",
};

function App() {
  const [image, setImage] = useState(null);

  const selectImage = (img) => {
    setImage(img);
  }

  return (
    <div className="App-header">

      {
        Object.keys(ANIMAL_IMAGES).map((key) => {
          return (
            <button
              key={key}
              onClick={() => {
                selectImage(ANIMAL_IMAGES[key])
              }}
            >
              {key}
            </button>
          )
        })
      }

      <div>
        {
          image ? <img src={image} alt="animal" /> : <p>No image selected</p>
        }

      </div>
    </div>
  );
}

export default App;
