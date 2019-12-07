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
