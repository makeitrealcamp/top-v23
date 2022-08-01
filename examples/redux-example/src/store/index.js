import { createStore } from 'redux';

function countReducer(state = 0, action){
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
  }
}

const store = createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const actionIncrement = {
  type: 'INCREMENT',
}

export const actionDecrement = {
  type: 'DECREMENT',
}

export const actionReset = {
  type: 'RESET',
}


export default store;
