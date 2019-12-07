import React from 'react';

import PokemonList from 'Shared/PokemonList';

import { useStore } from '../../store';

function Bag({ className }) {
  const { bagPokemonList } = useStore();

  return (
    <PokemonList
      className={className}
      title={`Pokemons in my Bag (${bagPokemonList.length}):`}
      emptyMessage="No pokemons in my bag"
      pokemonList={bagPokemonList}
    />
  );
}

export default Bag;
