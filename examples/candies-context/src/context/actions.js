import {
  ADD_VOTE_CANDY1,
  ADD_VOTE_CANDY2,
  ADD_VOTE_CANDY3,
} from './types';

export const addVoteCandy1 = () => ({ type: ADD_VOTE_CANDY1 });
export const addVoteCandy2 = (cant) => ({ type: ADD_VOTE_CANDY2, payload: cant });
export const addVoteCandy3 = (cant) => ({ type: ADD_VOTE_CANDY3, payload: cant });
