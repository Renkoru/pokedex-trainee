export function getTrainerPokemons(state) {
  const { trainerPokemonList, pokemonList } = state;

  if (!trainerPokemonList || !pokemonList) {
    return null;
  }

  return trainerPokemonList.map(trainerPokemon => {
    const pokemon = pokemonList.find(({ pid }) => pid === trainerPokemon.pid);

    return { ...trainerPokemon, imageUrl: pokemon.imageUrl };
  });
}

export function getBagPokemonList(state) {
  return state.bagPokemonList;
}

export function getUser(state) {
  return state.user;
}

export function getPokemonList(state) {
  return state.pokemonList;
}