import React from 'react';
import styled from '@emotion/styled';

import Pokemon from './Pokemon';
import Catch from './Catch';

function PlayGround({ onCatch, pokemon }) {
  return (
    <Container>
      <Catch onClick={onCatch} />
      <Pokemon
        pid={pokemon.pid}
        imageUrl={pokemon.imageUrl}
        css={{ marginLeft: 'auto', alignSelf: 'flex-end' }}
      />
    </Container>
  );
}

const Container = styled('div')({
  flexGrow: '1',
  display: 'flex',
});

export default PlayGround;
