import {
  ADD_VOTE_CANDY1,
  ADD_VOTE_CANDY2,
  ADD_VOTE_CANDY3,
} from './types';

export const initialState = {
  candies: [],
  candy1: 0,
  candy2: 0,
  candy3: 0,
  total: 0,
}

export const reducer = (state = initialState, action) => {
  const { candy1, candy2, candy3 } = state;

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


