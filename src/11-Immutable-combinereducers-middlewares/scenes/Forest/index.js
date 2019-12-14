import random from 'lodash/fp/random';

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import Loading from 'Shared/Loading';

import Header from './Header';
import Tree from './Tree';
import PlayGround from './PlayGround';
import TrainersBag from './TrainersBag';

function Forest({ pokemonList }) {
  const [forestPokemon, setForestPokemon] = useState(null);

  function selectRandomPokemon(pokemons) {
    const randomIndex = random(0, pokemons.length);
    setForestPokemon(pokemons[randomIndex]);
  }

  useEffect(() => {
    if (pokemonList) {
      selectRandomPokemon(pokemonList);
    }
  }, [pokemonList]);

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

            <PlayGround pokemon={forestPokemon} onCatch={onCatch} onSkip={onCatch} />

            <Tree />
          </ForestContainer>
          <TrainersBag />
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

function mapStateToProps(state) {
  return {
    pokemonList: state.main.pokemonList,
  };
}

export default connect(mapStateToProps)(Forest);
