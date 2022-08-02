import { createContext, useReducer } from "react";

const initialState = {
  candies: [],
  candy1: 0,
  candy2: 0,
  candy3: 0,
  total: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_VOTE_CANDY1': {
      return  {
        ...state,
        candy1: state.candy1 + 1,
      }
    }

    default:
      break;
  }
  console.log(action);
}
