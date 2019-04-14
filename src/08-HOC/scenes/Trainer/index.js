import React from 'react';

import Container from 'Components/Container';

import Profile from './Profile';
import PokemonList from './PokemonList';

function Trainer({ trainer, trainerDispatch }) {
  return (
    <Container>
      <Profile />
      <PokemonList
        trainer={trainer}
        trainerDispatch={trainerDispatch}
      />
    </Container>
  );
}

export default Trainer;
