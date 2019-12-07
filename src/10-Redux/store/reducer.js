import uuid from 'uuid/v4';

import {
  BAG_ADD_POKEMON,
  NOTIFICATION_ADD,
  NOTIFICATION_REMOVE,
  USER_SET,
  POKEMONS_SET,
  TRAINER_POKEMONS_SET,
  TRAINER_POKEMONS_ADD,
  TRAINER_POKEMONS_REMOVE,
} from './actions';

export function getInitialState() {
  return {
    user: null,
    pokemonList: null,
    trainerPokemonList: null,
    bagPokemonList: [],
    notifications: [],
  };
}

function reducer(previousState, recivedAction) {
  const actionHandlerMap = {
    [BAG_ADD_POKEMON]: (state, action) => ({
      ...state,
      bagPokemonList: [...state.bagPokemonList, action.payload],
    }),
    [NOTIFICATION_ADD]: (state, action) => ({
      ...state,
      notifications: [...state.notifications, { ...action.payload, id: uuid() }],
    }),
    [NOTIFICATION_REMOVE]: (state, action) => ({
      ...state,
      notifications: state.notifications.filter(({ id: listId }) => listId !== action.payload),
    }),
    [USER_SET]: (state, action) => ({
      ...state,
      user: action.payload,
    }),
    [POKEMONS_SET]: (state, action) => ({
      ...state,
      pokemonList: action.payload,
    }),
    [TRAINER_POKEMONS_SET]: (state, action) => ({
      ...state,
      trainerPokemonList: action.payload,
    }),
    [TRAINER_POKEMONS_ADD]: (state, action) => ({
      ...state,
      trainerPokemonList: [...state.trainerPokemonList, action.payload],
    }),
    [TRAINER_POKEMONS_REMOVE]: (state, action) => ({
      ...state,
      trainerPokemonList: state.trainerPokemonList.filter(
        ({ id: listId }) => listId !== action.payload,
      ),
    }),
  };

  const handler = actionHandlerMap[recivedAction.type];

  return handler ? handler(previousState, recivedAction) : getInitialState();
}

export default reducer;
