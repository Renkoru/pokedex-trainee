import isEmpty from 'lodash/fp/isEmpty';

import React from 'react';
import styled from '@emotion/styled';
import capitalize from 'lodash/fp/capitalize';

import Button from 'Shared/Button';
import Image from './Image';

function PokemonList({ title, pokemonList, className, onPokemonClick, onRemove }) {
  return (
    <Container className={className}>
      <Header>{title}</Header>

      <ListContainer>
        {pokemonList.map(({ name, id, imageUrl }, index) => (
          <Pokemon css={{ height: '140px', textAlign: 'center' }} key={`${id}-${index}`}>
            <Image
              css={{ height: '70%', maxWidth: '100%' }}
              src={imageUrl}
              onClick={() => onPokemonClick(id)}
            />

            <div>
              {capitalize(name)}
              {onRemove && (
                <RemoveButton onClick={() => onRemove(id)} type="light">
                  X
                </RemoveButton>
              )}
            </div>
          </Pokemon>
        ))}
      </ListContainer>
    </Container>
  );
}

PokemonList.defaultProps = {
  onPokemonClick: () => {},
};

function PokemonListContainer({
  title,
  pokemonList,
  className,
  emptyMessage,
  onPokemonClick,
  onRemove,
}) {
  return (
    <div className={className}>
      {isEmpty(pokemonList) ? (
        <div>{emptyMessage}</div>
      ) : (
        <PokemonList
          title={title}
          pokemonList={pokemonList}
          onPokemonClick={onPokemonClick}
          onRemove={onRemove}
        />
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

const RemoveButton = styled(Button)({
  fontSize: '10px',
  marginLeft: '10px',
  ':hover': { cursor: 'pointer' },
});

export default PokemonListContainer;
