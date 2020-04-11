import isEmpty from 'lodash/fp/isEmpty';

import React from 'react';
import styled from '@emotion/styled';

import PokemonList from './PokemonList';
import PokedexImg from './PokedexImg';

function Pokedex({ pokemonList, className }) {
  const amount = pokemonList.length;

  return (
    <Container className={className}>
      <Header>Pokemons in my Pokedex ({amount}):</Header>

      <Flex>
        <PokemonList
          emptyMessage="No pokemons caught"
          pokemonList={pokemonList}
          onPokemonClick={() => {}}
          onRemove={() => {}}
        />
        <PokedexImg />
      </Flex>
    </Container>
  );
}

function PokedexContainer({ pokemonList, className }) {
  return (
    <div className={className}>
      {isEmpty(pokemonList) ? (
        <div>No pokemons caught</div>
      ) : (
        <Pokedex pokemonList={pokemonList} />
      )}
    </div>
  );
}

const Flex = styled('div')({
  display: 'flex',
});

const Container = styled('div')({
  fontSize: '18px',
  backgroundColor: '#00d1b2',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '10px',
});

const Header = styled('h2')({
  fontSize: '18px',
});

export default PokedexContainer;
