import { addTrainerPokemon as addTrainerPokemonAPI } from 'Services/api';

export const BAG_ADD_POKEMON = 'BAG_ADD_POKEMON';
export function bagAddPokemon(pokemon) {
  return {
    type: BAG_ADD_POKEMON,
    payload: pokemon,
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

export function trainerAddPokemon(userId, pokemonId) {
  return async dispatch => {
    const caughtPokemon = await addTrainerPokemonAPI(userId, pokemonId);
    dispatch(trainerPokemonsAdd(caughtPokemon));

    return caughtPokemon;
  };
}
