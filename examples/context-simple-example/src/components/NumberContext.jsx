// 1. importar createContext
import { createContext, useContext, useState } from "react"

// 2. crear el contexto
const ContextCounter = createContext()

// 4. Crear el provider
export const ProviderCounter = ({ children }) => {
  const [counter, setCounter]= useState(0);

  const store = {
    counter,
    setCounter,
  }

  return (
    <ContextCounter.Provider value={store}>
      {children}
    </ContextCounter.Provider>
  )
}

// 5. Crear el consumer
export const useNumber = () =>{
  const context = useContext(ContextCounter)

  if (context === undefined) {
    throw new Error("useNumber must be used within a ProviderCounter")
  }
  return context;
}

// 3. exportar el contexto
export default ContextCounter
