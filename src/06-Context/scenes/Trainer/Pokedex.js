import React from 'react';

import PokemonList from 'Shared/PokemonList';

import { removeTrainerPokemon as removeTrainerPokemonAPI } from 'Services/api';
import { useStore } from '../../store';

function Pokedex({ onClick, className }) {
  const { user, removeTrainerPokemon, trainerPokemonList } = useStore();

  async function onRemove(id) {
    await removeTrainerPokemonAPI(user.id, id);
    removeTrainerPokemon(id);
  }

  return (
    <PokemonList
      className={className}
      title={`Pokemons in my Pokedex (${trainerPokemonList.length}):`}
      emptyMessage="No pokemons caught"
      pokemonList={trainerPokemonList}
      onPokemonClick={onClick}
      onRemove={onRemove}
    />
  );
}

export default Pokedex;
