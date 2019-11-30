import React from 'react';
import styled from '@emotion/styled';

import { useStore } from '../../store';
import Trainer from './Trainer';
import Pokedex from './Pokedex';
import Bag from './Bag';

function TrainerScene() {
  const { bagPokemonList, onBagAdd, trainerPokemonList } = useStore();

  function onPokemonSelect(id) {
    const bagPokemon = bagPokemonList.find(({ id: pokemonId }) => pokemonId === id);
    if (bagPokemon) {
      return;
    }
    const selectedPokemon = trainerPokemonList.find(({ id: pokemonId }) => pokemonId === id);

    onBagAdd(selectedPokemon);
  }

  if (!trainerPokemonList) {
    return <div>Loading...</div>;
  }

  return (
    <TrainerContainer>
      <Trainer />
      <div>
        <Pokedex css={{ marginLeft: '50px' }} onClick={onPokemonSelect} />
        <Bag css={{ marginTop: '50px', marginLeft: '50px' }} />
      </div>
    </TrainerContainer>
  );
}

const TrainerContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default TrainerScene;
