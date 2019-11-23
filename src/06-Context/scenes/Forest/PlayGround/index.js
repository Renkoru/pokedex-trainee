import React from 'react';
import styled from '@emotion/styled';

import { isCaught } from 'Services/pokemon';
import Pokemon from './Pokemon';
import Catch from './Catch';
import { useStore } from '../../../store';

function PlayGround({ onCatch, pokemon }) {
  const { addNotification } = useStore();

  function _onCatch() {
    let notification;
    if (isCaught()) {
      notification = {
        type: 'warning',
        message: (
          <span>
            Pokemon <b>{pokemon.name}</b> caught! (Implementation required)
          </span>
        ),
      };
    } else {
      notification = {
        type: 'danger',
        message: (
          <span>
            Pokemon <b>{pokemon.name}</b> escaped!
          </span>
        ),
      };
    }

    addNotification(notification);

    onCatch();
  }

  return (
    <Container>
      <Catch onClick={_onCatch} />
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
