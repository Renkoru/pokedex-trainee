export const BAG_ADD_POKEMON = 'BAG_ADD_POKEMON';
export function bagAddPokemon(pokemon) {
  return {
    type: BAG_ADD_POKEMON,
    payload: pokemon,
  };
}

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

export const TRAINER_POKEMONS_SET = 'TRAINER_POKEMONS_SET';
export function trainerPokemonsSet(pokemonList) {
  return {
    type: TRAINER_POKEMONS_SET,
    payload: pokemonList,
  };
}

export const TRAINER_POKEMONS_ADD = 'TRAINER_POKEMONS_ADD';
export function trainerPokemonsAdd(pokemon) {
  return {
    type: TRAINER_POKEMONS_ADD,
    payload: pokemon,
  };
}

export const TRAINER_POKEMONS_REMOVE = 'TRAINER_POKEMONS_REMOVE';
export function trainerPokemonsRemove(pokemon) {
  return {
    type: TRAINER_POKEMONS_REMOVE,
    payload: pokemon,
  };
}
