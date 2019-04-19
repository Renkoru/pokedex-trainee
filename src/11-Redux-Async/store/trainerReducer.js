import {
  POCKET_REMOVE,
  POCKET_ADD,
  REMOVE_POKEMON,
  SET_TRAINER_POKEMONS,
} from './trainerActions';

const defaultState = {
  id: 8,
  name: 'Ash',
  pokemons: [],
  pocket: [],
};

function trainerReducer(state = defaultState, action) {
  const pid = action.payload;

  switch (action.type) {
    case POCKET_ADD:
      return { ...state, pocket: [...state.pocket, pid] };
    case POCKET_REMOVE:
      return {
        ...state,
        pocket: state.pocket.filter(id => id !== pid),
      };
    case REMOVE_POKEMON:
      return {
        ...state,
        pokemons: state.pokemons.filter(({ id }) => id !== pid),
      };
    case SET_TRAINER_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}

export default trainerReducer;
