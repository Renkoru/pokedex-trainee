import random from 'lodash/fp/random';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';

import Header from './Header';
import Tree from './Tree';
import Bug from './Bug';
import PlayGround from './PlayGround';

function Forest() {
  const [forestPokemon, setForestPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const [trainerPokemonList, setTrainerPokemonList] = useState([]);

  function changePokemon(pokemons) {
    const randomIndex = random(0, pokemons.length);
    setForestPokemon(pokemons[randomIndex]);
  }

  useEffect(() => {
    async function fetchData() {
      const { data: list } = await axios.get('/api/v1/pokemons');
      setPokemonList(list);
      changePokemon(list);
    }

    fetchData();
  }, []);

  function onCatch() {
    if (isCaught()) {
      setTrainerPokemonList(list => [...list, forestPokemon]);
    }

    changePokemon(pokemonList);
  }

  if (!pokemonList || !forestPokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header pokemonsLength={pokemonList.length} pokemonName={forestPokemon.name} />
      <ForestContainer>
        <Tree />

        <PlayGround pokemon={forestPokemon} onCatch={onCatch} />

        <Tree />
      </ForestContainer>

      <Bug pokemonList={trainerPokemonList} />
    </div>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
