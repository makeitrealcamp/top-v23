import { useState } from "react";

import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import ProductList from "./components/ProductList";

import Button from "./components/Button";
import { ContextCounterProvider } from './components/ContextCounter';

import './App.scss';


function App () {
  return (
    <div>
      <ContextCounterProvider>
        <>
          <Navbar />
          <h1>hola mundo</h1>
          <Button title="Hola mundo">
            <>
              <span>Hola mundo</span>
              <img src="logo512.png" alt="" />
              <p>texto</p>
            </>
          </Button>
        </>
      </ContextCounterProvider>

    </div>
  )
}


// function App() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   }

//   return (
//     <>
//       <Navbar cart={cart} />
//       <div className="container">
//         <div className="shopping-container">
//           <ShoppingCart />
//         </div>
//         <div>
//           <h1>Product List</h1>
//           <ProductList addToCart={addToCart} />
//         </div>
//       </div>
//     </>
//   );
// }

export default App;
