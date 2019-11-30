import React from 'react';

import PokemonList from 'Shared/PokemonList';

import { removeTrainerPokemon as removeTrainerPokemonAPI } from 'Services/api';
import { trainerPokemonsRemove, bagAddPokemon } from 'Store/actions';
import { getTrainerPokemons } from 'Store/selectors';
import { useStore } from '../../store';

function Pokedex({ className }) {
  const store = useStore();
  const { bagPokemonList, user, dispatch } = store;
  const trainerPokemonList = getTrainerPokemons(store);

  function onPokemonSelect(id) {
    const bagPokemon = bagPokemonList.find(({ id: pokemonId }) => pokemonId === id);
    if (bagPokemon) {
      return;
    }
    const selectedPokemon = trainerPokemonList.find(({ id: pokemonId }) => pokemonId === id);

    dispatch(bagAddPokemon(selectedPokemon));
  }

  async function onRemove(id) {
    await removeTrainerPokemonAPI(user.id, id);
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

export default Pokedex;
