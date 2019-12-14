export const NOTIFICATION_ADD = 'NOTIFICATION_ADD';
export function notificationAdd(notification) {
  return {
    type: NOTIFICATION_ADD,
    payload: notification,
  };
}

export const NOTIFICATION_REMOVE = 'NOTIFICATION_REMOVE';
export function notificationRemove(id) {
  return {
    type: NOTIFICATION_REMOVE,
    payload: id,
  };
}

export const USER_SET = 'USER_SET';
export function userSet(user) {
  return {
    type: USER_SET,
    payload: user,
  };
}

export const POKEMONS_SET = 'POKEMONS_SET';
export function pokemonsSet(pokemonList) {
  return {
    type: POKEMONS_SET,
    payload: pokemonList,
  };
}
