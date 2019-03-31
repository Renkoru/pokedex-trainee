import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import capitalize from 'lodash/capitalize';
import isEmpty from 'lodash/isEmpty';

const Pokemon = styled.div`
  text-align: center;
  font-size: 24px;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 26px;
`;

function PokemonList({ pokemons }) {
  if (isEmpty(pokemons)) {
    return <Header>Zero pokemons.</Header>;
  }

  const amount = pokemons.length;

  return (
    <div>
      <Header>
        {amount ? `My Pokemons (${amount}):` : 'My Pokemons:'}
      </Header>
      {pokemons.map(({ name, id }) => (
        <Pokemon key={id}>{capitalize(name)}</Pokemon>
      ))}
    </div>
  );
}

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.shape({})),
};

export default PokemonList;
