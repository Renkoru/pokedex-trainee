import random from 'lodash/fp/random';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
// import { fetchAllPokemons, addTrainerPokemon, updateMe } from 'Services/api';
import { fetchAllPokemons } from 'Services/api';

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
      // await addTrainerPokemon(user.id, forestPokemon.pid);
      // setTrainerPokemonList(list => [...list, forestPokemon]);
      alert('Implementation required');
    }

    selectRandomPokemon(pokemonList);
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
    </div>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
