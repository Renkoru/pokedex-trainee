import isEmpty from 'lodash/fp/isEmpty';

import React from 'react';
import styled from '@emotion/styled';
import capitalize from 'lodash/fp/capitalize';

function PokemonList({ title, pokemonList, className, onPokemonClick }) {
  return (
    <Container className={className}>
      <Header>{title}</Header>

      <ListContainer>
        {pokemonList.map(({ name, id }, index) => (
          <Pokemon key={`${id}-${index}`} onClick={() => onPokemonClick(id)}>
            {capitalize(name)}
          </Pokemon>
        ))}
      </ListContainer>
    </Container>
  );
}

function PokemonListContainer({ title, pokemonList, className, emptyMessage, onPokemonClick }) {
  return (
    <div className={className}>
      {isEmpty(pokemonList) ? (
        <div>{emptyMessage}</div>
      ) : (
        <PokemonList title={title} pokemonList={pokemonList} onPokemonClick={onPokemonClick} />
      )}
    </div>
  );
}

const Container = styled('div')({
  fontSize: '18px',
  backgroundColor: '#00d1b2',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '10px',
});

const Pokemon = styled('div')({
  fontSize: '20px',
  marginLeft: '10px',
  marginRight: '10px',
  ':hover': {
    cursor: 'pointer',
  },
});

const Header = styled('h2')({
  fontSize: '18px',
});

const ListContainer = styled('div')({
  fontSize: '18px',
  display: 'flex',
  flexWrap: 'wrap',
});

export default PokemonListContainer;
