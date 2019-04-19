import { getPokemons } from 'Services/api';

export const SET_ALL_POKEMONS = 'SET_ALL_POKEMONS_2';
export function setAllPokemons(pokemons) {
  return { type: SET_ALL_POKEMONS, payload: pokemons };
}

export function fetchPokemons() {
  return dispatch =>
    getPokemons().then(pokemons =>
      dispatch(setAllPokemons(pokemons)),
    );
}
