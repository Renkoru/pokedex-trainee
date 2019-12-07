// import React from 'react';
import { connect } from 'react-redux';

import PokemonList from 'Shared/PokemonList';

// function Bag({ className }) {
//   return (
//     <PokemonList
//       className={className}
//       title={`Pokemons in my Bag (${bagPokemonList.length}):`}
//       emptyMessage="No pokemons in my bag"
//       pokemonList={bagPokemonList}
//     />
//   );
// }

function mapStateToProps(state) {
  const { bagPokemonList } = state;
  return {
    title: `Pokemons in my Bag (${bagPokemonList.length}):`,
    emptyMessage: 'No pokemons in my bag',
    pokemonList: bagPokemonList,
  };
}

export default connect(mapStateToProps)(PokemonList);
