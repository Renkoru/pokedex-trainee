import { connect } from 'react-redux';

import PokemonList from 'Shared/PokemonList';

function mapStateToProps(state) {
  const { bagPokemonList } = state.trainer;
  return {
    title: `Pokemons in my Bag (${bagPokemonList.length}):`,
    emptyMessage: 'No pokemons in my bag',
    pokemonList: bagPokemonList,
  };
}

export default connect(mapStateToProps)(PokemonList);
