import random from 'lodash/fp/random';
import path from 'lodash/fp/path';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
import { fetchAllPokemons } from 'Services/api';

import Loading from 'Shared/Loading';

import Header from './Header';
import Tree from './Tree';
import PlayGround from './PlayGround';

function Forest() {
  const [forestPokemon, setForestPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);

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

  return (
    <Loading dataList={[pokemonList, forestPokemon]}>
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
    </Loading>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
