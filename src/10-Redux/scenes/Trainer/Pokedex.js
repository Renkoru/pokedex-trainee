import React from 'react';
import { connect } from 'react-redux';

import PokemonList from 'Shared/PokemonList';

import { removeTrainerPokemon as removeTrainerPokemonAPI } from 'Services/api';
import { trainerPokemonsRemove, bagAddPokemon } from 'Store/actions';
import { getTrainerPokemons, getBagPokemonList, getUser } from 'Store/selectors';

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
  return {
    bagPokemonList: getBagPokemonList(state),
    user: getUser(state),
    trainerPokemonList: getTrainerPokemons(state),
  };
}

export default connect(
  mapStateToProps,
  { bagAddPokemon, trainerPokemonsRemove },
)(Pokedex);