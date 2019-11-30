import React from 'react';

import PokemonList from 'Shared/PokemonList';

import { removeTrainerPokemon as removeTrainerPokemonAPI } from 'Services/api';
import { trainerPokemonsRemove, bagAddPokemon } from 'Store/actions';
import { getTrainerPokemons } from 'Store/selectors';
import { connect } from 'Store';

function Pokedex({
  className,
  user,
  bagAddPokemon,
  trainerPokemonsRemove,
  bagPokemonList,
  trainerPokemonList,
}) {
  function onPokemonSelect(id) {
    const bagPokemon = bagPokemonList.find(({ id: pokemonId }) => pokemonId === id);
    if (bagPokemon) {
      return;
    }
    const selectedPokemon = trainerPokemonList.find(({ id: pokemonId }) => pokemonId === id);

    bagAddPokemon(selectedPokemon);
  }

  async function onRemove(id) {
    await removeTrainerPokemonAPI(user.id, id);
    trainerPokemonsRemove(id);
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

function mapStateToProps(state) {
  const { bagPokemonList, user } = state;
  const trainerPokemonList = getTrainerPokemons(state);

  return {
    bagPokemonList,
    user,
    trainerPokemonList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    bagAddPokemon: pokemon => dispatch(bagAddPokemon(pokemon)),
    trainerPokemonsRemove: id => dispatch(trainerPokemonsRemove(id)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pokedex);
