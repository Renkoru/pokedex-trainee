import uuid from 'uuid/v4';
import produce from 'immer';

import { NOTIFICATION_ADD, NOTIFICATION_REMOVE, USER_SET, POKEMONS_SET } from './actions';

export function getInitialState() {
  return {
    user: null,
    pokemonList: null,
    notifications: [],
  };
}

function reducer(previousState = getInitialState(), action) {
  /* eslint-disable no-param-reassign */
  const newState = produce(previousState, state => {
    const actionHandlerMap = {
      [NOTIFICATION_ADD]: () => {
        state.notifications.push({ ...action.payload, id: uuid() });
      },
      [NOTIFICATION_REMOVE]: () => {
        state.notifications = state.notifications.filter(
          ({ id: listId }) => listId !== action.payload,
        );
      },
      [USER_SET]: () => {
        state.user = action.payload;
      },
      [POKEMONS_SET]: () => {
        state.pokemonList = action.payload;
      },
    };

    const handler = actionHandlerMap[action.type];

    if (handler) {
      handler();
    }
  });

  return newState;
}

export default reducer;
