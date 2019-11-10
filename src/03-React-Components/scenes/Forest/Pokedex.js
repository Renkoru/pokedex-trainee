import isEmpty from 'lodash/fp/isEmpty';

import React from 'react';
import styled from '@emotion/styled';
import capitalize from 'lodash/fp/capitalize';

function Pokedex({ pokemonList, className }) {
  const amount = pokemonList.length;

  return (
    <Container className={className}>
      <Header>Pokemons in my Pokedex ({amount}):</Header>

      <ListContainer>
        {pokemonList.map(({ name, id }, index) => (
          <Pokemon key={`${id}-${index}`}>{capitalize(name)}</Pokemon>
        ))}
      </ListContainer>
    </Container>
  );
}

function PokedexContainer({ pokemonList, className }) {
  return (
    <div className={className}>
      {isEmpty(pokemonList) ? <div>No pokemons caught</div> : <Pokedex pokemonList={pokemonList} />}
    </div>
  );
}

const Container = styled('div')({
  fontSize: '18px',
  backgroundColor: 'rgba(30, 70, 15, 0.5)',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '10px',
});

const Pokemon = styled('div')({
  fontSize: '20px',
  marginLeft: '10px',
  marginRight: '10px',
});

const Header = styled('h2')({
  fontSize: '18px',
});

const ListContainer = styled('div')({
  fontSize: '18px',
  display: 'flex',
  flexWrap: 'wrap',
});

export default PokedexContainer;
