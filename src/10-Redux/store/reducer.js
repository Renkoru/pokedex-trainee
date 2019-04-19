import {
  POCKET_REMOVE,
  POCKET_ADD,
  REMOVE_POKEMON,
  SET_TRAINER_POKEMONS,
  SET_ALL_POKEMONS,
} from './actions';

const defaultState = {
  trainerPokemons: [],
  allPokemons: [],
  profile: {
    id: 8,
    name: 'Ash',
  },
  pocket: [],
};

const trainerReducer = (state = defaultState, action) => {
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
        trainerPokemons: state.trainerPokemons.filter(
          ({ id }) => id !== pid,
        ),
      };
    case SET_TRAINER_POKEMONS:
      return {
        ...state,
        trainerPokemons: action.payload,
      };
    case SET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
      };
    default:
      return state;
  }
};

export default trainerReducer;
