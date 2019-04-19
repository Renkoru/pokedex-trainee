import { SET_ALL_POKEMONS } from './mainActions';

const defaultState = {
  pokemons: [],
};

function defaultReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}

export default defaultReducer;
