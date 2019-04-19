import { POCKET_REMOVE, POCKET_ADD } from './actions';

const defaultState = [];
// {
// trainerPokemons: [],
// allPokemons: [],
// profile: {
//   id: 8,
//   name: 'Ash',
// },
// pocket: [],
// };

const trainerReducer = (state = defaultState, action) => {
  const pid = action.payload;

  switch (action.type) {
    case POCKET_ADD:
      return [...state, pid];
    case POCKET_REMOVE:
      return state.filter(id => id !== pid);
    default:
      return state;
  }
};

export default trainerReducer;
