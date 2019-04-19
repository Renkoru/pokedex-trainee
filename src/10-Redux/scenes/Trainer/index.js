import React from 'react';

import Container from 'Components/Container';

import Profile from './Profile';
import PokemonList from './PokemonList';

function Trainer() {
  return (
    <Container>
      <Profile />
      <PokemonList />
    </Container>
  );
}

export default Trainer;
