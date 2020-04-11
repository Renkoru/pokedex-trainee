import random from 'lodash/fp/random';
import path from 'lodash/fp/path';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { isCaught } from 'Shared/services/pokemon';
import { fetchAllPokemons } from 'Shared/services/api';
import PlayGround from 'Shared/PlayGround';
import Tree from 'Shared/Tree';

import Header from './Header';

function Forest() {
  const [forestPokemon, setForestPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(null); // TODO: Lifting state up

  function selectRandomPokemon(pokemons) {
    const randomIndex = random(0, pokemons.length);
    setForestPokemon(pokemons[randomIndex]);
  }

  useEffect(() => {
    async function fetchData() {
      const list = await fetchAllPokemons();

      setPokemonList(list);
      selectRandomPokemon(list);
    }
    fetchData();
  }, []);

  async function onCatch() {
    if (isCaught()) {
      alert('Implementation required');
    }

    selectRandomPokemon(pokemonList);
  }

  if (!pokemonList || !forestPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header>
        Here are &nbsp;
        {path('length')(pokemonList)}
        &nbsp; pokemons. You met &nbsp;
        <b>{path('name')(forestPokemon)}</b>
        &nbsp;
      </Header>
      <ForestContainer>
        <Tree />

        <PlayGround pokemon={forestPokemon} onCatch={onCatch} />

        <Tree />
      </ForestContainer>
    </div>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
