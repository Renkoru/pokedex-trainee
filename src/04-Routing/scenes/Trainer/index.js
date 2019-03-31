import React from 'react';
import axios from 'axios';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import capitalize from 'lodash/capitalize';
import isEmpty from 'lodash/isEmpty';

import { isCought, getRandomId } from 'Services/pokemon';
import Container from 'Components/Container';
import Flex from 'Components/Flex';

// import Pokemon from './Pokemon';

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

class Trainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <PokemonList pokemons={this.props.trainerPokemons} />
      </Container>
    );
  }
}

export default Trainer;
