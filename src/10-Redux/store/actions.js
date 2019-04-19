export const POKET_ADD = 'POKET_ADDADD2';
export function poketAdd(id) {
  return { type: POKET_ADD, payload: id };
}

export const POKET_REMOVE = 'POKET_REMOVE_2';
export function poketRemove(id) {
  return { type: POKET_REMOVE, payload: id };
}

export const REMOVE_POKEMON = 'REMOVE_POKEMON_2';
export function removePokemon(id) {
  return { type: REMOVE_POKEMON, payload: id };
}

export const SET_TRAINER_POKEMONS = 'SET_TRAINER_POKEMONS_2';
export function setTrainerPokemons(pokemons) {
  return { type: SET_TRAINER_POKEMONS, payload: pokemons };
}

export const SET_ALL_POKEMONS = 'SET_ALL_POKEMONS_2';
export function setAllPokemons(pokemons) {
  return { type: SET_ALL_POKEMONS, payload: pokemons };
}
