export function getTrainerPokemons(store) {
  const { trainerPokemonList, pokemonList } = store;

  if (!trainerPokemonList || !pokemonList) {
    return null;
  }

  return trainerPokemonList.map(trainerPokemon => {
    const pokemon = pokemonList.find(({ pid }) => pid === trainerPokemon.pid);

    return { ...trainerPokemon, imageUrl: pokemon.imageUrl };
  });
}
