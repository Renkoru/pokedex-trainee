import random from 'lodash/fp/random';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Loading from 'Shared/Loading';
import { fetchAllPokemons } from 'Services/api';

import PokemonList from 'Components/PokemonList';
import { useStore } from '../../store';
import Header from './Header';
import Tree from './Tree';
import PlayGround from './PlayGround';

function Forest() {
  const [forestPokemon, setForestPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState(null);
  const { bagPokemonList } = useStore();

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

  function onCatch() {
    selectRandomPokemon(pokemonList);
  }

  return (
    <Loading dataList={[pokemonList, forestPokemon]}>
      {() => (
        <>
          <Header total={pokemonList.length} pokemonName={forestPokemon.name} />
          <ForestContainer>
            <Tree />

            <PlayGround pokemon={forestPokemon} onCatch={onCatch} />

            <Tree />
          </ForestContainer>
          <PokemonList
            title={`Pokemons in my Bag (${bagPokemonList.length}):`}
            emptyMessage="No pokemons in my bag"
            pokemonList={bagPokemonList}
          />
        </>
      )}
    </Loading>
  );
}

const ForestContainer = styled('div')({
  display: 'flex',
  marginTop: '50px',
  marginBottom: '50px',
});

export default Forest;
