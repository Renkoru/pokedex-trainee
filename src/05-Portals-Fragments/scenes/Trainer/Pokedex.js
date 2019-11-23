import React from 'react';

import PokemonList from 'Components/PokemonList';

function Pokedex({ pokemonList, onClick, className }) {
  return (
    <PokemonList
      className={className}
      title={`Pokemons in my Pokedex (${pokemonList.length}):`}
      emptyMessage="No pokemons caught"
      pokemonList={pokemonList}
      onPokemonClick={onClick}
    />
  );
}

export default Pokedex;
