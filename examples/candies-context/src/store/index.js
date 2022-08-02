// 1. Importar el createStore de redux
import { createStore } from 'redux';

import reducer from './reducer';

// 2. Crear el store
// El store necessita un reducer -> 3.
const store = createStore(
  reducer,
  // optional, agregar las redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// 5. Exportar el store -> Ir al index.js
export default store;
