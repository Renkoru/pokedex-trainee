import produce from 'immer';

import {
  BAG_ADD_POKEMON,
  TRAINER_POKEMONS_SET,
  TRAINER_POKEMONS_ADD,
  TRAINER_POKEMONS_REMOVE,
} from './trainerActions';

export function getInitialState() {
  return {
    trainerPokemonList: null,
    bagPokemonList: [],
  };
}

function reducer(previousState = getInitialState(), action) {
  /* eslint-disable no-param-reassign */
  return produce(previousState, state => {
    const actionHandlerMap = {
      [BAG_ADD_POKEMON]: () => {
        state.bagPokemonList.push(action.payload);
      },
      [TRAINER_POKEMONS_SET]: () => {
        state.trainerPokemonList = action.payload;
      },
      [TRAINER_POKEMONS_ADD]: () => {
        state.trainerPokemonList.push(action.payload);
      },
      [TRAINER_POKEMONS_REMOVE]: () => {
        state.trainerPokemonList = state.trainerPokemonList.filter(
          ({ id: listId }) => listId !== action.payload,
        );
      },
    };

    const handler = actionHandlerMap[action.type];

    if (handler) {
      handler();
    }
  });
}

export default reducer;
