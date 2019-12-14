import React from 'react';
import { useSelector } from 'react-redux';

import PokemonList from 'Shared/PokemonList';

function TrainersBag() {
  const bagPokemonList = useSelector(state => state.trainer.bagPokemonList);

  return (
    <PokemonList
      title={`Pokemons in my Bag (${bagPokemonList.length}):`}
      emptyMessage="No pokemons in my bag"
      pokemonList={bagPokemonList}
    />
  );
}

export default TrainersBag;
