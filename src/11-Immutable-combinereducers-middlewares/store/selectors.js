export function getTrainerPokemons(state) {
  const { trainerPokemonList } = state.trainer;
  const { pokemonList } = state.main;

  if (!trainerPokemonList || !pokemonList) {
    return null;
  }

  return trainerPokemonList.map(trainerPokemon => {
    const pokemon = pokemonList.find(({ pid }) => pid === trainerPokemon.pid);

    return { ...trainerPokemon, imageUrl: pokemon.imageUrl };
  });
}
