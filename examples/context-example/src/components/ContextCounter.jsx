// 1. Importar el createContext
import { createContext, useState, useContext } from 'react';

// 2. Crear el contexto
const ContextCounter = createContext();

// 4. Crear el provider
export const ContextCounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const store = {
    count,
    setCount,
  }

  return (
    <ContextCounter.Provider value={store}>
      {children}
    </ContextCounter.Provider>
  )
}

// 5. Crear el consumer
export const useContextCounter = () => {
  const context = useContext(ContextCounter)

  if (context === undefined) {
    throw new Error('useContextCounter must be used within a ContextCounterProvider')
  }

  return context
}

// 3. exportar el contexto
export default ContextCounter;
