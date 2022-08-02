import { createContext, useReducer, useContext } from "react";

import { reducer, initialState } from "./reducer";

// a.k.a. Store/state
const Context = createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error("useAppContext must be used within a Provider");
  }

  return context;
}


export default Context;
