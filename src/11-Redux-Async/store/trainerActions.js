import { getTrainerPokemons } from 'Services/api';

export const POCKET_ADD = 'POCKET_ADDADD2';
export function pocketAdd(id) {
  return { type: POCKET_ADD, payload: id };
}

export const POCKET_REMOVE = 'POCKET_REMOVE_2';
export function pocketRemove(id) {
  return { type: POCKET_REMOVE, payload: id };
}

export const REMOVE_POKEMON = 'REMOVE_POKEMON_2';
export function removePokemon(id) {
  return { type: REMOVE_POKEMON, payload: id };
}

export const SET_TRAINER_POKEMONS = 'SET_TRAINER_POKEMONS_2';
export function setTrainerPokemons(pokemons) {
  return { type: SET_TRAINER_POKEMONS, payload: pokemons };
}

export function fetchTrainerPokemons(trainerId) {
  return dispatch =>
    getTrainerPokemons(trainerId).then(pokemons =>
      dispatch(setTrainerPokemons(pokemons)),
    );
}
