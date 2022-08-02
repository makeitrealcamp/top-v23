import {
  ADD_VOTE_CANDY1,
  ADD_VOTE_CANDY2,
  ADD_VOTE_CANDY3,
} from './types';

// 4. Crear el Initial State
// Casi siempre sera un objecto
const initialState = {
  candies: [],
  candy1: 0,
  candy2: 0,
  candy3: 0,
  total: 0,
}

// 3. Crear el reducer
// El reducer es una funcion q recibe el estado actual y la accion
// El estado actual, en la primera ejecucion es undefined
// por eso necesitamos tener un estado inicial para asignarlo como valor por defecto -> 4.
const reducer = (state = initialState, action) => {
  const { candy1, candy2, candy3, total } = state;

  switch (action.type) {
    case ADD_VOTE_CANDY1: {
      const vote = candy1 + 1
      return  {
        ...state,
        candy1: vote,
        total: vote + candy2 + candy3,
      }
    }
    case ADD_VOTE_CANDY2: {
      const vote = candy2 + action.payload
      return  {
        ...state,
        candy2: vote,
        total: candy1 + vote + candy3,
      }
    }
    case ADD_VOTE_CANDY3: {
      const vote = candy3 + action.payload
      return  {
        ...state,
        candy3: candy3 + action.payload,
        total: candy1 + candy2 + vote,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;
