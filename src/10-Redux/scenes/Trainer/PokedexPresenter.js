import React from 'react';

import { trainerPokemonsRemove, bagAddPokemon } from 'Store/actions';

function PokedexView({ bagPokemonList, trainerPokemonList, onRemove, dispatch }) {
  function onPokemonSelect(id) {
    const bagPokemon = bagPokemonList.find(({ id: pokemonId }) => pokemonId === id);
    if (bagPokemon) {
      return;
    }
    const selectedPokemon = trainerPokemonList.find(({ id: pokemonId }) => pokemonId === id);

    dispatch(bagAddPokemon(selectedPokemon));
  }

  async function _onRemove(id) {
    await onRemove(id);
    dispatch(trainerPokemonsRemove(id));
  }

  if (!trainerPokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <PokemonList
      className={className}
      title={`Pokemons in my Pokedex (${trainerPokemonList.length}):`}
      emptyMessage="No pokemons caught"
      pokemonList={trainerPokemonList}
      onPokemonClick={onPokemonSelect}
      onRemove={onRemove}
    />
  );
}

export default PokedexView;
