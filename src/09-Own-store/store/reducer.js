import { POKET_REMOVE, POKET_ADD } from './actions';

const defaultState = [];
// {
// trainerPokemons: [],
// allPokemons: [],
// profile: {
//   id: 8,
//   name: 'Ash',
// },
// poket: [],
// };

const trainerReducer = (state = defaultState, action) => {
  const pid = action.payload;

  switch (action.type) {
    case POKET_ADD:
      return [...state, pid];
    case POKET_REMOVE:
      return state.filter(id => id !== pid);
    default:
      return state;
  }
};

export default trainerReducer;
