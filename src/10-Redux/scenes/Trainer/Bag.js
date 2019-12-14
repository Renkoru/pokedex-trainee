import { connect } from 'react-redux';

import PokemonList from 'Shared/PokemonList';
import { getBagPokemonList } from 'Store/selectors';

function mapStateToProps(state) {
  const bagPokemonList = getBagPokemonList(state);
  return {
    title: `Pokemons in my Bag (${bagPokemonList.length}):`,
    emptyMessage: 'No pokemons in my bag',
    pokemonList: bagPokemonList,
  };
}

export default connect(mapStateToProps)(PokemonList);