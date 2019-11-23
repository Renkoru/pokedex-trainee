import React from 'react';

import PokemonList from 'Components/PokemonList';

function Bag({ pokemonList, onClick, className }) {
  return (
    <PokemonList
      className={className}
      title={`Pokemons in my Bag (${pokemonList.length}):`}
      emptyMessage="No pokemons in my bag"
      pokemonList={pokemonList}
    />
  );
}

export default Bag;
